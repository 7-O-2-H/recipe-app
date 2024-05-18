const router = require('express').Router();
const { addStep } = require('../db/queries/steps');

// POST
router.post('/add', (req, res) => {

  // req recipe data
  const stepData = req.body.stepData;

  addStep(stepData);
  // addRecipe(recipeData)
  // .then(data => {
  //   res.json(data);
  // })
});

module.exports = router;