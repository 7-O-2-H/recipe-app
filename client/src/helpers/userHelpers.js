// imports
import axios from "axios";

export function validateUser(email, password) {

  return axios.put('http://localhost:8080/users/login', {email, password})
  .then((data) => {
    return data;
  })
  .catch((e) => {
    console.log("axios error: ", e);
  });
};

export async function addUser(userData) {
  try {
    const response = await axios.put('http://localhost:8080/users/add', { userData });
    console.log('Response from backend:', response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      console.log('Error:', error.message);
      throw error;
    }
  }
};

