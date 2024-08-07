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

  // retreive steps from body
  const stepOne = req.body.step1;
  const stepTwo = req.body.step2;

  console.log("before update: ", stepOne, stepTwo);
  // swap instruction values
  const tempInstructionHolder = stepTwo.instruction;
  stepTwo.instruction = stepOne.instruction;
  stepOne.instruction = tempInstructionHolder;

  // add recipeId to stepOne
  stepOne.recipe_id = stepTwo.recipe_id;

  // format step two to have step_id
  stepTwo.step_id = stepTwo.id;
  
  // create array to hold updated steps
  const stepsToSwap = [stepOne, stepTwo];

  console.log("after update: ", stepsToSwap);

  try {
    await Promise.all(stepsToSwap.map(async (step) => {
      await editStep(step);
    }))
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "internal" });
  };

});

module.exports = router; 