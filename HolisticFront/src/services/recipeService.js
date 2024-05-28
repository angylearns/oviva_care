import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5001';

const recipeService = {
  getAllRecipes: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/recipe`);
      return response.data;
    } catch (error) {
      console.error('Error fetching recipes:', error);
      throw error;
    }
  },

  addRecipe: async (newRecipe) => {
    try {
      await axios.post(`${API_BASE_URL}/recipe/`, newRecipe);
    } catch (error) {
      console.error('Error al agregar la receta:', error);
      throw error;
    }
  },

  updateRecipe: async (recipeId, newRecipe) => {
    try {
      await axios.put(`${API_BASE_URL}/recipe/${recipeId}`, newRecipe);
    } catch (error) {
      console.error('Error al actualizar receta:', error);
      throw error;
    }
  },

  deleteRecipe: async (recipeId) => {
    try {
      await axios.delete(`${API_BASE_URL}/recipe/${recipeId}`);
    } catch (error) {
      console.error('Error al eliminar receta:', error);
      throw error;
    }
  },
};

export default recipeService;