const router = require('express').Router();
const { getAllIngredients, getIngredientByName, getIngredientsByRecipeId, addRecipeIngredient, addIngredient} = require('../db/queries/ingredients');

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
  // console.log(ingredientData, "type of existing: ", typeof ingredientData.existingIngredient);
  if (ingredientData.existingIngredient) {
    addRecipeIngredient(ingredientData)
    .then(data => {
      res.json(data);
    });
  }
  // addIngredient(ingredientData)
  // .then(data => {
  //   res.json(data);
  // });
});

module.exports = router;