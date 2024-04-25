const router = require('express').Router();
const { getFavouritesByUserId, getAllFavourites, addFavourite } = require('../db/queries/favourites');

router.get('/:id', (req, res) => {
  const userId = req.params.id;
  getFavouritesByUserId(userId)
  .then(data => {
    res.json(data);
  })
});

router.get('/', (req, res) => {
  getAllFavourites()
  .then(data => {
    res.json(data);
  })
});

router.post('/add', (req, res) => {

  // req userId and recipeId
  const userId = req.params.userId;
  const recipeId = req.params.recipeId;

  addFavourite(userId, recipeId)
  .then(data => {
    res.json(data);
  })
});

module.exports = router;