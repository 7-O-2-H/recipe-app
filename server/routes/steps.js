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

  const stepOne = req.body.step1;
  const stepTwo = req.body.step2;

  const stepOneInstruction = stepTwo.instruction;
  const stepTwoInstruction = stepOne.instruction;

  stepOne.instruction = stepOneInstruction;
  stepTwo.instruction = stepTwoInstruction;
  
  console.log(stepOne, stepTwo);



  return;
});

module.exports = router; 