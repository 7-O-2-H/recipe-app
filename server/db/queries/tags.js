const { pool } = require('../../configs/db.config');
const db = require('../../configs/db.config');

const getAllTags = () => {
  return db
    .query(`SELECT * FROM tags;`)
    .then((result) => {
      console.log('result:', result);
      return result.rows;
    })
    .catch((err) => {
      console.log('add user error;', err.message);
      return null;
    });
};

module.exports = { getAllTags };