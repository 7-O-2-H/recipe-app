const router = require('express').Router();
const { getAllIngredients, getIngredientByName, getIngredientsByRecipeId } = require('../db/queries/ingredients');

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

router.get('/4', (req, res) => {
  getIngredientsByRecipeId(4)
  .then(data => {
    res.json(data);
  })
});

module.exports = router;