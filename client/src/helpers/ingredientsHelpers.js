// imports
import axios from "axios";

// get all tags
export function getAllIngredients() {

  return axios.get('http://localhost:8080/ingredients')
  .then((data) => {
    return data;
  })
  .catch((e) => {
    console.log("axios error: ", e);
  });
};