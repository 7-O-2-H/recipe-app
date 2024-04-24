//imports 
const userQueries = require('../db/queries/users');

async function validateUserLogin(email, password) {

  // retrieve user by email
  try {
    const data = await userQueries.getUserByEmail(email);

    // if retrieved email from query matches input return true
    if (data[0]['password'] === password) {
      return (true, data[0]);
    };

    // else return false
    return false;

  } catch (error) {

    // handle validation error
    console.error('Error validating user:', error);
    return false;
    
  };
};

async function validUser(email) {

  // verify email is in db
  try {
    const data = await userQueries.getUserByEmail(email);
    
    // return false if username is not in db
    if (!data[0]) {
      return false;
    }

    // else return true
    return (true);

  } catch (error) {

    // handle error
    console.error('Error validating user:', error);
    return false;

  };

};

module.exports = { validateUserLogin, validUser }