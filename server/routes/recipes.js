const router = require('express').Router();
const { getAllRecipes, getRecipesByUserId, getRecipeById, getFullRecipeById, getStepsByRecipeId, getIngredientsByRecipeId } = require('../db/queries/recipes');

// recipes
router.get('/', (req, res) => {
  getAllRecipes()
  .then(data => {
    res.json(data);
  })
});


router.get('/:id', (req, res) => {
  const id = req.params.id;
  getRecipeById(id)
  .then(data => {
    res.json(data);
  })
});

// ingredients by recipe
router.get('/:id/ingredients', (req, res) => {
  const id = req.params.id;
  getIngredientsByRecipeId(id)
  .then(data => {
    console.log(data);
    res.json(data);
  })
});

// steps
router.get('/:id/steps', (req, res) => {
  getStepsByRecipeId(4)
  .then(data => {
    res.json(data);
  })
});


module.exports = router;