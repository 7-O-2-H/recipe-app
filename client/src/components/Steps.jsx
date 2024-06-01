export default function Steps(props) {
  
  const { step_number, step_name, instruction } = props;
  //template
  return (
    <div className="steps-container">
      <div className="step">
        <h3>
          {step_number !== undefined ? `${step_number}. ` : ''}{step_name}
        </h3>
        <br></br>
        {instruction}
        <br></br>
        <br></br>
      </div>
    </div>
  );
};
