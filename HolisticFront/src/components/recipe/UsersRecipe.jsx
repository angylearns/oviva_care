import React, { useState, useEffect } from 'react';
import './usersRecipe.css';
import recipeService from '../../services/recipeService';

const UsersRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const categorias = ["Desayunos", "Almuerzos", "Meriendas", "Cenas"];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const recipesData = await recipeService.getAllRecipes();
      setRecipes(recipesData);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories(
      selectedCategories.includes(category)
        ? selectedCategories.filter((c) => c !== category)
        : [...selectedCategories, category]
    );
  };

  const filterRecipesByCategory = () => {
    if (selectedCategories.length === 0) {
      return recipes;
    } else {
      return recipes.filter((recipe) => selectedCategories.includes(recipe.category));
    }
  };

  const filteredRecipes = filterRecipesByCategory();

  return (
    <div className="users-recipe">
      <h1>Recetas</h1>
      <div className="categories">
        {categorias.map((categoria) => (
          <div key={categoria} className="category">
            <input
              type="checkbox"
              id={categoria}
              checked={selectedCategories.includes(categoria)}
              onChange={() => handleCategoryChange(categoria)}
            />
            <label htmlFor={categoria}>{categoria}</label>
          </div>
        ))}
      </div>
      <div className="recipes">
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id_recipe} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            <div className="recipe-info">
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersRecipe;
