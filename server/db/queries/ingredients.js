const { pool } = require('../../configs/db.config');
const db = require('../../configs/db.config');

// ingredients
const getAllIngredients = () => {
  return db.query("SELECT * FROM ingredients ORDER BY ingredients.ingredient;").then(data => {
    return data.rows;
  })
  .catch((error) => {
    console.log('get all ingredients error;', error.message);
    return null;
  });
};


const getIngredientByName = (ingredient) => {
  return db.query("SELECT ingredient FROM ingredients WHERE ingredients.ingredient = $1", [ingredient]).then(data => {
    return data.rows;
  })
  .catch((error) => {
    console.log('get ingredient by name error;', error.message);
    return null;
  });
};

const getIngredientsByRecipeId = (id) => {
  return db.query("SELECT ingredient FROM ingredients JOIN recipe_ingredients ON ingredients.id = recipe_ingredients.ingredient_id JOIN recipes ON recipe_ingredients.recipe_id = recipes.id WHERE recipes.id = $1", [id]).then(data => {
    // console.log('data:', data);  
    return data.rows;
  })
  .catch((error) => {
    console.log('get ingredients by rec error;', error.message);
    return null;
  });
};

const getRecipeIngredientsByRecipeId = async (id) => {
  try {
    const res = await db.query(`SELECT * FROM recipe_ingredients JOIN ingredients ON recipe_ingredients.ingredient_id = ingredients.id WHERE recipe_ingredients.recipe_id = $1;`, [id]);
    return res.rows;
  } catch {
    console.error('get rec ingredients by rec id error;', error.message);
    throw error;
  };
};

// POST
const addIngredient = async (ingredient) => {
  try {
    const result = await db.query(`INSERT INTO ingredients (ingredient) VALUES ($1) RETURNING id;`, [ingredient]);
    return result.rows[0].id;
  } catch {
    console.error('add ing error: ', error.message);
    throw error;
  }
};

const addRecipeIngredient = (ingredientData) => {

  values = [ingredientData.recipe_id, parseInt(ingredientData.ingredient_id), ingredientData.quantity, ingredientData.measurement_id];
  return db.query
    (`INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, measurement_id) VALUES ($1, $2, $3, $4) RETURNING id;`, values)
    .then((result) => {
      return result.rows[0].id;
    })
    .catch((error) => {
      console.log('add ingredient error: ', error.message);
      return error.message;
    });
};

// test
const getRecipeIngredients = () => {
  return db.query(`SELECT * FROM recipe_ingredients ORDER BY recipe_ingredients.recipe_id`)
  .then(data => {
    return data.rows;
  })
  .catch((error) => {
    console.log('get all ingredients error;', error.message);
    return null;
  });
};

// delete
const deleteIngredient = (ingredientData) => {

  const values = [ingredientData.recipe_id, ingredientData.ingredient_id];

  return db.query(`DELETE FROM recipe_ingredients WHERE recipe_id = $1 AND ingredient_id = $2;`, values)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log('delete ingredient error: ', err.message);
      return err.message;
    });
};

module.exports = { getAllIngredients, getIngredientByName, getIngredientsByRecipeId, getRecipeIngredientsByRecipeId, addRecipeIngredient, addIngredient, getRecipeIngredients, deleteIngredient };