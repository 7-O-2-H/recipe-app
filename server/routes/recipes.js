const router = require('express').Router();
const { getAllRecipes, getRecipesByUserId, getRecipeById, deleteRecipeById, getStepsByRecipeId, getIngredientsByRecipeId } = require('../db/queries/recipes');

// recipes
router.get('/', (req, res) => {
  getAllRecipes()
  .then(data => {
    res.json(data);
  })
});

router.get('/users/:id', (req, res) => {
  const id = req.params.id;
  getRecipesByUserId(id)
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

router.post('/delete', (req, res) => {

  // req recipe id
  const recipeId = req.body.id;

  deleteRecipeById(recipeId)
    .then(data => {
      res.status(204).send();
    })
    .catch(err => {
      res.status(500).json({err: "failed to delete recipe"})
    });
});

// ingredients by recipe
router.get('/:id/ingredients', (req, res) => {
  const id = req.params.id;
  getIngredientsByRecipeId(id)
  .then(data => {
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