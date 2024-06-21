// imports
// react
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import EditableIngredient from "./EditableIngredient";
import Steps from "../Steps";
import EditRecipeDetails from "./EditRecipeDetails";
import EditSteps from "./EditSteps";
import TagButton from "../addRecipe/TagButton"; 
// helpers
import { formatIngredientsData } from "../../helpers/conversionHelpers";
import { editExistingSteps } from "../../helpers/stepsHelpers";
import { addStep } from "../../helpers/stepsHelpers";

export default function EditForm(props) {

  const router = useRouter();

  const { currentRecipe, currentIngredients, currentSteps, currentTags, triggerRefresh } = props;

  if (!currentRecipe || !currentIngredients || !currentSteps) {
    return (
      <div>Loading...</div>
    );
  };

  console.log(currentTags);
    
  // set states
  const [editRecipe, setEditRecipe] = useState(false);
  const [editSteps, setEditSteps] = useState(false);
  const [updatedSteps, setUpdatedSteps] = useState([]);
  const [showAddStep, setShowAddStep] = useState(false);
  const [stepNumber, setStepNumber] = useState(null);
  const [stepName, setStepName] = useState('');
  const [instructionContainer, setInstructionContainer] = useState('');
  const [newStep, setNewStep] = useState({
    recipe_id: currentRecipe.id,
    step_number: 0,
    step_name: '',
    instruction: ''
  });
  const [submitAdd, setSubmitAdd] = useState(false);

  // use useEffect to update new step when dependencies change
  useEffect(() => {
    setNewStep({
      ...newStep,
      step_number: stepNumber,
      step_name: stepName,
      instruction: instructionContainer
    })
  }, [stepNumber, stepName, instructionContainer]);

  // handlers
  const handleEditRecipe = (event) => {
    setEditRecipe(prevState => !prevState);
  };

  const handleEditSteps = (event) => {
    setEditSteps(prevState => !prevState);
  };

  const handleUpdateStepsArray = (updatedStep) => {
    setUpdatedSteps(prevUpdatedSteps => [...prevUpdatedSteps, updatedStep]);
  };

  const handleUpdateSteps = (event) => {


    // function omit earlier edits based on repeat steps id
    const trimArrayByStepId = (array) => {
        
      // use reduce to omit earlier edits and return object
      const uniqueSteps = array.reduce((accumulated, current) => {
        accumulated[current.step_id] = current;
        return accumulated;
      }, {});
        
      // convert obj to array and return it
      return Object.values(uniqueSteps);
        
    };
      
    // call trim function to only use latest edits
    const trimmedSteps = trimArrayByStepId(updatedSteps);
      
    editExistingSteps(trimmedSteps);

    if (submitAdd) {
      addStep(newStep);
    };
    
    setEditSteps(prevState => !prevState);


    triggerRefresh();
    
  };

  const handleAddStepToggle = (event) => {
    setShowAddStep(prevState => !prevState);
  };

  const handleAddStep = (event) => {
    event.preventDefault();
    if (!newStep.recipe_id || !newStep.step_number || !newStep.step_name || !newStep.instruction) {

      toast.error("You must enter all information for your new step.");
      return;

    } else {
      
      setSubmitAdd(true);

    };

  };

  const handleSelectTag = (event) => {
    console.log(tag);
  };

  // on change handlers
  const handleStepNumberChange = (e) => {
    setStepNumber(parseInt(e.target.value));
  };

  const handleStepNameChange = (e) => {
    setStepName(e.target.value);
  };
  const handleInstructionChange = (e) => {
    setInstructionContainer(e.target.value);
  };

  // format ingredients array
  const ingredientsArray = formatIngredientsData(currentIngredients);

  const ingredientArray = ingredientsArray.map((ingredient, index) => (
    <EditableIngredient
      key={index + 1}
      recipeId={currentRecipe.id}
      index={index}
      ingredient={JSON.stringify(ingredient)}
      ingredientArray={JSON.stringify(currentIngredients)}
    />
  ));

  const stepsArray = currentSteps.map((step, index) => (
    <Steps
      key={index + 1}
      step_number={step.step_number}
      step_name={step.step_name}
      instruction={step.instruction}
    />  
  ));

  const tagsArray = currentTags.map((tag, index) => {
    <TagButton
      key={index + 1}
      tag_name={tag.tag}
      handleClick={handleSelectTag}
    />
  });

  // useEffect to change value of steoNumber to default next step
  useEffect(() => {
    if (stepsArray && stepsArray.length > 0) {
      setStepNumber(stepsArray.length);
    };
  }, [stepsArray]);

  const editStepsArray = currentSteps.map((step, index) => (
    <EditSteps
      key={index + 1}
      step_id= {step.id}
      step_number={index + 1}
      step_name={step.step_name}
      instruction={step.instruction}
      updateStepsArray={handleUpdateStepsArray}
    />  
  ));

  // template
  return (
    <div className="edit-form">
      <ToastContainer />
      {/* Recipe Details */}
      {!editRecipe ? (
        <div className="edit-section">
          <h4 id="edit-category">TITLE</h4>
        <div className="edit-content">
          {currentRecipe.recipe}
        </div>
          <button className="edit-button" onClick={handleEditRecipe}>EDIT RECIPE DETAILS</button>
        </div>
      ) : (
        <div>
          <EditRecipeDetails
            key={currentRecipe.id}
            id={currentRecipe.id}
            recipeUserId={currentRecipe.user_id}
            title={currentRecipe.recipe}
            description={currentRecipe.description}
            serves={currentRecipe.serves}
            time={currentRecipe.time}
            toggleEditability={handleEditRecipe}
            refresh={triggerRefresh}
          />
        </div>
      )}
      {/* Ingredients */}
      <div className="edit-section">
        <h4 id="edit-category">INGREDIENTS</h4>
        <div className="edit-content">{ingredientArray}</div>
      </div>
      {/* Steps */}
      {!editSteps ? (
        <div className="edit-section">
          <h4 id="edit-category">STEPS</h4>
          <div className="edit-content">{stepsArray}</div>
          <button className="edit-button" onClick={handleEditSteps}>EDIT STEPS</button>
        </div>
      ) : (
        <div>
          {editStepsArray}
          {showAddStep && 
          <form className="edit-steps-form" >
            <input
              label="Step Number"
              id="stepNumber"
              type="number"
              className="input-field"
              placeholder="Step Number"
              value={stepsArray.length + 1}
              onChange={handleStepNumberChange}
            />
            <input
              label="Step Name"
              id="stepName"
              type="text"
              className="input-field"
              placeholder="Step Name"
              value={stepName}
              onChange={handleStepNameChange}
            />
            <input
              label="Instruction"
              id="instruction"
              type="text"
              className="input-field"
              placeholder="Instruction"
              value={instructionContainer}
              onChange={handleInstructionChange}
            />
            <button type="submit" onClick={handleAddStepToggle}>CANCEL ADD STEP</button>
            <button type="submit" onClick={handleAddStep}>ADD STEP</button>
          </form>
          }
          <button type="submit" onClick={handleUpdateSteps}>EDIT STEPS</button>
          {!showAddStep &&
            <button type="submit" onClick={handleAddStepToggle}>+</button>
          }
        </div>
      )}
      {/* Tags */}
        <div className="edit-section">
        <h4 id="edit-category">TAGS</h4>
        <div className="edit-content">
        <p>
        {currentTags && currentTags[0] && (
          currentTags.map((tag, index) => (
            <li key={index} >
              {tag.tag}
            </li>
          ))
        )}
      </p>
        </div>
        {/* <button className="edit-button" onClick={handleEditRecipe}>EDIT RECIPE DETAILS</button> */}
      </div>
    </div>
  )
};