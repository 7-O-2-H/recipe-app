// imports
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import useAppData from "../../hooks/useAppData";
import { addStep } from "../../helpers/stepsHelpers";

export default function StepsForm (props) {

  const { recipeId } = props;
  
  const [instructionContainer, setInstructionContainer] = useState('');
  const [instructionType, setInstructionType] = useState('prep');
  const [instructionsArray, setInstructionsArray] = useState([]);
  const [stepName, setStepName] = useState('');
  const [stepNumber, setStepNumber] = useState(1);
  const [stepCounter, setStepCounter] = useState(1);
  const [stepObject, setStepObject] = useState({
    recipe_id: recipeId,
    step_name: 'Prep',
    step_number: 1,
    instruction: ''
  });

  // update stepObject with useEffect
  useEffect(() => {
    setStepObject({
      ...stepObject,
      instruction: instructionContainer
    })
  }, [instructionContainer])
  
  // handlers
  // handle instruction input
  const handleInstructionInput = (e) => {
    const inputInstruction = e.target.value;
    setInstructionContainer(inputInstruction);
    setStepObject({
      ...stepObject, 
      instruction: instructionContainer
    });
    console.log(stepObject);
  };

  // handle step submission
  const handleAddStep = (e) => {
    e.preventDefault();

    if (instructionType === 'prep') {
      setStepObject({
        ...stepObject,
        step_number: stepNumber
      });

      // change instruction type
      setInstructionType('step');

      // increment step number
      setStepNumber(stepNumber => stepNumber + 1);
      const formattedStep = `Step ${stepCounter}`;
      setStepName(formattedStep);

    } else {

      // format step name
      const formattedStep = `Step ${stepCounter}`;
      setStepName(formattedStep);

      setStepObject({
        ...stepObject,
        step_name: formattedStep,
        step_number: stepNumber
      });

      // increment step number and counter
      setStepNumber(stepNumber => stepNumber + 1);
      setStepCounter(stepCounter => stepCounter + 1);
    };
    console.log('stepObj: ', stepObject, instructionType);

    setInstructionsArray(prevInstructionsArray => [...prevInstructionsArray, stepObject]);
    addStep(stepObject);
    setInstructionContainer('');
  };

  return (
        <div>
          <ToastContainer />
          {instructionsArray && instructionsArray[0] && (
              <h2>Submitted Steps:</h2>
          )}
          {instructionsArray && instructionsArray[0] && (

              <p>
                {instructionsArray.map((step, index) => (
                  <li key={index}>
                    {step.step_name}: {step.instruction}
                  </li>
                ))}
              </p>
          )}
          {instructionType === 'prep' ? (
            <h3>
              Prep:
            </h3>
          ) : (
            <h3>
              {stepName}:
            </h3>
          )}
          <form className="steps-form" >
            <input
              id="instruction"
              type="text"
              className="input-field"
              placeholder="instruction"
              value={instructionContainer}
              onChange={handleInstructionInput}
              />
            {instructionType === 'prep' ? (
              <button type="submit" className="submit-btn" onClick={handleAddStep}>
                ADD PREP
              </button>
            ) : (
              <button type="submit" className="submit-btn" onClick={handleAddStep}>
                ADD STEP
              </button>
            )}
            <button type="submit" className="submit-btn">
              SUBMIT RECIPE
            </button>
          </form>
        </div>
      )

};
//   //  set initial states
//   const [stepName, setStepName] = useState('');
//   const [instruction, setInstruction] = useState('');
//   const [instructionContainer, setInstructionContainer] = useState('');
//   const [instructionType, setInstructionType] = useState('prep');
//   const [instructionsArray, setInstructionsArray] = useState([]);
//   const [stepNumber, setStepNumber] = useState(1);
//   const [stepCounter, setStepCounter] = useState(1);
//   const [stepObject, setStepObject] = useState({
//     recipe_id: recipeId,
//     step_name: '',
//     step_number: 0,
//     instruction: ''
//   });

