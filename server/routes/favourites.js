const router = require('express').Router();
const { getFavouritesByUserId, getAllFavourites } = require('../db/queries/favourites');

router.get('/:id', (req, res) => {
  const userId = req.params.id;
  getFavouritesByUserId(userId)
  .then(data => {
    console.log(data);
    res.json(data);
  })
});

router.get('/', (req, res) => {
  getAllFavourites()
  .then(data => {
    console.log(data);
    res.json(data);
  })
});

module.exports = router;