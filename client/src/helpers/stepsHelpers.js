export function addStep(stepData) {
  return axios.post(`http://localhost:8080/steps/add`, {stepData}) 
    .then((data) => {
      return data
    })
    .catch((error) => {
      console.log("axios error: ", error);
      return data;
    });
};