import React from "react";
import RecipeItem from "./RecipeItem";

function RecipeList({ recipes, deleteRecipes }) {
  const recipeMap = recipes.map((recipe, index) => (
    <RecipeItem
      deleteRecipe={() => deleteRecipes(index)}
      key={index}
      recipe={recipe}
    />
  ));

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Action</th>
          </tr>
          {recipeMap}
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default RecipeList;
