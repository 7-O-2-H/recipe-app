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
};

export async function editExistingStep(updatedStep) {

  try {
    const res = await axios.post(`http://localhost:8080/steps/edit`, {updatedStep});
    console.log('Response status: ', res.status, res.data);
    return res.status;
  } catch (err) {
    console.error("axios error: ", err);
    throw err;
  }
};

export function stepCalculator(steps) {

  // get step number 
  const newStepNumber = steps.length + 1;

  // extract last step step name from array
  const lastStep = steps[steps.length - 1].step_name;

  // reduce lastStep int from name and add 1 for next step
  const nextStep = parseInt(lastStep.split(" ").pop()) + 1;

  // convert back to title string
  const nextStepString = `Step ${nextStep}`;

  return [newStepNumber, nextStepString];

};