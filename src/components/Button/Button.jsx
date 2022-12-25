import PropTypes from 'prop-types';
import styles from './Button.module.css';

export const Button = ({ loadMore }) => {
  return (
    <button onClick={loadMore} type="button" className={styles.Button}>
      Load more
    </button>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
