// imports
import axios from "axios";

export function getAllRecipes() {

  return axios.get('http://localhost:8080/recipes')
  .then((data) => {
    // console.log(data);
    return data;
  })
  .catch((e) => {
    console.log("axios error: ", e);
  });
};
