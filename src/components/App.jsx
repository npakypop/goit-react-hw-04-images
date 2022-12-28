import { Component } from 'react';
import { getImages } from '../services/api';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    photos: [],
    query: '',
    page: 1,
    isLoading: false,
    isBtnShow: false,
    modalImg: null,
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });
      try {
        const { hits: photos, totalHits } = await getImages(
          this.state.query,
          this.state.page
        );
        console.log(photos);
        this.setState(prevState => ({
          photos: [...prevState.photos, ...photos],
          isBtnShow: this.state.page < Math.ceil(totalHits / 12),
        }));
      } catch (error) {
        console.log(error.message);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  onFormSubmit = query => {
    this.setState({ query, photos: [], page: 1 });
  };

  setModalImg = largeImageURL => {
    this.setState({ modalImg: largeImageURL });
  };

  render() {
    return (
      <div>
        <Searchbar onFormSubmit={this.onFormSubmit} />
        <ImageGallery
          photos={this.state.photos}
          setModalImg={this.setModalImg}
        />
        {this.state.isBtnShow && <Button onClick={this.loadMore} />}
        {this.state.modalImg && (
          <Modal
            largeImageURL={this.state.modalImg}
            setModalImg={this.setModalImg}
          />
        )}
        {this.state.isLoading && <Loader />}
      </div>
    );
  }
}
