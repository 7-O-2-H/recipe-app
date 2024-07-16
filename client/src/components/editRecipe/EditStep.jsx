// imports
//react
import { useState, useEffect } from "react";
// helpers
import { deleteStepById } from "../../helpers/stepsHelpers";
import { editExistingSteps } from "../../helpers/stepsHelpers";

export default function EditStep (props) {
  
  // retreive props
  const { handleCancel, id, step_number, step_name, instruction, refresh } = props;
  
  // states
  const [stepNumber, setStepNumber] = useState(step_number);
  const [stepName, setStepName] = useState(step_name);
  const [instructionContainer, setInstructionContainer] = useState(instruction);
  const [updatedStep, setUpdatedStep] = useState({
    step_id: id,
    step_number: stepNumber, 
    step_name: stepName,
    instruction: instructionContainer
  });

  // use useEffect to update step when dependencies change
  useEffect(() => {
    setUpdatedStep({
      ...updatedStep,
      step_number: stepNumber,
      step_name: stepName,
      instruction: instructionContainer
    })
  }, [stepNumber, stepName, instructionContainer]);

  // on change handlers
  const handleStepNumberChange = (e) => {
    setStepNumber(parseInt(e.target.value));
  };

  const handleStepNameChange = (e) => {
    setStepName(e.target.value);
  };
  
  const handleInstructionChange = (e) => {
    setInstructionContainer(e.target.value);
  };

  // edit step
  const handleEditStep = async (event) => {
    event.preventDefault();

    // add edited step to array
    const stepsArray = [];
    stepsArray.push(updatedStep);

    await editExistingSteps(stepsArray);

    refresh();

    handleCancel(event);

  };

  // delete step
  const handleDeleteStep = async (event) => {
    event.preventDefault();
    await deleteStepById(id);
    refresh();
    handleCancel(event);
  };

  return (
    <div className="steps-container">
      <form className="edit-steps-form" >
        <input
          label="Step Number"
          id="stepNumber"
          type="number"
          className="input-field"
          placeholder="Step Number"
          value={stepNumber}
          onChange={handleStepNumberChange}
        />
        <input
          label="Step Name"
          id="stepName"
          type="text"
          className="input-field"
          placeholder="Step Name"
          value={stepName}
          onChange={handleStepNameChange}
        />
        <input
          label="Instruction"
          id="instruction"
          type="text"
          className="input-field"
          placeholder="instruction"
          value={instructionContainer}
          onChange={handleInstructionChange}
        />
        <button type="submit" onClick={handleCancel}>CANCEL</button>
        <button type="submit" onClick={handleDeleteStep}>DELETE STEP</button>
        <button type="submit" onClick={handleEditStep}>SUBMIT EDIT</button>
      </form>
    </div>
   )
};