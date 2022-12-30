import { useEffect, useState } from 'react';
import { getImages } from '../services/api';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import css from './App.module.css';

export const App = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isBtnShow, setIsBtnShow] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);
    getImages(query, page)
      .then(({ hits: photos, totalHits }) => {
        if (photos.length === 0) {
          alert('there is no matches');
          return;
        }
        setPhotos(prevState => [...prevState, ...photos]);
        setIsBtnShow(page < Math.ceil(totalHits / 12));
      })
      .catch(error => console.log(error.message))
      .finally(() => setIsLoading(false));
  }, [query, page]);

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const onFormSubmit = resp => {
    if (resp === query) {
      alert('this query has already been completed');
      return;
    }
    setQuery(resp);
    setPhotos([]);
    setPage(1);
  };

  const setLargeModalImg = largeImageURL => {
    setModalImg(largeImageURL);
  };

  return (
    <div className={css.App}>
      <Searchbar onFormSubmit={onFormSubmit} />
      <ImageGallery photos={photos} setModalImg={setModalImg} />
      {isBtnShow && <Button onClick={loadMore} />}
      {modalImg && (
        <Modal largeImageURL={modalImg} setModalImg={setLargeModalImg} />
      )}
      {isLoading && <Loader />}
    </div>
  );
};
