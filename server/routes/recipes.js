const router = require('express').Router();
const { getAllRecipes, getRecipesByUserId, getRecipeById, addRecipe, editRecipeDetails, deleteRecipeById, getStepsByRecipeId, getIngredientsByRecipeId, getRecipesBySortingData } = require('../db/queries/recipes');

// recipes
router.get('/', (req, res) => {
  getAllRecipes()
  .then(data => {
    res.json(data);
  })
});

// sorting
router.get('/sorting', (req, res) => {
  const { ingredient, tag, maxTime, searchQuery } = req.query;
  console.log(ingredient, tag, maxTime, searchQuery);

  // backend check for valid values
  const ingredientParam = ingredient ? ingredient : "";
  const tagParam = tag ? tag : "";
  const maxTimeParam = maxTime ? parseInt(maxTime) : 0;
  const queryParam = searchQuery ? searchQuery : "";

  getRecipesBySortingData(ingredientParam , tagParam, maxTimeParam, queryParam)
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

// POST
router.post('/add', (req, res) => {

  // req recipe data
  const recipeData = req.body.recipeData;

  addRecipe(recipeData)
  .then(data => {
    res.json(data);
  })
});

router.post('/edit', (req, res) => {

  const recipeData = req.body.recipeData;

  editRecipeDetails(recipeData)
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
  const id = req.params.id;
  getStepsByRecipeId(id)
  .then(data => {
    res.json(data);
  })
});

module.exports = router;