//   // useEffect(() => {
//   //   setInstruction(instructionContainer);
//   // }, [instructionContainer]);

//   const handleInstructionInput = (e) => {
//     const inputInstruction = e.target.value;
//     setStepObject({
//       ...stepObject, 
//       instruction:inputInstruction
//   });
//     console.log(stepObject);

//     // // set step name to prep or step number with if statement
//     // if (instructionType === 'prep') {

//     //   // create new step object based on new information
//     //   const newStepObject = {
//     //     ...stepObject, 
//     //     step_number: stepNumber,
//     //     step_name: 'Prep',
//     //     instruction: instruction
//     //   }

//     //   // update step object
//     //   setStepObject(newStepObject);
//     //   console.log(stepObject);


//     // } else {
      
//     //   // format step name
//     //   const formattedName = `Step ${stepCounter}`;
//     //   setStepName(formattedName);

//     //   // create new step object based on new information
//     //   const newStepObject = {
//     //     ...stepObject, 
//     //     step_number: stepNumber,
//     //     step_name: stepName,
//     //     instruction: instruction
//     //   };

//     //   // update step object
//     //   setStepObject(newStepObject);
      
//     //   console.log(stepObject, instructionsArray);

//     // };
//   };

//   console.log(instructionType)
//   const handleAddStep = (event) => {
//     event.preventDefault();
//     console.log(instruction);
//     const newStepObject = {
//       ...stepObject, 
//       instruction: instruction
//     }
    
//     if (instructionType === 'prep') {

//       // create new step object based on new information
//       const newStepObject = {
//         ...stepObject, 
//         step_number: stepNumber,
//         step_name: 'Prep',
//       }

//       // update step object
//       setStepObject(newStepObject);

//       // increment step number
//       setStepNumber(prevStepNumber => prevStepNumber + 1);

//       // switch to steps
//       setInstructionType('step');

//       setInstructionsArray(prevInstructionsArray => [...prevInstructionsArray, stepObject]);
//       console.log(stepObject, instructionsArray);

//       addStep(stepObject);


//     } else {

//       // format step name
//       const formattedName = `Step ${stepCounter}`;
//       setStepName(formattedName);

//       // create new step object based on new information
//       const newStepObject = {
//         ...stepObject, 
//         step_number: stepNumber,
//         step_name: stepName,
//       };

//       // update step object
//       setStepObject(newStepObject);
      
//       // increment step number and counter
//       setStepCounter(prevStepCounter => prevStepCounter + 1);
//       setStepNumber(prevStepNumber => prevStepNumber + 1);

//       setInstructionsArray(prevInstructionsArray => [...prevInstructionsArray, stepObject]);
//       console.log(stepObject, instructionsArray);

//       addStep(stepObject);

      
//     };

//   };

//   return (
//     <div>
//       <ToastContainer />
//       {instructionsArray && instructionsArray[0] && (
//         <div>
//           <h2>Submitted Steps:</h2>
//           <div></div>
//           <p>
//             {instructionsArray.map((step, index) => (
//               <li key={index}>
//                 {step.step_name}: {step.instruction}
//               </li>
//             ))}
//           </p>
//         </div>
//       )}
//       {instructionType === 'prep' ? (
//         <h3>
//           Prep:
//         </h3>
//       ) : (
//         <h3>
//           {stepName}:
//         </h3>
//       )}
//       <form className="steps-form" >
//         <input
//           id="instruction"
//           type="text"
//           className="input-field"
//           placeholder="instruction"
//           value={instruction}
//           onChange={handleInstructionInput}
//           />
//         {instructionType === 'prep' ? (
//           <button type="submit" className="submit-btn" onClick={handleAddStep}>
//             ADD PREP
//           </button>
//         ) : (
//           <button type="submit" className="submit-btn" onClick={handleAddStep}>
//             ADD STEP
//           </button>
//         )}
//         <button type="submit" className="submit-btn">
//           SUBMIT RECIPE
//         </button>
//       </form>
//     </div>
//   )
// };