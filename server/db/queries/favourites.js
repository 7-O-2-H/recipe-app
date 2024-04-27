const { pool } = require('../../configs/db.config');
const db = require('../../configs/db.config');

const getFavouritesByUserId = (id) => {
  return db
    .query(`
    SELECT 
        recipes.id, 
        recipes.recipe, 
        description, 
        users.user_name, 
        serves, 
        time, 
        recipes.user_id 
    FROM 
        recipes 
    JOIN 
        favourites ON recipes.id = favourites.recipe_id 
    JOIN 
        users ON recipes.user_id = users.id 
    JOIN 
        measurements ON recipes.measurement_id = measurements.id 
    WHERE 
       favourites.user_id = $1;
    `, [id])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log('add user error;', err.message);
      return null;
    });
  };
  
// SELECT recipes.id, recipes.recipe, description, users.user_name, serves, time, recipes.user_id FROM recipes JOIN favourites ON recipes.id = favourites.recipe_id JOIN users ON recipes.user_id = users.id JOIN measurements ON recipes.measurement_id = measurements.id WHERE users.id = $1`, [id])
const getAllFavourites = () => {
  return db
    .query(`SELECT favourites.id, favourites.user_id, recipe_id, users.user_name FROM favourites JOIN recipes ON favourites.recipe_id = recipes.id JOIN users ON recipes.user_id = users.id`)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log('add user error;', err.message);
      return null;
    });
};

const addFavourite = (userId, recipeId) => {

  const values = [userId, recipeId];

  return db
    .query(`INSERT INTO favourites (user_id, recipe_id) VALUES ($1, $2) RETURNING *`, values)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log('add user error;', err.message);
      return null;
    });
};

module.exports = { getFavouritesByUserId, getAllFavourites, addFavourite };