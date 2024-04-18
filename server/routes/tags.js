const router = require('express').Router();
const { getAllTags, getTagsByRecipeId, getRecipesByTagId } = require('../db/queries/tags');

router.get('/', (req, res) => {
  getAllTags()
  .then(data => {
    res.json(data);
  })
});

// router.get('/:id', (req, res) => {
//   getTagsByRecipeId(id)
//   .then(data => {
//     res.json(data);
//   })
// });

router.get('/:id', (req, res) => {
  getRecipesByTagId(1)
  .then(data => {
    res.json(data);
  })
});

module.exports = router;