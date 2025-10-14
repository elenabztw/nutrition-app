import { useEffect, useState } from 'react';
import { useRecipes } from '../../hooks/useRecipes';
import RecipeCard from '../../components/Recipe/RecipeCard';
import EmptyState from '../../components/shared/EmptyState/EmptyState';
import ErrorMessage from '../../components/shared/ErrorMessage/ErrorMessage';
import LoaderPage from '../../components/shared/Loader/LoaderPage';
import VideoBackground from '../../components/shared/VideoBackground/VideoBackground';
import video from '../../assets/food.mp4';
import styles from './Home.module.css';

function Home() {
  const [searchInput, setSearchInput] = useState('');
  const { recipes, loading, error, searchRecipes } = useRecipes();

  // Загружаем рецепты при первом рендере
  useEffect(() => {
    searchRecipes('beef'); // Начальный поиск
  }, []); // Только один раз при монтировании

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      searchRecipes(searchInput);
    }
  };

  return (
    <div className={styles.home}>
      <VideoBackground src={video} />

      <div className={styles.homeHeader}>
        <h1>Find a Recipe</h1>
        <div className={styles.searchContainer}>
          <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
            <input
              onChange={handleSearchChange}
              className={styles.searchInput}
              placeholder="Search ingredients..."
              value={searchInput}
            />
            <button type="submit" className={styles.searchButton}>
              <img 
                src="https://img.icons8.com/fluency/48/000000/fry.png" 
                alt="search icon"
              />
              Search
            </button>
          </form>
        </div>
      </div>

      {loading && (
        <div className={styles.loadingContainer}>
          <LoaderPage />
          <p>Loading delicious recipes...</p>
        </div>
      )}

      {error && !loading && (
        <ErrorMessage 
          message={error} 
          onRetry={() => searchRecipes(searchInput || 'beef')} 
        />
      )}

      {!loading && !error && recipes.length === 0 && (
        <EmptyState
          message="No recipes found. Try searching for something else!"
          icon="🍽️"
        />
      )}

      {!loading && !error && recipes.length > 0 && (
        <div className={styles.recipesGrid}>
          {recipes.map((element, index) => (
            <RecipeCard
              key={`${element.recipe.uri}-${index}`}
              label={element.recipe.label}
              image={element.recipe.image}
              calories={element.recipe.calories}
              ingredients={element.recipe.ingredientLines}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;