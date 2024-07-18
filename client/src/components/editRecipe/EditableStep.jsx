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

  const { id, index, step_number, step_name, instruction, refresh, precedingStep, succeedingStep, authorizedUser } = props;
  
  // states
  const [editable, setEditable] = useState(false);

  // handlers
  // handle edit condition
  const editStep = (e) => {
    e.preventDefault();

    if (!authorizedUser) {
      toast.error('You\'re not authorized to edit this recipe.');
      return;
    };

    setEditable(prev => !prev);
  };

  //template
  return (
    <div className="steps-container">
      <ToastContainer />
      {editable ? (
        <div>
          <EditStep
            handleCancel={editStep}
            index={index}
            id={id}
            step_number={step_number}
            step_name={step_name}
            instruction={instruction}
            refresh={refresh}
            succeedingStep={succeedingStep}
            precedingStep={precedingStep}
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