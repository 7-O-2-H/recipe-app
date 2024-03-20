const router = require('express').Router();
const { getAllRecipes, getFullRecipeById, getRecipeById, getStepsByRecipeId, getIngredientsByRecipeId } = require('../db/queries/recipes');

router.get('/', (req, res) => {
  getAllRecipes()
  .then(data => {
    res.json(data);
  })
});

router.get('/4', (req, res) => {
  getRecipeById(4)
  .then(data => {
    res.json(data);
  })
});

router.get('/4/steps', (req, res) => {
  getStepsByRecipeId(4)
  .then(data => {
    res.json(data);
  })
});

router.get('/4/ingredients', (req, res) => {
  getIngredientsByRecipeId(4)
  .then(data => {
    console.log(data);
    res.json(data);
  })
});

module.exports = router;