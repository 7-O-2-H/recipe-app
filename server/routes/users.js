const router = require('express').Router();
const { getAllUsers } = require('../db/queries/users');

router.get('/', (req, res) => {
  getAllUsers()
  .then(data => {
    res.json(data);
  })
});

module.exports = router;