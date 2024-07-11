const router = require('express').Router();
const { getAllIngredients, getIngredientByName, getRecipeIngredients, getRecipeIngredientsByRecipeId, addRecipeIngredient, addIngredient, deleteIngredient, editIngredient} = require('../db/queries/ingredients');

// ingredients
router.get('/', (req, res) => {
  getAllIngredients()
  .then(data => {
    res.json(data);
  })
});

router.get('/recipe_ingredients/:recipe_id', async (req, res) => {

  const id = req.params.recipe_id;

  try {
    const data = await getRecipeIngredientsByRecipeId(id);
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

// delete
router.post('/delete', async (req, res) => {

  // retreive ingredientData
  const ingredientData = req.body.ingredientData;

  try {
    await deleteIngredient(ingredientData);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete ingredient" });
  }
});

// edit
router.post('/edit', async (req, res) => {

  // retreive updated data
  const ingredientData = req.body.ingredientData;

  // check if ingredient exists in db
  try {
    if (ingredientData.existingIngredient) {
      const result = await editIngredient(ingredientData);
      console.log(result);
      res.status(204).send();
    } else {
      const ingredientId = await addIngredient(ingredientData.ingredient);
      ingredientData.ingredient_id = ingredientId;
      const result = editIngredient(ingredientData);
      console.log(result);
    };
  } catch (error) {
      res.status(500).json( { error: "Failed to edit ingredient"});
  };
});

module.exports = router;