const { pool } = require('../../configs/db.config.js');

const getAllRecipes = () => {
  return pool
    .query(`SELECT * FROM recipes;`)
    .then((result) => {
      //console.log('result:', result);
      return result.rows;
    })
    .catch((err) => {
      console.log('add user error;', err.message);
      return null;
    });
};