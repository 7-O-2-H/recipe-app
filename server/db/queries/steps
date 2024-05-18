const db = require('../../configs/db.config');

const addStep = (stepData) => {

  values = [stepData.recipe_id, stepData.step_number, stepData.step_name, stepData.instruction];
  // console.log(values);

  return db.query(`INSERT INTO steps (recipe_id, step_number, step_name, instruction) VALUES ($1, $2, $3, $4) RETURNING *;`, values)
    .then((result) => {
      return result.rows;
    })
    .catch((error) => {
      console.log('add step error: ', error.message);
      return result.status;
    })
};

module.exports = { addStep };