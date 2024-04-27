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
      console.log('get user favourites error;', err.message);
      return null;
  });
};
  
const getAllFavourites = () => {
  return db
    .query(`SELECT * FROM favourites;`)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log('get favourites error;', err.message);
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
      console.log('add favourite error;', err.message);
      return null;
    });
};

const deleteFavourite = (id) => {
  return db
    .query(`DELETE FROM favourites WHERE id = $1;`, [id])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log('delete favourite eroor;', err.message);
      return null;
    });
}
module.exports = { getFavouritesByUserId, getAllFavourites, addFavourite, deleteFavourite };