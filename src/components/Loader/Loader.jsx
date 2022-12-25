import { ThreeDots } from 'react-loader-spinner';
import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <ThreeDots
        height="100"
        width="100"
        radius="9"
        color="#3f51b5"
        ariaLabel="three-dots-loading"
        //   wrapperStyle
        //   wrapperClass
      />
    </div>
  );
};
