// imports
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import useAppData from "../../hooks/useAppData";
import { addStep } from "../../helpers/stepsHelpers";

export default function AddStep (props) {

  const { recipeId, onCancel, stepNumber, nextStep, refresh } = props;
  
  const [instructionContainer, setInstructionContainer] = useState('');
  const [stepName, setStepName] = useState(nextStep);
  const [newStep, setNewStep] = useState({
    recipe_id: recipeId,
    step_number: stepNumber,
    step_name: stepName,
    instruction: ''
  });

  // update newStep with useEffect
  useEffect(() => {
    setNewStep({
      ...newStep,
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
  const handleAddStep = async (e) => {
    e.preventDefault();

    // confirm all information has been added and return toast error without submission if empty data
    if (!newStep.recipe_id || !newStep.step_number || !newStep.step_name || !newStep.instruction) {

      toast.error("You must enter all information for your new step.");
      return;

    };
    
    await addStep(newStep);
    refresh();
    onCancel();

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
        <button type="submit" onClick={handleAddStep}>ADD STEP</button>
        <button type="submit" onClick={onCancel}>CANCEL</button>
      </form>
    </div>
  )
};