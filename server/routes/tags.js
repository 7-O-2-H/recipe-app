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

router.post('/add', async (req, res) => {

  const tagsArray = req.body.tagsArray;

  console.log(tagsArray);

  for (const tag of tagsArray) {
    console.log(tag);
    try {

      const tagId = await addTag(tag.tag);
      tag.tag_id = tagId;
      console.log(tag);
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