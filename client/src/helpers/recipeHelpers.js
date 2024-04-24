// imports
import axios from "axios";


// recipe functions
export function getAllRecipes() {

  return axios.get('http://localhost:8080/recipes')
  .then((data) => {
    return data;
  })
  .catch((e) => {
    console.log("axios error: ", e);
  });
};

export function getRecipeByRecipeId(id) {

  return axios.get(`http://localhost:8080/recipes/${id}`)
  .then((data) => {
    return data;
  })
  .catch((e) => {
    console.log("axios error: ", e);
  });
};

export function getRecipeUserId(id) {

  return axios.get(`http://localhost:8080/recipes/users/${id}`)
  .then((data) => {
    return data;
  })
  .catch((e) => {
    console.log("axios error: ", e);
  });
};

//ingredients functions
export function getIngredientsByRecipeId(id) {

  return axios.get(`http://localhost:8080/recipes/${id}/ingredients/`)
  .then((data) => {
    return data;
  })
  .catch((e) => {
    console.log("axios error: ", e);
  });
};

// steps
export function getStepsByRecipeId(id) {
  return axios.get(`http://localhost:8080/recipes/${id}/steps`)
  .then((data) => {
    return data;
  })
  .catch((e) => {
    console.log("axios error: ", e);
  });
};