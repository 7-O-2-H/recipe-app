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

export function getRecipesByUserId(id) {

  return axios.get(`http://localhost:8080/recipes/users/${id}`)
  .then((data) => {
    return data;
  })
  .catch((e) => {
    console.log("axios error: ", e);
    return data;
  });
};

export function deleteRecipe(id) {

  return axios.post(`http://localhost:8080/recipes/delete`, {id})
    .then((res) => {
      console.log('Response status: ', res.status);
      return;
    })
    .catch((err) => {
      console.log("axios error: ", err)
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