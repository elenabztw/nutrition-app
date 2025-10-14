import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className={styles.errorContainer}>
      <span className={styles.errorIcon}>⚠️</span>
      <p className={styles.errorMessage}>{message}</p>
      {onRetry && (
        <button onClick={onRetry} className={styles.retryButton}>
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;