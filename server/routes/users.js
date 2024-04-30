const router = require('express').Router();
const { getAllUsers, getUserById, getUserByRecipeId, getUserByEmail, getUserByUserName, addUser } = require('../db/queries/users');
const { validUser, validateUserLogin, generateToken } = require('../helpers/userHelpers');

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
    return res.json(false );
  };

  // validate user login by email
  const validLogin = await validateUserLogin(email, password);

  if (validLogin) {
    return res.json(validLogin);
  };

  return res.json(false)

});

router.put('/add', async(req, res) => {

  // set user data from submitted form and inisital falsey values for exisiting user
  const userData = req.body.userData;
  const existingUser = {
    status: false,
    user_name: null,
    email: null
  };

  // check db for submitted user
  try {
    const data = await getUserByUserName(userData.user_name);
    if (data[0]) {
      existingUser.status = true;
      existingUser.user_name = data[0].user_name;
    }
  } catch(error) {
    console.log('error', error);
    return;
  };
  
  // check db for submitted email
  try {
    const data = await getUserByEmail(userData.email);
    if (data[0]) {
      existingUser.status = true;
      existingUser.email = data[0].email;
    }
  } catch(error) {
    console.log('error', error);
    return;
  };
  
  // return correct message dependent on reason for failure
  if (existingUser.status) {
    if (existingUser.user_name) {
      return res.status(400).json({success: false, message: 'This user name is already in our database.'})
    };
    if (existingUser.email) {
      return res.status(400).json({success: false, message: 'This email is already in our database.'})
    };
    return res.status(400).json({success: false, message: 'Invalid registration.'});
  };

  // add user
  addUser(userData)
  .then(data => {
    const userId = data['data'][0]['id'];
    const token = generateToken(userId);
    res.status(201).json({token: token, success: true, message: 'Registration successful.'})
  })
  .catch((err) => {
    console.log("error: ", err);
    res.status(500).json({success: false, message: 'Failed to add user.'})
  })
});

module.exports = router;