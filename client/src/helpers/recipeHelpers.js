// imports
import axios from "axios";

export function getAllRecipes() {

  return axios.get('http://localhost:8080/recipes')
  .then((data) => {
    return data;
  })
  .catch((e) => {
    console.log("axios error: ", e);
  });
};

export function getIngredientsByRecipeId(id) {

  return axios.get(`http://localhost:8080/ingredients/${id}`)
  .then((data) => {
    return data;
  })
  .catch((e) => {
    console.log("axios error: ", e, "id:", id);
  });
};

export function getRecipeByRecipeId(id) {

  return axios.get(`http://localhost:8080/recipes/${id}`)
  .then((data) => {
    return data;
  })
  .catch((e) => {
  });
};