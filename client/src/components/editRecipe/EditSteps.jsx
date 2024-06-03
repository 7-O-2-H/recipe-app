// // imports
// import { useEffect, useState } from "react";
// import { toast } from 'react-toastify';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// // import useAppData from "../../hooks/useAppData";
// import { addStep } from "../../helpers/stepsHelpers";

// export default function StepsForm (props) {

//   const { recipeId, onCancel } = props;
  
//   const [instructionContainer, setInstructionContainer] = useState('');
//   const [instructionType, setInstructionType] = useState('prep');
//   const [instructionsArray, setInstructionsArray] = useState([]);
//   const [stepName, setStepName] = useState('');
//   const [stepNumber, setStepNumber] = useState(1);
//   const [stepCounter, setStepCounter] = useState(1);
//   const [stepObject, setStepObject] = useState({
//     recipe_id: recipeId,
//     step_name: 'Prep',
//     step_number: 1,
//     instruction: ''
//   });

//   // update stepObject with useEffect
//   useEffect(() => {
//     setStepObject({
//       ...stepObject,
//       instruction: instructionContainer,
//       step_name: stepName || 'Prep',
//       step_number: stepNumber
//     })
//   }, [instructionContainer]);
  
//   // handlers
//   // handle instruction input
//   const handleInstructionInput = (e) => {
//     const inputInstruction = e.target.value;
//     setInstructionContainer(inputInstruction);
//     setStepObject({
//       ...stepObject, 
//       instruction: instructionContainer
//     });
//   };

//   // handle skip prep
//   const handleSkipPrep = (e) => {

//     // change to step state if prep is skipped, update step object and step counter accordingly
//     setInstructionType('step');
//     const formattedStep = `Step ${stepCounter}`;
//     setStepName(formattedStep);
//     setStepObject({
//       ...stepObject,
//       step_name: formattedStep
//     });

//     setStepCounter(stepCounter => stepCounter + 1);
//   };

//   // handle step submission
//   const handleAddStep = (e) => {
//     e.preventDefault();


//     if (!instructionContainer) {
//       toast.error("Please enter your instuctions to submit.");
//       return;
//     };

//     if (instructionType === 'prep') {
//       setStepObject({
//         ...stepObject,
//         // step_name: 'Prep',
//         step_number: stepNumber
//       });

//       setInstructionsArray(prevInstructionsArray => [...prevInstructionsArray, stepObject]);
//       addStep(stepObject);

//       // change instruction type
//       setInstructionType('step');

//       // increment step number
//       setStepNumber(stepNumber => stepNumber + 1);
//       const formattedStep = `Step ${stepCounter}`;
//       setStepName(formattedStep);
//       setStepCounter(stepCounter => stepCounter + 1);

//     } else {

//       // format step name
//       const formattedStep = `Step ${stepCounter}`;
//       setStepName(formattedStep);

//       setStepObject({
//         ...stepObject,
//         step_name: formattedStep,
//         step_number: stepNumber
//       });

//       setInstructionsArray(prevInstructionsArray => [...prevInstructionsArray, stepObject]);
//       addStep(stepObject);

//       // increment step number and counter
//       setStepNumber(stepNumber => stepNumber + 1);
//       setStepCounter(stepCounter => stepCounter + 1);
//     };

//     setInstructionContainer('');
//   };

//   // handle submit with a check to see if the user has entered some instructions
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (instructionsArray.length === 0 || !instructionsArray[0]) {
//       toast.error('Your must submit at least one step for your recipe');
//       return;
//     }
//     onSubmitRecipe(instructionsArray);
//   };

//   // handle cancel, delete recipe data
//   const handleCancel = (event) => {
//     event.preventDefault();
//     onCancel();
//     return;
//   };

//   return (
//     <div>
//       <ToastContainer />
//       {instructionsArray && instructionsArray[0] && (
//           <h2>Submitted Steps:</h2>
//       )}
//       {instructionsArray && instructionsArray[0] && (
//         <p>
//           {instructionsArray.map((step, index) => (
//             <li key={index}>
//               {step.step_name}: {step.instruction}
//             </li>
//           ))}
//         </p>
//       )}        
//       {instructionType === 'step' ? (
//         <h3>
//           {stepName}:
//         </h3>
//       ) : (
//         <h3>
//           Prep:
//         </h3>
//       )}
//       <form className="steps-form" >
//         <input
//           id="instruction"
//           type="text"
//           className="input-field"
//           placeholder="instruction"
//           value={instructionContainer}
//           onChange={handleInstructionInput}
//           />
//         {instructionType === 'prep' ? (
//           <div>
//             <button type="submit" className="submit-btn" onClick={handleAddStep}>
//               ADD PREP
//             </button>
//             <button type="submit" onClick={handleSkipPrep}>
//               SKIP PREP
//             </button>
//           </div>
//         ) : (
//           <button type="submit" className="submit-btn" onClick={handleAddStep}>
//             ADD STEP
//           </button>
//         )}
//         <button type="submit" className="submit-btn" onClick={handleSubmit}>
//           SUBMIT RECIPE
//         </button>
//         <button onClick={handleCancel}>CANCEL</button>
//       </form>
//     </div>
//   )
// };

export default function EditSteps(props) {
  
  const { step_number, step_name, instruction } = props;

  // set states
  const [stepNumber, setStepNumber] = useState(step_number);
  const [stepName, setStepName] = useState(step_name);
  const [instructionContainer, setInstructionContainer] = useState(instruction);
  //template
  return (
    <div className="steps-container">
      
        </div>
      )

};
