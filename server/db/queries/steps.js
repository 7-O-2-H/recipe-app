const db = require('../../configs/db.config');

const addStep = (stepData) => {

  values = [stepData.recipe_id, stepData.step_number, stepData.step_name, stepData.instruction];

  return db.query(`INSERT INTO steps (recipe_id, step_number, step_name, instruction) VALUES ($1, $2, $3, $4) RETURNING *;`, values)
    .then((result) => {
      return result.rows;
    })
    .catch((error) => {
      console.log('add step error: ', error.message);
      return result.status;
    })
};

const deleteStep = (id) => {
  return db.query(`DELETE FROM steps WHERE steps.id = $1;`, [id])
    .then((result) => {
      return result.status;
    })
    .catch((error) => {
      console.log('delete Step error: ', error.message);
      return error.message;
    });
};

const editStep = (stepData) => {

  const values = [stepData.id, stepData.step_number, stepData.step_name, stepData.instruction];

  // return db.query(`
  //   UPDATE steps
  //   SET `)
}

module.exports = { addStep, deleteStep };