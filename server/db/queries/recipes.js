const { pool } = require('../../configs/db.config');
const db = require('../../configs/db.config');

// recipes
const getAllRecipes = () => {
  return db
    .query(`SELECT recipes.id, user_name, recipe, time, serves, description, measurement FROM users JOIN recipes ON users.id = recipes.user_id JOIN measurements ON recipes.measurement_id = measurements.id;`)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log('add user error;', err.message);
      return null;
    });
};

const getRecipesByUserId = (id) => {
  return db.query(`SELECT recipes.id, user_id, recipe, time, measurement, serves, description, user_name FROM recipes JOIN users ON recipes.user_id = users.id JOIN measurements ON recipes.measurement_id = measurements.id WHERE users.id = $1`, [id]).then(data => {
    return data.rows;
  })
  .catch((err) => {
    console.log('add user error;', err.message);
    return null;
  });
};

const getRecipeById = (id) => {
  return db.query(`SELECT recipes.id, description, recipe, serves, time, users.user_name, recipes.user_id, measurement FROM recipes JOIN users ON recipes.user_id = users.id JOIN measurements ON recipes.measurement_id = measurements.id WHERE recipes.id = $1`, [id]).then(data => {
    return data.rows;
  })
  .catch((err) => {
    console.log('add user error;', err.message);
    return null;
  });
};

const getFullRecipeById = (id) => {
  return db.query("SELECT DISTINCT recipe, description, ingredient, quantity, measurement, step_name, instruction FROM recipes JOIN steps ON recipes.id = steps.recipe_id JOIN recipe_ingredients ON recipes.id = recipe_ingredients.recipe_id JOIN ingredients ON recipe_ingredients.ingredient_id = ingredients.id JOIN measurements ON recipe_ingredients.measurement_id = measurements.id WHERE recipes.id = $1", [id]).then(data => {
    return data.rows;
  })
  .catch((err) => {
    console.log('add user error;', err.message);
    return null;
  });
};

const deleteRecipeById = (id) => {
  return db.query(`DELETE FROM recipes WHERE recipes.id = $1`, [id])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log('delete recipe error: ', err.message);
      return err.message;
    });
}; 

// ingredients by recipe
const getIngredientsByRecipeId = (id) => {
  return db.query("SELECT ingredient, quantity, measurement FROM recipes JOIN recipe_ingredients ON recipes.id = recipe_ingredients.recipe_id JOIN ingredients ON recipe_ingredients.ingredient_id = ingredients.id JOIN measurements ON recipe_ingredients.measurement_id = measurements.id WHERE recipes.id = $1", [id]).then(data => {
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

module.exports = { getAllRecipes, getRecipesByUserId, getRecipeById, getFullRecipeById, deleteRecipeById, getIngredientsByRecipeId, getStepsByRecipeId };