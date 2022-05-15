import React from "react";
import RecipeItem from "./RecipeItem";

function RecipeList({ recipes, deleteRecipes }) {
  //each item in the recipes prop will be passed as a prop to the RecipeItem component.
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
        </thead>
        <tbody>{recipeMap}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;
