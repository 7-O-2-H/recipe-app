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
  const updatedStepData = req.body.updatedStep;

    editStep(updatedStepData)
    .then((data) => {
      res.json(data);
    });

});

// swap
router.post('/swap', async (req, res) => {

  const step1 = req.body.step1;
  const step2 = req.body.step2;
  console.log(step1, step2);

  return;
});

module.exports = router; 