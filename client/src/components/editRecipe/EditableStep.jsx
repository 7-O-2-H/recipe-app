// imports
// react
import { useState, useEffect } from "react";

export default function EditableStep(props) {

  const { id, step_number, step_name, instruction } = props;

  // states
  const [editable, setEditable] = useState(false);

  // handlers
  // handle edit condition
  const editStep = (e) => {
    e.preventDefault();
    setEditable(true);
  };

  //template
  return (
    <div className="steps-container">
      {editable ? (
        <div>editable</div>
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