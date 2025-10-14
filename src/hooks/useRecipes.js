import { useState, useCallback } from 'react';
import { recipeAPI } from '../services/api';

const CACHE_DURATION = 1000 * 60 * 60; // 1 час
const CACHE_KEY = 'edamam_recipes_cache';

export const useRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCachedData = (query) => {
    try {
      const cached = localStorage.getItem(`${CACHE_KEY}_${query}`);
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        const isExpired = Date.now() - timestamp > CACHE_DURATION;
        
        if (!isExpired) {
          console.log('📦 Using cached data for:', query);
          return data;
        }
      }
    } catch (err) {
      console.error('Cache error:', err);
    }
    return null;
  };

  const setCachedData = (query, data) => {
    try {
      const cacheData = {
        data,
        timestamp: Date.now()
      };
      localStorage.setItem(`${CACHE_KEY}_${query}`, JSON.stringify(cacheData));
    } catch (err) {
      console.error('Cache save error:', err);
    }
  };

  const searchRecipes = useCallback(async (query) => {
    if (!query.trim()) return;

    const cachedRecipes = getCachedData(query);
    if (cachedRecipes) {
      setRecipes(cachedRecipes);
      return;
    }
    
    setLoading(true);
    setError(null);
    
    console.log('🌐 Fetching from API:', query);
    const result = await recipeAPI.search(query);
    
    if (result.success) {
      setRecipes(result.data);
      setCachedData(query, result.data);
    } else {
      setError(result.error);
      setRecipes([]);
    }
    
    setLoading(false);
  }, []);

  return { recipes, loading, error, searchRecipes };
};