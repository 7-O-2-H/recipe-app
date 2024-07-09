// imports
import axios from "axios";

// get 
export function getAllIngredients() {

  return axios.get('http://localhost:8080/ingredients')
  .then((data) => {
    return data;
  })
  .catch((e) => {
    console.log("axios error: ", e);
  });
};

export function getIngredientById(id) {

  return axios.get(`http://localhost:8080/ingredients/${id}`)
  .then((data) => {
    return data;
  })
  .catch((e) => {
    console.log("axios error: ", e);
  });
};

export async function getRecipeIngredientsByRecipeId(id) {
  try {
    const res = await axios.get(`http://localhost:8080/ingredients/recipe_ingredients/${id}`)
    return res.data;
  } catch (error) {
    console.log("axios error, ", error);
    throw error;
  }
};

// post

export async function addIngredient(ingredientData) {
  try {
    const res = await axios.post(`http://localhost:8080/ingredients/add`, {ingredientData});
    console.log('Response status: ', res.status);
    return res.data[0];
  } catch (err) {
    console.error("axios error: ", err);
    throw err;
  }
};

export function addRecipeIngredient(recipeIngredientData) {

  return axios.post(`http://localhost:8080/ingredients/addRecipeIngredient`, {recipeIngredientData})
    .then((res) => {
      console.log('Response status: ', res.status);
      return res.data[0].id;
    })
    .catch((err) => {
      console.log("axios error: ", err)
    });
};

export async function deleteIngredient(ingredientData) {

  try {
    const res = await axios.post(`http://localhost:8080/ingredients/delete`, {ingredientData});
    console.log('Res status: ', res.status);
    return;
  } catch (error) {
    console.error('axios error: ', error);
    throw error;
  }
};

export async function editIngredient(ingredientData) {

  console.log(ingredientData);
  
  try {
    const res = await axios.post(`http://localhost:8080/ingredients/edit`, {updatedSteps});
    console.log('Response status: ', res.status);
  } catch (err) {
    console.error("axios error: ", err);
    throw err;
  }
};