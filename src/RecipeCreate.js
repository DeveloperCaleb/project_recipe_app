import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  const initialRender = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ initialRender });
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData(initialRender);
  };

  return (
    <form
      name="create"
      onSubmit={handleSubmit}
      style={{ backgroundColor: "wheat" }}
    >
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                value={formData.name}
              ></input>
            </td>
            <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                placeholder="Cuisine"
                onChange={handleChange}
                value={formData.cuisine}
              ></input>
            </td>
            <td>
              <input
                id="photo"
                type="text"
                name="photo"
                placeholder="URL"
                onChange={handleChange}
                value={formData.photo}
              ></input>
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                placeholder="Ingredients"
                onChange={handleChange}
                value={formData.ingredients}
              ></textarea>
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                placeholder="Preparation"
                onChange={handleChange}
                value={formData.preparation}
              ></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
