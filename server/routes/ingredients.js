const router = require('express').Router();
const { getAllIngredients, getIngredientByName, getRecipeIngredients, getRecipeIngredientsByRecipeId, addRecipeIngredient, addIngredient} = require('../db/queries/ingredients');

// ingredients
router.get('/', (req, res) => {
  getAllIngredients()
  .then(data => {
    res.json(data);
  })
});

// router.get('/Celery', (req, res) => {
//   getIngredientByName('Celery')
//   .then(data => {
//     res.json(data);
//   })
// });

router.get('/recipe_ingredients/:recipe_id', async (req, res) => {

  const id = req.params.recipe_id;

  try {
    const data = getRecipeIngredientsByRecipeId(id);
    res.json(data);
  } catch (error) {
    console.error('rec ing by rec id: ', error);
  }
});

// add
router.post('/add', async (req, res) => {

  const ingredientData = req.body.ingredientData;
  
  try {
    if (ingredientData.existingIngredient) {
      const data = addRecipeIngredient(ingredientData);
      res.json(data)
    } else {
      const ingredientId = await addIngredient(ingredientData.ingredient);
      ingredientData.ingredient_id = ingredientId;
      const data = addRecipeIngredient(ingredientData);
      res.json(data);
    }
  } catch (error) {
    console.error('Add ingredient error: ', error.message);
    res.status(500).json({ error: 'Internal Server Error'});
  }
});

// test
router.get('/recipeIngredients', (req, res) => {
  getRecipeIngredients()
  .then(data => {
    res.json(data);
  })
});

module.exports = router;