const { pool } = require('../../configs/db.config');
const db = require('../../configs/db.config');

const getAllUsers = () => {
  return db
    .query(`SELECT * FROM users;`)
    .then((result) => {
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
      return result.rows;
    })
    .catch((err) => {
      console.log('add user error;', err.message);
      return null;
    });
};

const getUserByEmail = (email) => {
  return db
    .query(`SELECT * FROM users WHERE email = $1`, [email])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      return null;
    });
};

const getUserByUserName = (user_name) => {
  return db
    .query(`SELECT * FROM users WHERE user_name = $1`, [user_name])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      return null;
    });
};

const getUserByRecipeId = (id) => {
  return db
    .query(`SELECT * FROM users JOIN recipes ON users.id = recipes.user_id WHERE recipes.id = $1`, [id])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log('add user error;', err.message);
      return null;
    });
};

const addUser = (userData) => {
  const values = [userData.user_name, userData.email, userData.password];
  return db.query(`INSERT INTO users (user_name, email, password) VALUES ($1, $2, $3) RETURNING *;`, values)
    .then((res) => {
      const data = res.rows;
      return {data, status: 200};
    })
    .catch((err) => {
      return ("error: ", err);
    });
};

module.exports = { getAllUsers, getUserById, getUserByRecipeId, getUserByEmail, getUserByUserName, addUser };