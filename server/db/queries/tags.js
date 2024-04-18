const { pool } = require('../../configs/db.config');
const db = require('../../configs/db.config');

const getAllTags = () => {
  return db
    .query(`SELECT * FROM tags ORDER BY tags.tag;`)
    .then((result) => {
      console.log('result:', result);
      return result.rows;
    })
    .catch((err) => {
      console.log('add user error;', err.message);
      return null;
    });
};

const getTagsByRecipeId = (id) => {
  return db
    .query(`SELECT tag FROM tags JOIN recipe_tags ON tags.id = recipe_tags.tag_id JOIN recipes ON recipe_tags.recipe_id = recipes.id WHERE recipes.id = $1;`, [id])
    .then((result) => {
      console.log('result:', result);
      return result.rows;
    })
    .catch((err) => {
      console.log('add user error;', err.message);
      return null;
    });
};

const getRecipesByTagId = (id) => {
  return db
    .query(`SELECT * FROM recipes JOIN recipe_tags ON recipes.id = recipe_tags.recipe_id JOIN tags ON recipe_tags.tag_id = tags.id WHERE tags.id = $1;`, [id])
    .then((result) => {
      console.log('result:', result);
      return result.rows;
    })
    .catch((err) => {
      console.log('add user error;', err.message);
      return null;
    });
};

module.exports = { getAllTags, getTagsByRecipeId, getRecipesByTagId };