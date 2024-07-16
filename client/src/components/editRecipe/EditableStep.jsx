// imports
// react
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//components
import EditStep from "./EditStep";
// helpers
import { deleteStepById } from "../../helpers/stepsHelpers";

export default function EditableStep(props) {

  const { id, step_number, step_name, instruction, refresh } = props;
  
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
            id={id}
            step_number={step_number}
            step_name={step_name}
            instruction={instruction}
            refresh={refresh}
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