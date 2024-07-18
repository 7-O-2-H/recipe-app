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

  const values = [stepData.step_id, stepData.step_number, stepData.step_name, stepData.instruction];

  console.log(stepData);
  
  return db.query(`
    UPDATE steps
    SET step_number = $2,
        step_name = $3,
        instruction = $4
    WHERE id = $1
    RETURNING recipe_id;
  `, values)
    .then((result) => {
      return result.rows;
    })
    .catch((error) => {
      console.log('edit steps error: ', error.message);
    return error.message;
    });
};


module.exports = { addStep, deleteStep, editStep };