const router = require('express').Router();
const { getAllIngredients, getIngredientByName, getRecipeIngredients, addRecipeIngredient, addIngredient} = require('../db/queries/ingredients');

// ingredients
router.get('/', (req, res) => {
  getAllIngredients()
  .then(data => {
    res.json(data);
  })
});

router.get('/Celery', (req, res) => {
  getIngredientByName('Celery')
  .then(data => {
    res.json(data);
  })
});

// add
router.post('/add', (req, res) => {

  const ingredientData = req.body.ingredientData;
  console.log(ingredientData);
  console.log(ingredientData, "type of measurement id: ", typeof ingredientData.measurement_id);
  if (ingredientData.existingIngredient) {
    addRecipeIngredient(ingredientData)
    .then(data => {
      res.json(data);
    });
  } else {
    const ingredientId =  await addIngredient(ingredientData.ingredient);
    ingredientData.ingredient_id = ingredientId;
    addRecipeIngredient(ingredientData)
    .then(data => {
      res.json(data);
    });
  };
});

// test
router.get('/recipeIngredients', (req, res) => {
  getRecipeIngredients()
  .then(data => {
    res.json(data);
  })
});

module.exports = router;