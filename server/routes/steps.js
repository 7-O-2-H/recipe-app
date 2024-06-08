const router = require('express').Router();
const { addStep, deleteStep } = require('../db/queries/steps');

// POST
router.post('/add', (req, res) => {

  // req step data
  const stepData = req.body.stepData;

  addStep(stepData)
  .then((data) => {
    res.json(data);
  })
});

router.post('/delete', (req, res) => {

  // req step id from body
  const id = req.body.id;

  deleteStep(id)
  .then((data) => {
    res.json(data);
  })
});

router.post('/edit', (req, res) => {

  // req updated steps from body
  const stepsArray = req.body.updatedSteps;

  console.log(stepsArray);
  // deleteStep(id)
  // .then((data) => {
  //   res.json(data);
  // })
});

module.exports = router; 