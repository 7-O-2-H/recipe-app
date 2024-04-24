const jwt = require('jsonwebtoken');
const router = require('express').Router();

router.post('/', (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.sendStatus(401); // Unauthorized
  }

  const tokenString = token.split(' ')[1];

  jwt.verify(tokenString, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.sendStatus(403); // Forbidden
    }
    res.json(decoded); // Send decoded token data back to client
  });
});

module.exports = router;
