import React, { useState, useEffect, useRef } from "react";
import "./recipe.css";
import recipeService from "../../services/recipeService";
import {
  addRecipe,
  updateRecipe,
  handleEdit,
  deleteRecipe,
} from "../../handlers/recipeHandle";

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    id_recipe: "",
    title: "",
    image: "",
    description: "",
    category: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);
  const [recipeToDelete, setRecipeToDelete] = useState(null);
  const formRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const recipesData = await recipeService.getAllRecipes();
      recipesData.sort((a, b) => a.title.localeCompare(b.title));
      setRecipes(recipesData);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (newRecipe.id_recipe) {
        await updateRecipe(newRecipe.id_recipe, newRecipe, fetchData);
      } else {
        await addRecipe(newRecipe, fetchData);
      }
      setNewRecipe({
        id_recipe: "",
        title: "",
        image: "",
        description: "",
        category: "",
      });
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving recipe:", error);
    }
  };

  const handleEditClick = (recipeId) => {
    handleEdit(recipeId, recipes, setNewRecipe, setIsEditing);
  };

  const handleDelete = (recipeId) => {
    setRecipeToDelete(recipeId);
  };

  const confirmDelete = async () => {
    if (recipeToDelete) {
      await deleteRecipe(recipeToDelete, fetchData);
      setRecipeToDelete(null);
    }
  };

  const handleCancelDelete = () => {
    setRecipeToDelete(null);
  };

  const handleCheckboxChange = (categoria) => {
    const isChecked = categoriasSeleccionadas.includes(categoria);
    if (isChecked) {
      setCategoriasSeleccionadas(
        categoriasSeleccionadas.filter((c) => c !== categoria)
      );
    } else {
      setCategoriasSeleccionadas([...categoriasSeleccionadas, categoria]);
    }
  };

  const filteredRecipes = recipes.filter((recipe) => {
    if (categoriasSeleccionadas.length === 0) return true;
    return categoriasSeleccionadas.includes(recipe.category);
  });

  const categorias = [
    "Desayunos",
    "Almuerzos",
    "Meriendas",
    "Cenas",
  ];

  return (
    <div className="style">
      <div>
        <h1 className="titleH1">Administrador de Recetas</h1>
      </div>

      <div className="navbar">
        {categorias.map((categoria) => (
          <div key={categoria} className="navbar-item">
            <input
              type="checkbox"
              id={categoria}
              value={categoria}
              checked={categoriasSeleccionadas.includes(categoria)}
              onChange={() => handleCheckboxChange(categoria)}
            />
            <label htmlFor={categoria}>{categoria}</label>
          </div>
        ))}
      </div>

      <div className="add-recipe">
        <form
          className="Form-add-recipe"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <div>
            <h1>Añadir Receta</h1>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={newRecipe.title}
                onChange={(e) => setNewRecipe({ ...newRecipe, title: e.target.value })}
                required
              />
            </label>
            <br />
            <label htmlFor="title">Copie la URL de su imagen:</label>
            <input
              type="text"
              id="title"
              value={newRecipe.image}
              onChange={(e) =>
                setNewRecipe({ ...newRecipe, image: e.target.value })
              }
              required
            />
            {newRecipe.image && (
              <img
                src={newRecipe.image}
                alt="Previsualización de la imagen"
                style={{ width: "200px", height: "200px" }}
              />
            )}
            <br />
            <label>
              Description:
              <textarea
                name="description"
                value={newRecipe.description}
                onChange={(e) => setNewRecipe({ ...newRecipe, description: e.target.value })}
                required
              ></textarea>
            </label>
            <br />
            <label>
              Category:
              <select
                name="category"
                value={newRecipe.category}
                onChange={(e) => setNewRecipe({ ...newRecipe, category: e.target.value })}
                required
              >
                <option value="">Seleccionar categoría</option>
                {categorias.map((categoria) => (
                  <option key={categoria} value={categoria}>{categoria}</option>
                ))}
              </select>
            </label>
            <br />
            <button className="button-add-recipe" type="submit">
              {isEditing ? "Editar Receta" : "Añadir Receta"}
            </button>
          </div>
        </form>
      </div>

      <div className="recipe-list">
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id_recipe} className="recipe-card">
            <h3>{recipe.title}</h3>
            <img
              src={recipe.image}
              alt={recipe.title}
              width={300}
              height={300}
            ></img>
            <p>Description: {recipe.description}</p>
            <p>Category: {recipe.category}</p>
            <div>
              <button
                className="btn-cardForm-edit"
                onClick={() => handleEditClick(recipe.id_recipe)}
              >
                Editar
              </button>
              <button
                className="btn-cardForm-delete"
                onClick={() => handleDelete(recipe.id_recipe)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      {recipeToDelete && (
        <div className="confirmation-dialog">
          <p>¿Está seguro de que quiere eliminar esta receta?</p>
          <p>Todos los datos serán borrados y no podrá volver a recuperarla.</p>
          <div>
            <button className="button-delete" onClick={confirmDelete}>Sí, quiero borrarla</button>
            <button className="button-no-delete" onClick={handleCancelDelete}>No, quiero volver atrás</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recipe;


