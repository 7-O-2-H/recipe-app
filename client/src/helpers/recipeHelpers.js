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

export async function addRecipe(recipeData) {

  try {
    const res = await axios.post(`http://localhost:8080/recipes/add`, { recipeData });
    console.log('Response status: ', res.status);
    return res.data[0].id;
  } catch (err) {
    console.error("axios error: ", err);
    throw err;
  }
};

export async function editRecipeDetails(recipeData) {

  try {
    const res = await axios.post(`http://localhost:8080/recipes/edit`, { recipeData });
    console.log('Response status: ', res.status);
    // return res.data[0].id;
  } catch (err) {
    console.error("axios error: ", err);
    throw err;
  }
};

export async function deleteRecipe(id) {

  try {
    const res = await axios.post('http://localhost:8080/recipes/delete', {id});
    console.log('Res status: ', res.status);
    return;
  } catch (e) {
    console.error("axiois error: ", e);
    throw e;
  }
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

export async function getRecipesBySortingData(sortingData) {

  try {
    console.log('triggering helper');
    const data = await axios.get(`http://localhost:8080/recipes/sorting`, {
      params: {
        ingredient: sortingData.ingredient,
        tag: sortingData.tag,
        maxTime: sortingData.maxTime,
        searchQuery: sortingData.searchQuery
      }});
    return data;
  } catch (error) {
    console.log("axios error: ", error);
  }
};

//search
export async function search(query) {

  try {
    const res = await axios.get(`http://localhost:8080/recipes/search/${query}`, {query});
    console.log('Res status: ', res.status);
    return res.data;
  } catch (e) {
    console.error("axiois error: ", e);
    throw e;
  }
};

