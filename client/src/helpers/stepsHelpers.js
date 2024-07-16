// imports
import axios from "axios";

export function addStep(stepData) {
  return axios.post(`http://localhost:8080/steps/add`, {stepData}) 
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log("axios error: ", error);
      return data;
    });
};

export async function deleteStepById(id) {

  try {
    const res = await axios.post(`http://localhost:8080/steps/delete`, {id});
    return res.data;
  } catch (error) {
    console.log("axios error: ", error);
    throw error;
  }
  // return axios.post(`http://localhost:8080/steps/delete`, {id}) 
  //   .then((data) => {
  //     return data;
  //   })
  //   .catch((error) => {
  //     console.log("axios error: ", error);
  //     return data;
  //   });
};

export async function editExistingSteps(updatedSteps) {

  try {
    const res = await axios.post(`http://localhost:8080/steps/edit`, {updatedSteps});
    console.log('Response status: ', res.status);
    return res.data;
  } catch (err) {
    console.error("axios error: ", err);
    throw err;
  }
};