const router = require('express').Router();
const { getAllTags, getTagsByRecipeId, getRecipesByTagId } = require('../db/queries/tags');

router.get('/', (req, res) => {
  getAllTags()
  .then(data => {
    res.json(data);
  })
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  getTagsByRecipeId(id)
  .then(data => {
    res.json(data);
  })
});

router.get('/recipes/:id', (req, res) => {
  const id = req.params.id;
  getRecipesByTagId(id)
  .then(data => {
    res.json(data);
  })
});

module.exports = router;