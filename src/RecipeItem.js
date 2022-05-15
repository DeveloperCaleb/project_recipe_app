import React from "react";
import "./RecipeItem.css";

function RecipeItem({ recipe, deleteRecipe }) {
  //creates a new row using the information from the recipe prop.
  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img src={recipe.photo} alt={`Picture of ${recipe.name}`}></img>
      </td>
      <td>{recipe.ingredients}</td>
      <td>{recipe.preparation}</td>
      <td>
        <button name="delete" onClick={deleteRecipe}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default RecipeItem;
