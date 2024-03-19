const router = require('express').Router();
const { getAllRecipes } = require('../db/queries/recipes');

router.get('/', (req, res) => {
  getAllRecipes()
  .then(data => {
    res.json(data);
  })
});

module.exports = router;