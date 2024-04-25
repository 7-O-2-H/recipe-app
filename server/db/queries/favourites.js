const { pool } = require('../../configs/db.config');
const db = require('../../configs/db.config');

const getFavouritesByUserId = (id) => {
  return db
    .query(`SELECT recipes.id, recipe, description, users.user_name, serves, time FROM recipes JOIN favourites ON recipes.id = favourites.recipe_id JOIN users ON favourites.user_id = users.id JOIN measurements ON recipes.measurement_id = measurements.id WHERE users.id = $1`, [id])
    .then((result) => {
      console.log('result:', result);
      return result.rows;
    })
    .catch((err) => {
      console.log('add user error;', err.message);
      return null;
    });
};

const getAllFavourites = () => {
  return db
    .query(`SELECT * FROM favourites`)
    .then((result) => {
      console.log('result:', result);
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
    .query(`INSERT INTO favourites (user_id, recipe_id) VALUES ($1, $2)`)
    .then((result) => {
      console.log('result:', result);
      return result.rows;
    })
    .catch((err) => {
      console.log('add user error;', err.message);
      return null;
    });
};

module.exports = { getFavouritesByUserId, getAllFavourites, addFavourite };