// imports
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteStepById } from "../../helpers/stepsHelpers";

export default function EditSteps(props) {
  
  const { step_id, step_number, step_name, instruction, handleUpdateStepsArray } = props;

  // set states
  const [stepNumber, setStepNumber] = useState(step_number);
  const [stepName, setStepName] = useState(step_name);
  const [instructionContainer, setInstructionContainer] = useState(instruction);
  const [showStep, setShowStep] = useState(true); // use this to hide step when deleted without refreshing page
  const [updatedStep, setUpdatedStep] = useState({
    step_id: step_id,
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

  // handlers
  // handle delete step
  const handleDeleteStep = (e) => {
    e.preventDefault();
    deleteStepById(step_id);
    setShowStep(false);
  };

  // on change handlers
  const handleStepNumberChange = (e) => {
    // const newStepNumber = e.target.value;
    setStepNumber(e.target.value);
  };

  const handleStepNameChange = (e) => {
    // const newStepNumber = e.target.value;
    setStepName(e.target.value);
  };
  const handleInstructionChange = (e) => {
    // const newStepNumber = e.target.value;
    setInstructionContainer(e.target.value);
  };

  const handleSubmitChanges = (e) => {
    e.preventDefault();
    handleUpdateStepsArray(updatedStep);    
  };

  //template
  return (
    <div className="steps-container">
      {showStep && (
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
        <button type="submit" onClick={handleDeleteStep}>DELETE STEP</button>
        <button type="submit" onClick={handleSubmitChanges}>SUBMIT EDIT</button>
      </form>
      )}
    </div>
  )
};
