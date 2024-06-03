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
