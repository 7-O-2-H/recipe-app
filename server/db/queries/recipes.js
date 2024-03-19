const { pool } = require('../../configs/db.config');
const db = require('../../configs/db.config');

const getAllRecipes = () => {
  return db
    .query(`SELECT * FROM recipes;`)
    .then((result) => {
      console.log('result:', result);
      return result.rows;
    })
    .catch((err) => {
      console.log('add user error;', err.message);
      return null;
    });
};

const getRecipeById = (id) => {
  return db.query("SELECT recipe, description, step_name, instructions FROM recipes JOIN steps ON recipes.id = steps.recipe_id WHERE recipes.id = $1", [id]).then(data => {
    return data.rows;
  })
  .catch((err) => {
    console.log('add user error;', err.message);
    return null;
  });
};

const getStepsByRecipeId = (id) => {
  return db.query("SELECT * FROM steps JOIN recipes ON steps.recipe_id = recipes.id WHERE recipes.id = $1", [id]).then(data => {
    return data.rows;
  })
  .catch((err) => {
    console.log('add user error;', err.message);
    return null;
  });
};

module.exports = { getAllRecipes, getRecipeById, getStepsByRecipeId };