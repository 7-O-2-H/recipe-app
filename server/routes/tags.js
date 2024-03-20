const router = require('express').Router();
const { getAllTags, getTagsByRecipeId, getRecipesByTagId } = require('../db/queries/tags');

router.get('/', (req, res) => {
  getAllTags()
  .then(data => {
    res.json(data);
  })
});

router.get('/4', (req, res) => {
  getTagsByRecipeId(4)
  .then(data => {
    res.json(data);
  })
});

router.get('/2', (req, res) => {
  getRecipesByTagId(1)
  .then(data => {
    res.json(data);
  })
});

module.exports = router;