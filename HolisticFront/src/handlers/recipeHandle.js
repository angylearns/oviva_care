
import recipeService from "../services/recipeService";

export const addRecipe = async (newRecipe, fetchData) => {
  try {
    await recipeService.addRecipe(newRecipe, fetchData);
    alert('Receta agregada exitosamente');
  } catch (error) {
    console.error('Error al guardar receta:', error);
  }
};

export const updateRecipe = async (recipeId, newRecipe, fetchData) => {
  try {
    await recipeService.updateRecipe(recipeId, newRecipe, fetchData);
    alert('Receta actualizada exitosamente');
  } catch (error) {
    console.error('Error al actualizar receta:', error);
  }
};

export const handleEdit = (recipeId, recipes, setNewRecipe, setIsEditing) => {
  const recipeToEdit = recipes.find((recipe) => recipe.id_recipe === recipeId);
  setNewRecipe({
    ...recipeToEdit,
    id_recipe: recipeToEdit.id_recipe,
  });
  setIsEditing(true);
};

export const deleteRecipe = async (recipeId, fetchData) => {
  try {
    await recipeService.deleteRecipe(recipeId, fetchData);
    alert('Receta eliminada exitosamente');
  } catch (error) {
    console.error('Error al eliminar receta:', error);
  }
};