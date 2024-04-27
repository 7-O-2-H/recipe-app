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
    return data['data'];
  })
  .catch((e) => {
    console.log("axios error: ", e);
  });
};


export function isFavourite(favourites, user_id, recipe_id) {
  // console.log('user_id: ', user_id, 'recipe id: ', recipe_id, 'should be 5: ', favourites[0].user_id, )
  for  (let i = 0; i < favourites.length; i++) {
    if (favourites[i].user_id === user_id && favourites[i].recipe_id === recipe_id) {
      return true;
    }
  }
  return false;
};