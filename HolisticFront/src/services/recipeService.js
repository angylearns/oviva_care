import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5000';

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

  addRecipe: async (newRecipe, fetchData) => {
    try {
        await axios.post(`${API_BASE_URL}/recipe/`, newRecipe);
        alert('Receta Agregada Exitosamente');
        fetchData();
      } catch (error) {
        console.error('Error al agregar la receta:', error);
      }
  },

  updateRecipe: async (recipeId, newRecipe, fetchData) => {
    try {
        await axios.put(`${API_BASE_URL}/recipe/${recipeId}`, newRecipe);
      alert('Receta actualizada exitosamente');
      fetchData();
    } catch (error) {
      console.error('Error al actualizar receta:', error);
    }
      
    },
  

  deleteRecipe: async (recipeIdId, fetchData) => {
    try {
      await axios.delete(`${API_BASE_URL}/recipe/${recipeId}`);
      alert('Receta eliminada exitosamente');
      fetchData();
    } catch (error) {
      console.error('Error al eliminar receta:', error);
    }
  },

};

export default recipeService;