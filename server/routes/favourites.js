const router = require('express').Router();
const { getFavouritesByUserId } = require('../db/queries/favourites');

router.get('/5', (req, res) => {
  getFavouritesByUserId(5)
  .then(data => {
    res.json(data);
  })
});

module.exports = router;