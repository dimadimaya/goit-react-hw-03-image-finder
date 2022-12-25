import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  webformatURL,
  tags,
  largeImageURL,
  getImageUrl,
  toggleModal,
}) => {
  return (
    <li className={styles.ImageGalleryItem} onClick={toggleModal}>
      <img
        onClick={() => getImageUrl(largeImageURL)}
        className={styles.ImageGalleryItemImage}
        src={webformatURL}
        alt={tags}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  getImageUrl: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
