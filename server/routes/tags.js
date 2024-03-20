const router = require('express').Router();
const { getAllTags } = require('../db/queries/tags');

router.get('/', (req, res) => {
  getAllTags()
  .then(data => {
    res.json(data);
  })
});

module.exports = router;