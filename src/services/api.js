// API Configuration
const RECIPE_API = {
  ID: import.meta.env.VITE_EDAMAM_RECIPE_ID,
  KEY: import.meta.env.VITE_EDAMAM_RECIPE_KEY,
  URL: 'https://api.edamam.com/api/recipes/v2'
};

const NUTRITION_API = {
  ID: import.meta.env.VITE_EDAMAM_NUTRITION_ID,
  KEY: import.meta.env.VITE_EDAMAM_NUTRITION_KEY,
  URL: 'https://api.edamam.com/api/nutrition-details'
};

// Recipe API
export const recipeAPI = {
  search: async (query) => {
    try {
      const response = await fetch(
        `${RECIPE_API.URL}?type=public&q=${query}&app_id=${RECIPE_API.ID}&app_key=${RECIPE_API.KEY}`
      );

      if (response.status === 429) {
        throw new Error('Rate limit exceeded. Please wait a moment and try again.');
      }

      if (!response.ok) {
        throw new Error(`Failed to fetch recipes: ${response.status}`);
      }

      const data = await response.json();
      return { success: true, data: data.hits };
    } catch (error) {
      console.error('Recipe API Error:', error);
      return { success: false, error: error.message };
    }
  }
};

// Nutrition API
export const nutritionAPI = {
  analyze: async (ingredients) => {
    try {
      const response = await fetch(
        `${NUTRITION_API.URL}?app_id=${NUTRITION_API.ID}&app_key=${NUTRITION_API.KEY}`,
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
        throw new Error('Please enter more detailed ingredients, e.g.: 1 cup rice, 2 eggs, 1 tbsp olive oil');
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      console.error('Nutrition API Error:', error);
      return { success: false, error: error.message };
    }
  }
};