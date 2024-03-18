// DB connections
const { Pool } = require('pg');

const {DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT} = process.env;

// const pool = new Pool({
//   user: DB_HOST,
//   host: DB_USER,
//   password: DB_PASSWORD,
//   port: DB_PORT,
//   database: DB_DATABASE,
// })
const pool = new Pool({
  user: 'labber',
  host: 'localhost',
  password: 'labber',
  port: 5432,
  database: 'recipe_app',
})

pool.connect().then(() => {
  console.log("DB connection est.")
}).catch(e => {
  throw new Error(e);
})

module.exports = pool;