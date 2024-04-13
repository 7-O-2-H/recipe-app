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