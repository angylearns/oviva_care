import React, { useState } from "react";
import { addRecipe } from "../../handlers/recipeHandle";

const Recipe = () => {
  const [recipeData, setRecipeData] = useState({
    title: "",
    imageUrl: "",
    imageFile: null,
    description: "",
    category: "", // Por defecto, ninguna categoría seleccionada
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setRecipeData((prevData) => ({
      ...prevData,
      imageUrl: URL.createObjectURL(file),
      imageFile: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addRecipe(recipeData);
      // Optionally, you can reset the form after successful upload
      setRecipeData({
        title: "",
        imageUrl: "",
        imageFile: null,
        description: "",
        category: "", // Reiniciar la categoría a ninguna
      });
      alert("Recipe uploaded successfully!");
    } catch (error) {
      console.error("Error uploading recipe:", error);
      alert("Failed to upload recipe. Please try again later.");
    }
  };

  return (
    <div>
      <h1>Upload Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={recipeData.title}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Image:
          <input type="file" onChange={handleFileChange} required />
        </label>
        <br />
        {recipeData.imageUrl && (
          <img
            src={recipeData.imageUrl}
            alt="Preview"
            style={{ maxWidth: "250px", maxHeight: "250px", height: "auto" }}
          />
        )}
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={recipeData.description}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <br />
        <label>
          Category:
          <select
            name="category"
            value={recipeData.category}
            onChange={handleChange}
            required
          >
            <option value="">Escoja categoría de la receta</option>
            <option value="Desayuno">Desayuno</option>
            <option value="Almuerzo">Almuerzo</option>
            <option value="Merienda">Merienda</option>
            <option value="Cena">Cena</option>
          </select>
        </label>
        <br />
        <button type="submit">Upload Recipe</button>
      </form>
    </div>
  );
};

export default Recipe;
