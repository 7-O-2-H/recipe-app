// imports
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import useAppData from "../../hooks/useAppData";
import { addStep } from "../../helpers/stepsHelpers";

export default function StepsForm (props) {

  const { recipeId, onCancel } = props;
  
  const [instructionContainer, setInstructionContainer] = useState('');
  const [instructionType, setInstructionType] = useState('prep');
  const [instructionsArray, setInstructionsArray] = useState([]);
  const [stepName, setStepName] = useState('');
  const [stepNumber, setStepNumber] = useState(1);
  const [stepCounter, setStepCounter] = useState(1);
  const [stepObject, setStepObject] = useState({
    recipe_id: recipeId,
    step_name: 'Prep',
    step_number: 1,
    instruction: ''
  });

  // update stepObject with useEffect
  useEffect(() => {
    setStepObject({
      ...stepObject,
      instruction: instructionContainer
    })
  }, [instructionContainer])
  
  // handlers
  // handle instruction input
  const handleInstructionInput = (e) => {
    const inputInstruction = e.target.value;
    setInstructionContainer(inputInstruction);
    setStepObject({
      ...stepObject, 
      instruction: instructionContainer
    });
  };

  // handle step submission
  const handleAddStep = (e) => {
    e.preventDefault();

    if (instructionType === 'prep') {
      setStepObject({
        ...stepObject,
        step_number: stepNumber
      });

      // change instruction type
      setInstructionType('step');

      // increment step number
      setStepNumber(stepNumber => stepNumber + 1);
      const formattedStep = `Step ${stepCounter}`;
      setStepName(formattedStep);

    } else {

      // format step name
      const formattedStep = `Step ${stepCounter}`;
      setStepName(formattedStep);

      setStepObject({
        ...stepObject,
        step_name: formattedStep,
        step_number: stepNumber
      });

      // increment step number and counter
      setStepNumber(stepNumber => stepNumber + 1);
      setStepCounter(stepCounter => stepCounter + 1);
    };

    setInstructionsArray(prevInstructionsArray => [...prevInstructionsArray, stepObject]);
    addStep(stepObject);
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
      {instructionsArray && instructionsArray[0] && (
          <h2>Submitted Steps:</h2>
      )}
      {instructionsArray && instructionsArray[0] && (
        <p>
          {instructionsArray.map((step, index) => (
            <li key={index}>
              {step.step_name}: {step.instruction}
            </li>
          ))}
        </p>
      )}
      {instructionType === 'prep' ? (
        <h3>
          Prep:
        </h3>
      ) : (
        <h3>
          {stepName}:
        </h3>
      )}
      <form className="steps-form" >
        <input
          id="instruction"
          type="text"
          className="input-field"
          placeholder="instruction"
          value={instructionContainer}
          onChange={handleInstructionInput}
          />
        {instructionType === 'prep' ? (
          <button type="submit" className="submit-btn" onClick={handleAddStep}>
            ADD PREP
          </button>
        ) : (
          <button type="submit" className="submit-btn" onClick={handleAddStep}>
            ADD STEP
          </button>
        )}
        <button type="submit" className="submit-btn">
          SUBMIT RECIPE
        </button>
        <button onClick={handleCancel}>CANCEL</button>
      </form>
    </div>
  )
};