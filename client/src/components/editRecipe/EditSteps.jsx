// imports
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EditSteps(props) {
  
  const { step_number, step_name, instruction } = props;

  // set states
  const [stepNumber, setStepNumber] = useState(step_number);
  const [stepName, setStepName] = useState(step_name);
  const [instructionContainer, setInstructionContainer] = useState(instruction);

  //template
  return (
    <div className="steps-container">
      <form className="edit-steps-form" >
        <input
          label="Instruction"
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
      </form>
    </div>
  )
};
