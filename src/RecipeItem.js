import React from "react";
import "./RecipeItem.css";

function RecipeItem({ recipe, deleteRecipe }) {
  return (
    <>
      <tr>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td>
          <img src={recipe.photo}></img>
        </td>
        <td>{recipe.ingredients}</td>
        <td>{recipe.preparation}</td>
        <td>
          <button onClick={deleteRecipe} name="button">
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default RecipeItem;
