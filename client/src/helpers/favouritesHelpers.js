// imports
import axios from "axios";


// recipe functions
export function getFavouritesByUserId(id) {

  return axios.get(`http://localhost:8080/favourites/${id}`)
  .then((data) => {
    console.log(data);
    return data;
  })
  .catch((e) => {
    console.log("axios error: ", e);
  });
};