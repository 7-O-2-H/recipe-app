const { pool } = require('../../configs/db.config');
const db = require('../../configs/db.config');

// ingredients
const getAllIngredients = () => {
  return db.query("SELECT * FROM ingredients ORDER BY ingredients.ingredient;").then(data => {
    return data.rows;
  })
  .catch((err) => {
    console.log('get all ingredients error;', err.message);
    return null;
  });
};


const getIngredientByName = (ingredient) => {
  return db.query("SELECT ingredient FROM ingredients WHERE ingredients.ingredient = $1", [ingredient]).then(data => {
    return data.rows;
  })
  .catch((err) => {
    console.log('get ingredient by name error;', err.message);
    return null;
  });
};

const getIngredientsByRecipeId = (id) => {
  return db.query("SELECT ingredient FROM ingredients JOIN recipe_ingredients ON ingredients.id = recipe_ingredients.ingredient_id JOIN recipes ON recipe_ingredients.recipe_id = recipes.id WHERE recipes.id = $1", [id]).then(data => {
    // console.log('data:', data);  
    return data.rows;
  })
  .catch((err) => {
    console.log('get ingredients by rec error;', err.message);
    return null;
  });
};

// POST
const addRecipeIngredient = (ingredientData) => {

  values = [ingredientData.recipe_id, parseInt(ingredientData.ingredient_id), ingredientData.quantity, ingredientData.measurement_id];
  return db.query
    (`INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, measurement_id) VALUES ($1, $2, $3, $4) RETURNING id;`, values)
    .then((result) => {
      return result.rows[0].id;
    })
    .catch((err) => {
      console.log('add ingredient error: ', err.message);
      return err.message;
    });
};

const addIngredient = async (ingredient) => {

  try {
    const result = db.query(`INSERT INTO ingredients (ingredient) VALUES ($1) RETURNING id;`, [ingredient]);
    return result.rows[0].id;
  } catch {
    console.error('add ing error: ', error.message);
    throw error;
  }

  // return db.query
  //   (`INSERT INTO ingredients (ingredient) VALUES ($1) RETURNING id;`, 
  //   [ingredient]
  // )
  // .then((result) => {
  //   return result.rows[0].id;
  // })
  // .catch((err) => {
  //   console.log('add ingredient error: ', err.message);
  //   return err.message;
  // });
};

// test
const getRecipeIngredients = () => {
  return db.query(`SELECT * FROM recipe_ingredients ORDER BY recipe_ingredients.recipe_id`)
  .then(data => {
    return data.rows;
  })
  .catch((err) => {
    console.log('get all ingredients error;', err.message);
    return null;
  });
};

module.exports = { getAllIngredients, getIngredientByName, getIngredientsByRecipeId, addRecipeIngredient, addIngredient, getRecipeIngredients };