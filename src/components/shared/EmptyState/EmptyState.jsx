import styles from './EmptyState.module.css';

const EmptyState = ({ message, icon = "🔍" }) => {
  return (
    <div className={styles.emptyState}>
      <span className={styles.emptyIcon}>{icon}</span>
      <p className={styles.emptyMessage}>{message}</p>
    </div>
  );
};

export default EmptyState;