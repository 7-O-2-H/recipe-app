const router = require('express').Router();
const { getAllUsers, getUserById, getUserByRecipeId } = require('../db/queries/users');

router.get('/', (req, res) => {
  getAllUsers()
  .then(data => {
    res.json(data);
  })
});

route.get('/loginByEmail', req, res => {
  validateUserByEmail(email, password)
  .then(data => {
    res.json(data);
  });
});

router.get('/5', (req, res) => {
  getUserById(5)
  .then(data => {
    res.json(data);
  })
});

router.get('/4', (req, res) => {
  getUserByRecipeId(4)
  .then(data => {
    res.json(data);
  })
});

module.exports = router;