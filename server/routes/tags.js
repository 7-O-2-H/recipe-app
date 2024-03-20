const router = require('express').Router();
const { getAllTags, getTagsByRecipeId } = require('../db/queries/tags');

router.get('/', (req, res) => {
  getAllTags()
  .then(data => {
    res.json(data);
  })
});

router.get('/4', (req, res) => {
  getTagsByRecipeId(3)
  .then(data => {
    res.json(data);
  })
});

module.exports = router;