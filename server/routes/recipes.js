const router = require('express').Router();
const { getAllRecipes, getRecipeById, getStepsByRecipeId } = require('../db/queries/recipes');

router.get('/', (req, res) => {
  getAllRecipes()
  .then(data => {
    res.json(data);
  })
});

router.get('/4', (req, res) => {
  let recipe = {};
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

router.get('/4/steps', (req, res) => {
  getStepsByRecipeId(4)
  .then(data => {
    res.json(data);
  })
});




module.exports = router;