const { pool } = require('../../configs/db.config');
const db = require('../../configs/db.config');

const getAllUsers = () => {
  return db
    .query(`SELECT * FROM users;`)
    .then((result) => {
      console.log('result:', result);
      return result.rows;
    })
    .catch((err) => {
      console.log('add user error;', err.message);
      return null;
    });
};

const getPasswordByEmail = (email) => {
  return db
    .query(`SELECT password FROM users WHERE users.email = $1`, [email])
    .then((result) => {
      console.log('result:', result);
      return result.rows;
    })
    .catch((err) => {
      console.log('add user error;', err.message);
      return null;
    });
};

const getUserById = (id) => {
  return db
    .query(`SELECT * FROM users WHERE users.id = $1`, [id])
    .then((result) => {
      console.log('result:', result);
      return result.rows;
    })
    .catch((err) => {
      console.log('add user error;', err.message);
      return null;
    });
};

const getUserByRecipeId = (id) => {
  return db
    .query(`SELECT * FROM users JOIN recipes ON users.id = recipes.user_id WHERE recipes.id = $1`, [id])
    .then((result) => {
      console.log('result:', result);
      return result.rows;
    })
    .catch((err) => {
      console.log('add user error;', err.message);
      return null;
    });
};

module.exports = { getAllUsers, getUserById, getUserByRecipeId };