const router = require('express').Router();
const { addStep } = require('../db/queries/steps');

// POST
router.post('/add', (req, res) => {

  // req recipe data
  const stepData = req.body.stepData;

  addStep(stepData)
  .then((data) => {
    res.json(data);
  })
});

router.post('/delete', (req, res) => {

  // req recipe data
  const id = req.body.id;

  console.log(id);
  // addStep(stepData)
  // .then((data) => {
  //   res.json(data);
  // })
});

module.exports = router;