import styles from './LoaderPage.module.css';

const LoaderPage = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default LoaderPage;