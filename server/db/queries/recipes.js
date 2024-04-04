const { pool } = require('../../configs/db.config');
const db = require('../../configs/db.config');

// recipes
const getAllRecipes = () => {
  return db
    .query(`SELECT recipes.id, user_name, recipe, time, serves, description, measurement FROM users JOIN recipes ON users.id = recipes.user_id JOIN measurements ON recipes.measurement_id = measurements.id;`)
    .then((result) => {
      console.log('result:', result);
      return result.rows;
    })
    .catch((err) => {
      console.log('add user error;', err.message);
      return null;
    });
};

const getRecipesByUserId = (id) => {
  return db.query("SELECT * FROM recipes JOIN users ON recipes.user_id = users.id WHERE users.id = $1", [id]).then(data => {
    return data.rows;
  })
  .catch((err) => {
    console.log('add user error;', err.message);
    return null;
  });
};

const getRecipeById = (id) => {
  return db.query("SELECT * FROM recipes WHERE recipes.id = $1", [id]).then(data => {
    return data.rows;
  })
  .catch((err) => {
    console.log('add user error;', err.message);
    return null;
  });
};

const getFullRecipeById = (id) => {
  return db.query("SELECT recipe, description, ingredient, quantity, measurement, step_name, instructions FROM recipes JOIN steps ON recipes.id = steps.recipe_id JOIN ingredients ON recipes.id = ingredients.recipe_id JOIN measurements ON ingredients.measurement_id = measurements.id WHERE recipes.id = $1", [id]).then(data => {
    return data.rows;
  })
  .catch((err) => {
    console.log('add user error;', err.message);
    return null;
  });
};
// ingredients by recipe
const getIngredientsByRecipeId = (id) => {
  return db.query("SELECT DISTINCT ingredient, quantity, measurement FROM recipes JOIN steps ON recipes.id = steps.recipe_id JOIN ingredients ON recipes.id = ingredients.recipe_id JOIN measurements ON ingredients.measurement_id = measurements.id WHERE ingredients.recipe_id = $1", [id]).then(data => {
    return data.rows;
  })
  .catch((err) => {
    console.log('add user error;', err.message);
    return null;
  });
};

// steps
const getStepsByRecipeId = (id) => {
  return db.query("SELECT * FROM steps JOIN recipes ON steps.recipe_id = recipes.id WHERE recipes.id = $1", [id]).then(data => {
    return data.rows;
  })
  .catch((err) => {
    console.log('add user error;', err.message);
    return null;
  });
};

module.exports = { getAllRecipes, getRecipesByUserId, getRecipeById, getFullRecipeById, getIngredientsByRecipeId, getStepsByRecipeId };