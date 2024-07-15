// imports
// react
import { useState, useEffect } from "react";
//components
import EditStep from "./EditStep";

export default function EditableStep(props) {

  const { id, step_number, step_name, instruction } = props;

  // states
  const [editable, setEditable] = useState(false);

  // handlers
  // handle edit condition
  const editStep = (e) => {
    e.preventDefault();
    setEditable(prev => !prev);
  };

  //template
  return (
    <div className="steps-container">
      {editable ? (
        <div>
          <EditStep
            handleCancel={editStep}
            step_number={step_number}
            step_name={step_name}
            instruction={instruction}
          />
        </div>
      ) : (
        <div className="step" onClick={editStep}>
          <h3>
            {step_name}
          </h3>
          <br></br>
          {instruction}
          <br></br>
          <br></br>
        </div>
      )}
  </div>
  );
};