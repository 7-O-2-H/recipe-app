const { pool } = require('../../configs/db.config');
const db = require('../../configs/db.config');

// ingredients
const getAllIngredients = () => {
  return db.query("SELECT ingredient FROM ingredients;").then(data => {
    return data.rows;
  })
  .catch((err) => {
    console.log('add user error;', err.message);
    return null;
  });
};

const getIngredientByName = (ingredient) => {
  return db.query("SELECT ingredient FROM ingredients WHERE ingredients.ingredient = $1", [ingredient]).then(data => {
    return data.rows;
  })
  .catch((err) => {
    console.log('add user error;', err.message);
    return null;
  });
};

const getIngredientsByRecipeId = (id) => {
  return db.query("SELECT DISTINCT ingredient, quantity, measurement FROM recipes JOIN steps ON recipes.id = steps.recipe_id JOIN ingredients ON recipes.id = ingredients.recipe_id JOIN measurements ON ingredients.measurement_id = measurements.id WHERE ingredients.recipe_id = $1", [id]).then(data => {
    return data.rows;
  })
  .catch((err) => {
    console.log('add user error;', err.message);
    return null;
  });
};

module.exports = { getAllIngredients, getIngredientByName, getIngredientsByRecipeId };