import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import styles from './ImageGallery.module.css';

export const ImageGallery = ({ items, getImageUrl, toggleModal }) => {
  return (
    <ul className={styles.ImageGallery}>
      {items.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          tags={tags}
          largeImageURL={largeImageURL}
          webformatURL={webformatURL}
          getImageUrl={getImageUrl}
          toggleModal={toggleModal}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  getImageUrl: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
