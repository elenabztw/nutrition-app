import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNutrition } from '../../hooks/useNutrition'; // Импортируем hook
import Nutrition from '../../components/Nutrition/Nutrition';
import EmptyState from '../../components/shared/EmptyState/EmptyState';
import ErrorMessage from '../../components/shared/ErrorMessage/ErrorMessage';
import LoaderPage from '../../components/shared/Loader/LoaderPage';
import VideoBackground from '../../components/shared/VideoBackground/VideoBackground';
import video from '../../assets/food.mp4';
import styles from './NutritionPage.module.css';

function NutritionPage() {
  const [searchText, setSearchText] = useState('');
  
  const {
    nutrition,
    loading,
    error,
    analyzeNutrition,
    clearNutrition,
    retry
  } = useNutrition();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      analyzeNutrition(searchText);
    }
  };

  const handleRetry = () => {
    retry(searchText);
  };

  const handleClear = () => {
    setSearchText('');
    clearNutrition();
  };

  return (
    <div className={styles.nutritionPage}>
      <VideoBackground src={video} />

      <div className={styles.container}>
        <div className={styles.backLink}>
          <Link to="/">← Back to Recipes</Link>
        </div>

        <h1 className={styles.title}>Nutrition Analysis</h1>

        <form onSubmit={handleSubmit} className={styles.searchForm}>
          <textarea
            className={styles.searchInput}
            placeholder="Enter ingredients (one per line)&#10;Example:&#10;1 cup rice&#10;2 eggs&#10;1 tbsp olive oil"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            rows="5"
          />
          <div className={styles.buttonGroup}>
            <button className={styles.searchBtn} type="submit" disabled={loading}>
              {loading ? 'Analyzing...' : 'Analyze Nutrition'}
            </button>
            {nutrition && (
              <button 
                className={styles.clearBtn} 
                type="button" 
                onClick={handleClear}
              >
                Clear
              </button>
            )}
          </div>
        </form>

        {loading && <LoaderPage />}

        {error && !loading && (
          <ErrorMessage message={error} onRetry={handleRetry} />
        )}

        {!loading && !error && !nutrition && (
          <EmptyState
            message="Enter ingredients above to see detailed nutrition information"
            icon="🥗"
          />
        )}

        {!loading && !error && nutrition && (
          <div className={styles.nutritionResults}>
            <div className={styles.caloriesCard}>
              <h2>Total Calories</h2>
              <p className={styles.caloriesValue}>
                {Math.round(nutrition.calories)} <span>kcal</span>
              </p>
            </div>

            <div className={styles.macrosSection}>
              <h3 className={styles.sectionTitle}>Macronutrients</h3>
              <div className={styles.nutrientsList}>
                {Object.entries(nutrition.totalNutrients)
                  .filter(([key]) => 
                    ['ENERC_KCAL', 'FAT', 'CHOCDF', 'PROCNT', 'FIBTG'].includes(key)
                  )
                  .map(([key, { label, quantity, unit }]) => (
                    <Nutrition
                      key={key}
                      label={label}
                      quantity={quantity}
                      unit={unit}
                    />
                  ))}
              </div>
            </div>

            <div className={styles.vitaminsSection}>
              <h3 className={styles.sectionTitle}>Vitamins & Minerals</h3>
              <div className={styles.nutrientsList}>
                {Object.entries(nutrition.totalNutrients)
                  .filter(([key]) => 
                    !['ENERC_KCAL', 'FAT', 'CHOCDF', 'PROCNT', 'FIBTG'].includes(key)
                  )
                  .map(([key, { label, quantity, unit }]) => (
                    <Nutrition
                      key={key}
                      label={label}
                      quantity={quantity}
                      unit={unit}
                    />
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NutritionPage;