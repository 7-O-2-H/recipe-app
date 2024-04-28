const jwt = require('jsonwebtoken');
const router = require('express').Router();
const express = require('express');

router.use(express.json());

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

router.post('/authorizeUser', (req, res) => {
  const token = req.headers.authorization;
  const submitterId = parseInt(req.body.userId);

  if (!token) {
    return res.sendStatus(401); // Unauthorized
  }

  const tokenString = token.split(' ')[1];

  jwt.verify(tokenString, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.sendStatus(403); // Forbidden
    }
    const userId = parseInt(decoded);
    console.log(req.body);
    if (submitterId !== userId) {
      return res.json({ authorized: false });
    }

    res.json({ authorized: true });
  });
});

module.exports = router;
