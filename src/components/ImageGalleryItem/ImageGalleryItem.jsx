import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  setModalImg,
}) => {
  return (
    <li
      className={css.ImageGalleryItem}
      onClick={() => setModalImg(largeImageURL)}
    >
      <img
        className={css.ImageGalleryItemImage}
        src={webformatURL}
        alt={tags}
      />
    </li>
  );
};
