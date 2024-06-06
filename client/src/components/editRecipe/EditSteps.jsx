// imports
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteStepById } from "../../helpers/stepsHelpers";

export default function EditSteps(props) {
  
  const { step_id, step_number, step_name, instruction } = props;

  // set states
  const [stepNumber, setStepNumber] = useState(step_number);
  const [stepName, setStepName] = useState(step_name);
  const [instructionContainer, setInstructionContainer] = useState(instruction);

  // handle delete step
  const handleDeleteStep = (e) => {
    e.preventDefault();

    // deleteStepById()
  };

  //template
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
          // onChange={handleInstructionInput}
        />
        <input
          label="Step Name"
          id="stepName"
          type="text"
          className="input-field"
          placeholder="Step Name"
          value={stepName}
          // onChange={handleInstructionInput}
        />
        <input
          label="Instruction"
          id="instruction"
          type="text"
          className="input-field"
          placeholder="instruction"
          value={instructionContainer}
          // onChange={handleInstructionInput}
        />
        <button type="submit" onClick={handleDeleteStep}>DELETE STEP</button>
      </form>
    </div>
  )
};
