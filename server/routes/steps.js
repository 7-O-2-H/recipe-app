const router = require('express').Router();

// POST
router.post('/add', (req, res) => {

  // req recipe data
  const stepData = req.body.stepData;

  console.log(stepData);

  // addRecipe(recipeData)
  // .then(data => {
  //   res.json(data);
  // })
});