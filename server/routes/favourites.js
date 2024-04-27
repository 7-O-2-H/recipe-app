const router = require('express').Router();
const { getFavouritesByUserId, getAllFavourites, addFavourite, deleteFavourite } = require('../db/queries/favourites');

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
  const userId = req.body.userId;
  const recipeId = req.body.recipeId;

  addFavourite(userId, recipeId)
  .then(data => {
    res.json(data);
  })
});

router.post('/delete', (req, res) => {

  // req favouriteId
  const favouriteId = req.body.favouriteId;

  deleteFavourite(favouriteId)
  .then(data => {
    const outcome = {
      "message": "deletion successful",
      "deleted_id": favouriteId
    }; 
    res.status(204).json(outcome) ;
  })
  .catch(err => {
    res.status(500).json({ err: "failed to delete favourite" });
  });
});

module.exports = router;