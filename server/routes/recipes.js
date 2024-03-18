const router = require('express').Router();
const { getAllUsers } = require('../db/queries/recipes');

router.get('/', (req, res) => {
  getAllUsers()
  .then(data => {
    res.json(recipes);
  })
  //const recipes = ['Shrimp Scampi with Orzo', 'Baked Salmon', 'Tomato Paste Chicken'];
  //res.json(recipes);
});

module.exports = router;