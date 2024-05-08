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

// post

export function addIngredient(ingredient) {

  return axios.post(`http://localhost:8080/ingredients/add`, {ingredient})
    .then((res) => {
      console.log('Response status: ', res.status);
      return;
    })
    .catch((err) => {
      console.log("axios error: ", err)
    });
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