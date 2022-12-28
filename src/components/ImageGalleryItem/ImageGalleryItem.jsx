export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  setModalImg,
}) => {
  return (
    <li onClick={() => setModalImg(largeImageURL)}>
      <img src={webformatURL} alt={tags} />
    </li>
  );
};
