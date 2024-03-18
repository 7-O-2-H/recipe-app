const { pool } = require('../../configs/db.config');
const db = require('../../configs/db.config');

const getAllRecipes = () => {
  return db
    .query(`SELECT * FROM recipes;`)
    .then((result) => {
      console.log('result:', result);
      return result.rows;
    })
    .catch((err) => {
      console.log('add user error;', err.message);
      return null;
    });
};

module.exports = { getAllRecipes };