// imports
//react
import { useState, useEffect } from "react";

export default function EditStep (props) {
  
  // retreive props
  const { handleCancel, step_number, step_name, instruction } = props;
  
  // states
  const [stepNumber, setStepNumber] = useState(step_number);
  const [stepName, setStepName] = useState(step_name);
  const [instructionContainer, setInstructionContainer] = useState(instruction);

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
          // onChange={handleStepNumberChange}
        />
        <input
          label="Step Name"
          id="stepName"
          type="text"
          className="input-field"
          placeholder="Step Name"
          value={stepName}
          // onChange={handleStepNameChange}
        />
        <input
          label="Instruction"
          id="instruction"
          type="text"
          className="input-field"
          placeholder="instruction"
          value={instructionContainer}
          // onChange={handleInstructionChange}
        />
        <button type="submit" onClick={handleCancel}>CANCEL</button>
        {/* <button type="submit" onClick={handleDeleteStep}>DELETE STEP</button> */}
        {/* <button type="submit" onClick={handleSubmitChanges}>SUBMIT EDIT</button> */}
      </form>
    </div>
   )
};