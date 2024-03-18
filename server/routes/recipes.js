const router = require('express').Router();
const { getAllRecipes } = require('../db/queries/recipes');

router.get('/', (req, res) => {
  getAllRecipes()
  .then(data => {
    res.json(data);
  })
  //const recipes = ['Shrimp Scampi with Orzo', 'Baked Salmon', 'Tomato Paste Chicken'];
  //res.json(recipes);
});

module.exports = router;