// imports
//react
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// helpers
import { deleteStepById } from "../../helpers/stepsHelpers";
import { editExistingStep } from "../../helpers/stepsHelpers";
import { swapSteps } from "../../helpers/stepsHelpers";

export default function EditStep (props) {
  
  // retreive props
  const { handleCancel, index, id, step_number, step_name, instruction, refresh, succeedingStep, precedingStep } = props;
  
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

  // move steps
  const moveUp = (event) => {
    event.preventDefault();
    if (!precedingStep) {
      toast.error("You cannot move this step up.");
      return;
    };

    swapSteps(updatedStep, precedingStep);
    refresh();
    handleCancel(event);

  };

  const moveDown = (event) => {
    event.preventDefault();
    if (!succeedingStep) {
      toast.error("You cannot move this step down.");
      return;
    };

    swapSteps(updatedStep, succeedingStep);
    refresh();
    handleCancel(event);
  };

  // edit step
  const handleEditStep = async (event) => {
    event.preventDefault();

    await editExistingStep(updatedStep);

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
      <ToastContainer />
      <form className="edit-steps-form" >
        {/* <input
          label="Step Number"
          id="stepNumber"
          type="number"
          className="input-field"
          placeholder="Step Number"
          value={stepNumber}
          onChange={handleStepNumberChange}
        /> */}
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
        {precedingStep && (
          <button onClick={moveUp}>⬆️</button>
        )}
        {succeedingStep && (
          <button onClick={moveDown}>⬇️</button>
        )}
      </form>
    </div>
   )
};