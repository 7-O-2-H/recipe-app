const { pool } = require('../../configs/db.config');
const db = require('../../configs/db.config');

// recipes
// GET
const getAllRecipes = () => {
  return db
    .query(`SELECT recipes.id, user_name, recipe, time, serves, description, measurement FROM users JOIN recipes ON users.id = recipes.user_id JOIN measurements ON recipes.measurement_id = measurements.id;`)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log('get recipes error;', err.message);
      return null;
    });
};

const getRecipesByUserId = (id) => {
  return db.query(`SELECT recipes.id, user_id, recipe, time, measurement, serves, description, user_name FROM recipes JOIN users ON recipes.user_id = users.id JOIN measurements ON recipes.measurement_id = measurements.id WHERE users.id = $1`, [id]).then(data => {
    return data.rows;
  })
  .catch((err) => {
    console.log('get rec by user error;', err.message);
    return null;
  });
};

const getRecipeById = (id) => {
  return db.query(`SELECT recipes.id, description, recipe, serves, time, users.user_name, recipes.user_id, measurement FROM recipes JOIN users ON recipes.user_id = users.id JOIN measurements ON recipes.measurement_id = measurements.id WHERE recipes.id = $1`, [id]).then(data => {
    return data.rows;
  })
  .catch((err) => {
    console.log('get rec by id error;', err.message);
    return null;
  });
};

const getFullRecipeById = (id) => {
  return db.query("SELECT DISTINCT recipe, description, ingredient, quantity, measurement, step_name, instruction FROM recipes JOIN steps ON recipes.id = steps.recipe_id JOIN recipe_ingredients ON recipes.id = recipe_ingredients.recipe_id JOIN ingredients ON recipe_ingredients.ingredient_id = ingredients.id JOIN measurements ON recipe_ingredients.measurement_id = measurements.id WHERE recipes.id = $1", [id]).then(data => {
    return data.rows;
  })
  .catch((err) => {
    console.log('Full recipe error;', err.message);
    return null;
  });
};

// POST/PUT
const addRecipe = (recipeData) => {

  values = [recipeData.user_id, recipeData.recipe, recipeData.time, 1, recipeData.serves, recipeData.description];
  
  return db.query(`INSERT INTO recipes (user_id, recipe, time, measurement_id, serves, description) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`, values)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log('delete recipe error: ', err.message);
      return err.message;
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
    console.log('ingredients error;', err.message);
    return null;
  });
};

// steps
const getStepsByRecipeId = (id) => {
  return db.query("SELECT * FROM steps JOIN recipes ON steps.recipe_id = recipes.id WHERE recipes.id = $1", [id]).then(data => {
    return data.rows;
  })
  .catch((err) => {
    console.log('get steps error;', err.message);
    return null;
  });
};

// sorting
const getRecipesBySortingData = (ingredient, tag, maxTime) => {

  const values = [ingredient, tag, maxTime];

  return db.query
  (`SELECT DISTINCT
    recipes.id, 
    user_id, 
    recipe, 
    time, 
    measurement, 
    serves, 
    description, 
    user_name 
  FROM
    recipes
  JOIN
    measurements ON recipes.measurement_id = measurements.id
  JOIN 
    users on recipes.user_id = users.id 
  JOIN
    recipe_ingredients ON recipes.id = recipe_ingredients.recipe_id
  JOIN
    ingredients ON recipe_ingredients.ingredient_id = ingredients.id
  JOIN
    recipe_tags ON recipes.id = recipe_tags.recipe_id
  JOIN
    tags on recipe_tags.tag_id = tags.id
  WHERE 
    ($1 = '' OR ingredients.ingredient = $1)
    AND ($2 = '' OR tags.tag = $2 OR tags.tag IS NULL)
    AND (recipes.time < $3 OR $3 = 0);
  `, values)
  .then((result) => {
    return result.rows;
  })
  .catch((err) => {
    console.log("sorting error", err.message);
    return null;
  })
};

module.exports = { getAllRecipes, getRecipesByUserId, getRecipeById, getFullRecipeById, addRecipe, deleteRecipeById, getIngredientsByRecipeId, getStepsByRecipeId, getRecipesBySortingData };