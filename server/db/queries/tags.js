// const { pool } = require('../../configs/db.config');
const db = require('../../configs/db.config');

const getAllTags = () => {
  return db
    .query(`SELECT * FROM tags ORDER BY tags.tag;`)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log('get all tags error', err.message);
      return null;
    });
};

const getTagsByRecipeId = (id) => {
  return db
    .query(`SELECT tag FROM tags JOIN recipe_tags ON tags.id = recipe_tags.tag_id JOIN recipes ON recipe_tags.recipe_id = recipes.id WHERE recipes.id = $1;`, [id])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log('get tags by rec error;', err.message);
      return null;
    });
};

const getRecipesByTagId = (id) => {
  return db
    .query(`SELECT * FROM recipes JOIN recipe_tags ON recipes.id = recipe_tags.recipe_id JOIN tags ON recipe_tags.tag_id = tags.id WHERE tags.id = $1;`, [id])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log('get recs by tag error;', err.message);
      return null;
    });
};

const addTag = async (tag) => {

  const tagName = tag;

  try {
    const result = await db.query(`INSERT INTO tags (tag) VALUES ($1) RETURNING *;`, [tagName]);
    return result.rows[0].id;
  } catch {
    console.error('add tag error: ', error.message);
    throw error;
  };
};

const addRecipeTag = (tagData) => {

  console.log(tagData);

  const values = [tagData.recipe_id, tagData.tag_id];
  console.log(values);

  return db.query(`INSERT INTO recipe_tags (recipe_id, tag_id) VALUES ($1, $2) RETURNING *;`, values)
  .then((res) => {
    return res.rows;
  })
  .catch((error) => {
    console.error('add rec tag error: ', error.message);
    throw error;
  });
};

module.exports = { getAllTags, getTagsByRecipeId, getRecipesByTagId, addTag, addRecipeTag };