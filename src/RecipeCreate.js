import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  const initialFormData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ initialFormData });
  //When form fields are changed the value of the equivalent object key in the formData is changed to the new value.
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  //On submit of the form a new recipe will be created using the createRecipe prop and then the formData will be reset to the initialFormData
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData(initialFormData);
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
                required
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
                required
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
                required
              ></input>
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                placeholder="Ingredients"
                onChange={handleChange}
                value={formData.ingredients}
                required
              ></textarea>
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                placeholder="Preparation"
                onChange={handleChange}
                value={formData.preparation}
                required
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
