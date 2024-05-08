// imports
import { useState } from "react";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAppData from "../../hooks/useAppData";

export default function StepsForm (props) {

  //  set initial states
  const [stepName, setStepName] = useState('');
  const [instruction, setInstruction] = useState('');

  return (
    <div>
      <ToastContainer />
      <form className="steps-form" onSubmit={handleRecipeSubmit}>
        <input
          id="step-name"
          type="text"
          className="input-field"
          placeholder="step or prep"
          value={recipe}
          onChange={(event) => setStepName(event.target.value)}
        />
        <input
          id="instruction"
          type="number"
          className="input-field"
          placeholder="instruction"
          value={instruction}
          onChange={(event) => setInstruction(event.target.value)}
        />
        <button type="submit" className="submit-btn">
          ADD RECIPE DETAILS
        </button>
      </form>
      <button>BACK TO INGREDIENTS</button>
      <button>PROCEED TO TAGS</button>
      <button>CANCEL</button>
    </div>
  )
};