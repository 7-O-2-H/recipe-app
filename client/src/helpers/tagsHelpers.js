// imports
import axios from "axios";

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

export function addTags(tagsArray) {

  // console.log("succesfully used helper: ", tagsArray);

  return axios.post(`http://localhost:8080/tags/add`, {tagsArray})
  .then((data) => {
    return data;
  })
  .catch((error) => {
    console.log('axios error: ', error);
  });
};

export function getAllTags() {

  return axios.get('http://localhost:8080/tags')
  .then((data) => {
    return data;
  })
  .catch((e) => {
    console.log("axios error: ", e);
  });
};

export function getFullTagsInfo(id) {

  return axios.get(`http://localhost:8080/tags/full/${id}`)
  .then((data) => {
    return data;
  })
  .catch((e) => {
    console.log("axios error: ", e);
  });
};

export async function deleteTags(tags) {

  try {
    const res = await axios.post('http://localhost:8080/tags/delete', {tags});
    console.log('Res status: ', res.status);
    return;
  } catch (e) {
    console.error("axiois error: ", e);
    throw e;
  }
};