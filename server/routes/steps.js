const router = require('express').Router();
const { addStep } = require('../db/queries/steps');

// POST
router.post('/add', (req, res) => {

  // req recipe data
  const stepData = req.body.stepData;

  addStep(stepData);
});

module.exports = router;