// imports
import axios from "axios";


// recipe functions
export function getFavouritesByUserId(id) {

  return axios.get(`http://localhost:8080/favourites/${id}`)
  .then((data) => {
    return data['data'];
  })
  .catch((e) => {
    console.log("axios error: ", e);
  });
};

export function addFavourite(userId, recipeId) {

  return axios.post(`http://localhost:8080/favourites/add`, {userId, recipeId})
  .then((data) => {
    return data['data'];
  })
  .catch((e) => {
    console.log("axios error: ", e);
  });
};

export function getAllFavourites() {
  return axios.get(`http://localhost:8080/favourites`)
  .then((data) => {
    return data;
  })
  .catch((e) => {
    console.log("axios error: ", e);
  });
};