const { pool } = require('../../configs/db.config');
const db = require('../../configs/db.config');

const getAllMeasurements = () => {
  return db
    .query(`SELECT * FROM measurements;`)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log('get measurements error;', err.message);
      return null;
    });
};

module.exports = { getAllMeasurements };