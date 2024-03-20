const { pool } = require('../../configs/db.config');
const db = require('../../configs/db.config');

const getFavouritesByUserId = (id) => {
  return db
    .query(`SELECT recipe FROM recipes JOIN favourites ON recipes.id = favourites.recipe_id JOIN users ON favourites.user_id = users.id WHERE users.id = $1`, [id])
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