const router = require('express').Router();
const { getAllUsers, getUserById, getUserByRecipeId, getUserByEmail } = require('../db/queries/users');
const { validUser, validateUserLogin } = require('../helpers/userHelpers');

router.get('/', (req, res) => {
  getAllUsers()
  .then(data => {
    res.json(data);
  })
});

router.put('/login', async (req, res) => {

  // req email and password
  const email = req.body.email;
  const password = req.body.password

  // check for valid user
  const isValidUser = await validUser(email);

  if (!isValidUser) {
    return res.json({ error: `Error: email not in database: ${email}` });
  };

  // validate user login by email
  const validLogin = await validateUserLogin(email, password);

  if (validLogin) {
    return res.json(validLogin);
  };

  return res.json(false)

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