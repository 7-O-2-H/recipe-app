const router = require('express').Router();
const { addStep, deleteStep, editStep } = require('../db/queries/steps');

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

  for (const step of stepsArray) {
    // console.log(step);
    editStep(step)
    .then((data) => {
      console.log(data);
    });
  };

});

module.exports = router; 