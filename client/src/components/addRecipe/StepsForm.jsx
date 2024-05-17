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
  const [instructionType, setIinstructionType] = useState('prep');
  const [instructionsArray, setInstructionsArray] = useState([]);
  const [stepNumber, setStepNumber] = useState(0);
  const [stepObject, setStepObject] = useState({
    recipe_id: recipe
    step_name
  })

  const handleInstructionInput = (e) => {
    const inputInstruction = e.target.value;
    setInstruction(inputInstruction);
    console.log(instruction);
  };

  const handleAddStep = (event) => {

    // set step name to prep or step number
    if (instructionType === 'prep') {
      setStepName('Prep');
    } else {
      const formattedName = `Step ${stepNumber}`;
      setStepName(formattedName);
    };
    const stepObject = {
      step_name: stepName,
      step_number: stepNumber,
      instruction: instruction
    };
  };

  return (
    <div>
      <ToastContainer />
      {instructionType === 'prep' && (
        <h3>
          Prep:
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
        <button type="submit" className="submit-btn">
          ADD STEP
        </button>
        <button type="submit" className="submit-btn">
          SUBMIT RECIPE
        </button>
      </form>
          {/* 
      <button>BACK TO INGREDIENTS</button>
      <button>PROCEED TO TAGS</button>
      <button>CANCEL</button> */}
    </div>
  )
};