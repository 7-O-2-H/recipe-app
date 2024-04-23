// imports
import axios from "axios";

export function validateUser(email, password) {

  return axios.put('http://localhost:8080/users/login', {email, password})
  .then((data) => {
    // console.log(data);
    return data;
  })
  .catch((e) => {
    console.log("axios error: ", e);
  });
};
