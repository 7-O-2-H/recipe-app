// imports
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import useAppData from "../../hooks/useAppData";
import { addStep } from "../../helpers/stepsHelpers";

export default function AddStep (props) {

  const { recipeId, onCancel } = props;
  
  const [stepNumber, setStepNumber] = useState(1);
  const [instructionContainer, setInstructionContainer] = useState('');
  const [stepName, setStepName] = useState('');
  const [stepObject, setStepObject] = useState({
    recipe_id: recipeId,
    step_number: 1,
    step_name: '',
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


    if (!instructionContainer) {
      toast.error("Please enter your instuctions to submit.");
      return;
    };

    if (instructionType === 'prep') {
      setStepObject({
        ...stepObject,
        // step_name: 'Prep',
        step_number: stepNumber
      });

      setInstructionsArray(prevInstructionsArray => [...prevInstructionsArray, stepObject]);
      addStep(stepObject);

      // change instruction type
      setInstructionType('step');

      // increment step number
      setStepNumber(stepNumber => stepNumber + 1);
      const formattedStep = `Step ${stepCounter}`;
      setStepName(formattedStep);
      setStepCounter(stepCounter => stepCounter + 1);

    } else {

      // format step name
      const formattedStep = `Step ${stepCounter}`;
      setStepName(formattedStep);

      setStepObject({
        ...stepObject,
        step_name: formattedStep,
        step_number: stepNumber
      });

      setInstructionsArray(prevInstructionsArray => [...prevInstructionsArray, stepObject]);
      addStep(stepObject);

      // increment step number and counter
      setStepNumber(stepNumber => stepNumber + 1);
      setStepCounter(stepCounter => stepCounter + 1);
    };

    setInstructionContainer('');
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
        <button type="submit" onClick={handleAddStepToggle}>CANCEL ADD STEP</button>
        <button type="submit" onClick={handleAddStep}>ADD STEP</button>
      </form>
    </div>
  )
};