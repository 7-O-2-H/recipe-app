const router = require('express').Router();
const { getAllRecipes, getRecipesByUserId, getRecipeById, getStepsByRecipeId, getIngredientsByRecipeId } = require('../db/queries/recipes');

// recipes
router.get('/', (req, res) => {
  getAllRecipes()
  .then(data => {
    res.json(data);
  })
});


router.get(`/5`, (req, res) => {
  getRecipeById(5)
  .then(data => {
    res.json(data);
  })
});

// ingredients by recipe
router.get('/4/ingredients', (req, res) => {
  getIngredientsByRecipeId(4)
  .then(data => {
    console.log(data);
    res.json(data);
  })
});

// steps
router.get('/4/steps', (req, res) => {
  getStepsByRecipeId(4)
  .then(data => {
    res.json(data);
  })
});


module.exports = router;