const router = require('express').Router();
const { getAllTags, getTagsByRecipeId, getRecipesByTagId, addTag, addRecipeTag, getFullTagsInfo, deleteRecipeTagById } = require('../db/queries/tags');

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

  // get tag array from front end
  const tagsArray = req.body.tagsArray;

  console.log(tagsArray);

  // loop through tags to add
  for (const tag of tagsArray) {
    
    // add recipe tag if tag already in db else use async add tag and use return tag id to add recipe tag
    if (tag.tag_id !== null) {
      addRecipeTag(tag);
    } else {

      try {
        
        const lowerCaseTag = tag.tag.toLowerCase();
        const tagId = await addTag(lowerCaseTag);
        tag.tag_id = tagId;
        addRecipeTag(tag);

      } catch (error) {
        console.error('Add tag error: ', error.message);
        res.status(500).json({error: "internal"});
      };
    };
  };
});

router.get('/', (req, res) => {
  getAllTags()
  .then(data => {
    res.json(data);
  })
});

router.get('/full/:id', (req, res) => {
  const id = req.params.id;
  getFullTagsInfo(id)
  .then(data => {
    res.json(data);
  })
});

router.post('/delete', async (req, res) => {

  // req tags
  const recipeTagIds = req.body.tags;

  console.log(recipeTagIds);

  for (const id of recipeTagIds) {

    try {

      deleteRecipeTagById(id)
      // .then(data => {
      //   res.status(204).send();
      } catch (error) {
        res.status(500).json({err: "failed to delete selected tags"})
      }
      
    }
  
});

module.exports = router;