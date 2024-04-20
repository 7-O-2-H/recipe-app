const { pool } = require('../../configs/db.config');
const db = require('../../configs/db.config');

// ingredients
const getAllIngredients = () => {
  return db.query("SELECT * FROM ingredients ORDER BY ingredients.ingredient;").then(data => {
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
  return db.query("SELECT ingredient FROM ingredients JOIN recipe_ingredients ON ingredients.id = recipe_ingredients.ingredient_id JOIN recipes ON recipe_ingredients.recipe_id = recipes.id WHERE recipes.id = $1", [id]).then(data => {
    // console.log('data:', data);  
    return data.rows;
  })
  .catch((err) => {
    console.log('add user error;', err.message);
    return null;
  });
};

module.exports = { getAllIngredients, getIngredientByName, getIngredientsByRecipeId };