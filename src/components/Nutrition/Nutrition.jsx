import styles from './Nutrition.module.css';

const Nutrition = ({ label, quantity, unit }) => {
  return (
    <div className={styles.nutritionCard}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>
        {quantity.toFixed(1)} <span className={styles.unit}>{unit}</span>
      </span>
    </div>
  );
};

export default Nutrition;