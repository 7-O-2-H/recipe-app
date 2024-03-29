// imports
import axios from "axios";

export function loginByEmail() {

  return axios.get('http://localhost:8080/users/loginByEmail')
  .then((data) => {
    // console.log(data);
    return data;
  })
  .catch((e) => {
    console.log("axios error: ", e);
  });
};
