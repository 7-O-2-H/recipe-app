// imports
import { useState } from "react";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAppData from "../../hooks/useAppData";

export default function StepsForm (props) {

  const { recipeId } = props;

  //  set initial states
  const [stepName, setStepName] = useState('');
  const [instruction, setInstruction] = useState('');
  const [instructionType, setInstructionType] = useState('prep');
  const [instructionsArray, setInstructionsArray] = useState([]);
  const [stepNumber, setStepNumber] = useState(1);
  const [stepCounter, setStepCounter] = useState(1);
  const [stepObject, setStepObject] = useState({
    recipe_id: recipeId,
    step_name: '',
    step_number: 0,
    instruction: ''
  });

  const handleInstructionInput = (e) => {
    const inputInstruction = e.target.value;
    setInstruction(inputInstruction);
    console.log(instruction);

    // set step name to prep or step number with if statement
    if (instructionType === 'prep') {

      // create new step object based on new information
      const newStepObject = {
        ...stepObject, 
        step_number: stepNumber,
        step_name: 'Prep',
        instruction: instruction
      }

      // update step object
      setStepObject(newStepObject);
      console.log(stepObject);

    } else {
      
      // format step name
      const formattedName = `Step ${stepCounter}`;
      setStepName(formattedName);

      // create new step object based on new information
      const newStepObject = {
        ...stepObject, 
        step_number: stepNumber,
        step_name: stepName,
        instruction: instruction
      };

      // update step object
      setStepObject(newStepObject);
      console.log(stepObject);

    };
  };

  const handleAddStep = (event) => {
    event.preventDefault();

    
    if (instructionType === 'prep') {

      // increment step number
      setStepNumber(prevStepNumber => prevStepNumber + 1);

      // switch to steps
      setInstructionType('step');

    } else {

      // format step name
      const formattedName = `Step ${stepCounter}`;
      setStepName(formattedName);

      // create new step object based on new information
      const newStepObject = {
        ...stepObject, 
        step_number: stepNumber,
        step_name: stepName,
        instruction: instruction
      };

      // update step object
      setStepObject(newStepObject);
      
      // increment step number and counter
      setStepCounter(prevStepCounter => prevStepCounter + 1);
      setStepNumber(prevStepNumber => prevStepNumber + 1);
    };

  };

  return (
    <div>
      <ToastContainer />
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
          value={instruction}
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
      </form>
    </div>
  )
};