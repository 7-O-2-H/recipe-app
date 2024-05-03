// imports
import axios from "axios";

// get all tags
export function getAllmeasurements() {

  return axios.get('http://localhost:8080/measurements')
  .then((data) => {
    return data;
  })
  .catch((e) => {
    console.log("axios error: ", e);
  });
};