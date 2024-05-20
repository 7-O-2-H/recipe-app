const router = require('express').Router();
const { getAllTags, getTagsByRecipeId, getRecipesByTagId, addTag, addRecipeTag } = require('../db/queries/tags');

router.get('/recipes/:id', (req, res) => {
  const id = req.params.id;
  getRecipesByTagId(id)
  .then(data => {
    res.json(data);
  })
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  getTagsByRecipeId(id)
  .then(data => {
    res.json(data);
  })
});

// get recipe tags - used for testing

router.post('/add', async (req, res) => {

  const tagsArray = req.body.tagsArray;

  for (const tag of tagsArray) {

    try {

      const tagId = await addTag(tag.tag);
      tag.tag_id = tagId;
      addRecipeTag(tag);

    } catch (error) {
      console.error('Add tag error: ', error.message);
      res.status(500).json({error: "internal"});
    };
  };
});

router.get('/', (req, res) => {
  getAllTags()
  .then(data => {
    res.json(data);
  })
});

module.exports = router;