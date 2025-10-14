import styles from './RecipeCard.module.css';

const RecipeCard = ({ label, image, calories, ingredients }) => {
  return (
    <div className={styles.recipeCard}>
      <div className={styles.recipeHeader}>
        <h2>{label}</h2>
      </div>

      <div className={styles.recipeImage}>
        <img src={image} alt={label} />
      </div>

      <div className={styles.recipeCalories}>
        <p>
          <strong>{Math.round(calories)}</strong> calories
        </p>
      </div>

      <div className={styles.recipeIngredients}>
        <h3>Ingredients:</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              <span className={styles.checkmark}>✓</span>
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeCard;