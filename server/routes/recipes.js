const router = require('express').Router();

router.get('/', (req, res) => {
  const recipes = ['Shrimp Scampi with Orzo', 'Baked Salmon', 'Tomato Paste Chicken'];
  res.json(recipes);
});

module.exports = router;

