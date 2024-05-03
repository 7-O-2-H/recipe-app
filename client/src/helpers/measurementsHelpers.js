// imports
import axios from "axios";

// get all tags
export function getAllMeasurements() {

  return axios.get('http://localhost:8080/measurements')
  .then((data) => {
    return data;
  })
  .catch((e) => {
    console.log("axios error: ", e);
  });
};