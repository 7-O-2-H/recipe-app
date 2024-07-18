// imports
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import useAppData from "../../hooks/useAppData";
import { addStep } from "../../helpers/stepsHelpers";

export default function AddStep (props) {

  const { recipeId, onCancel, stepNumber, nextStep } = props;
  
  const [instructionContainer, setInstructionContainer] = useState('');
  const [stepName, setStepName] = useState(nextStep);
  const [stepObject, setStepObject] = useState({
    recipe_id: recipeId,
    step_number: stepNumber,
    step_name: stepName,
    instruction: ''
  });

  // update stepObject with useEffect
  useEffect(() => {
    setStepObject({
      ...stepObject,
      step_number: stepNumber,
      step_name: stepName,
      instruction: instructionContainer
    })
  }, [stepName, instructionContainer]);
  
  // handlers
  // handle instruction input
  const handleStepNameChange = (e) => {
    setStepName(e.target.value);
  };

  const handleInstructionChange = (e) => {
    setInstructionContainer(e.target.value);
  };

  // handle step submission
  const handleAddStep = (e) => {
    e.preventDefault();

    console.log(stepObject);
  };

  // handle cancel, delete recipe data
  const handleCancel = (event) => {
    event.preventDefault();
    onCancel();
    return;
  };

  return (
    <div>
      <ToastContainer />
      <form className="edit-steps-form" >
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
          placeholder="Instruction"
          value={instructionContainer}
          onChange={handleInstructionChange}
        />
        <button type="submit" onClick={onCancel}>CANCEL</button>
        <button type="submit" onClick={handleAddStep}>ADD STEP</button>
      </form>
    </div>
  )
};