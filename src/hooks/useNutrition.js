import { useState, useCallback } from 'react';

const CACHE_KEY = 'edamam_nutrition_cache';
const CACHE_DURATION = 1000 * 60 * 60; // 1 час

export const useNutrition = () => {
  const [nutrition, setNutrition] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const APP_ID = import.meta.env.VITE_EDAMAM_NUTRITION_ID;
  const APP_KEY = import.meta.env.VITE_EDAMAM_NUTRITION_KEY;
  const APP_URL = 'https://api.edamam.com/api/nutrition-details';

  const getCachedData = (ingredients) => {
    try {
      const key = `${CACHE_KEY}_${ingredients.join(',')}`;
      const cached = localStorage.getItem(key);
      
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        const isExpired = Date.now() - timestamp > CACHE_DURATION;
        
        if (!isExpired) {
          console.log('Using cached nutrition data');
          return data;
        }
      }
    } catch (err) {
      console.error('Cache error:', err);
    }
    return null;
  };

  const setCachedData = (ingredients, data) => {
    try {
      const key = `${CACHE_KEY}_${ingredients.join(',')}`;
      const cacheData = {
        data,
        timestamp: Date.now()
      };
      localStorage.setItem(key, JSON.stringify(cacheData));
    } catch (err) {
      console.error('Cache save error:', err);
    }
  };

  const analyzeNutrition = useCallback(async (ingredientsText) => {
    if (!ingredientsText?.trim()) return;

    const ingredients = ingredientsText
      .split(/[,;\n\r]+/)
      .map(i => i.trim())
      .filter(i => i);

    if (ingredients.length === 0) return;

    const cachedNutrition = getCachedData(ingredients);
    if (cachedNutrition) {
      setNutrition(cachedNutrition);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      console.log('🌐 Fetching nutrition data from API');
      const response = await fetch(
        `${APP_URL}?app_id=${APP_ID}&app_key=${APP_KEY}`,
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ingr: ingredients })
        }
      );

      if (response.status === 429) {
        throw new Error('Rate limit exceeded. Please wait a moment and try again.');
      }

      if (!response.ok) {
        throw new Error(
          'Please enter more detailed ingredients, e.g.: 1 cup rice, 2 eggs, 1 tbsp olive oil'
        );
      }

      const data = await response.json();
      setNutrition(data);
      setCachedData(ingredients, data);
    } catch (err) {
      setError(err.message);
      setNutrition(null);
    } finally {
      setLoading(false);
    }
  }, [APP_ID, APP_KEY, APP_URL]);

  const clearNutrition = useCallback(() => {
    setNutrition(null);
    setError(null);
  }, []);

  const retry = useCallback((ingredientsText) => {
    const ingredients = ingredientsText
      .split(/[,;\n\r]+/)
      .map(i => i.trim())
      .filter(i => i);
    
    const key = `${CACHE_KEY}_${ingredients.join(',')}`;
    localStorage.removeItem(key);
    
    analyzeNutrition(ingredientsText);
  }, [analyzeNutrition]);

  return {
    nutrition,
    loading,
    error,
    analyzeNutrition,
    clearNutrition,
    retry
  };
};