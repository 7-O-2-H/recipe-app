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
router.post('/add', async (req, res) => {

  const ingredientData = req.body.ingredientData;
  // console.log(ingredientData);
  // console.log(ingredientData, "type of measurement id: ", typeof ingredientData.measurement_id);

  try {
    if (ingredientData.existingIngredient) {
      const data = addRecipeIngredient(ingredientData);
      res.json(data)
    } else {
      const ingredientId =  await addIngredient(ingredientData.ingredient);
      ingredientData.ingredient_id = ingredientId;
      const data = addRecipeIngredient(ingredientData);
      res.json(data);
    }
  } catch (error) {
    console.error('Add ingredient error: ', error.message);
    res.status(500).json({ error: 'Internal Server Error'});
  }
  // if (ingredientData.existingIngredient) {
  //   addRecipeIngredient(ingredientData)
  //   .then(data => {
  //     res.json(data);
  //   });
  // } else {
  //   const ingredientId =  await addIngredient(ingredientData.ingredient);
  //   ingredientData.ingredient_id = ingredientId;
  //   addRecipeIngredient(ingredientData)
  //   .then(data => {
  //     res.json(data);
  //   });
  // };
});

// test
router.get('/recipeIngredients', (req, res) => {
  getRecipeIngredients()
  .then(data => {
    res.json(data);
  })
});

module.exports = router;