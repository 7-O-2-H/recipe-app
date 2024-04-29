// imports
import axios from "axios";

// get all tags
export function getAllTags() {

  return axios.get('http://localhost:8080/tags')
  .then((data) => {
    return data;
  })
  .catch((e) => {
    console.log("axios error: ", e);
  });
};

export function getRecipesByTagId(id) {

  return axios.get(`http://localhost:8080/tags/recipes/${id}`)
  .then((data) => {
    return data;
  })
  .catch((e) => {
    console.log("axios error: ", e);
  });
};

export function getTagsByRecipeId(id) {

  return axios.get(`http://localhost:8080/tags/${id}`)
  .then((data) => {
    return data;
  })
  .catch((e) => {
    console.log("axios error: ", e);
  });
};