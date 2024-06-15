// imports
// react
import { useState } from "react";
import { useRouter } from "next/router";
// components
import EditableIngredient from "./EditableIngredient";
import Steps from "../Steps";
import EditRecipeDetails from "./EditRecipeDetails";
import EditSteps from "./EditSteps";
// helpers
import { formatIngredientsData } from "../../helpers/conversionHelpers";
import { editExistingSteps } from "../../helpers/stepsHelpers";

export default function EditForm(props) {

  const { currentRecipe, currentIngredients, currentSteps, currentTags, setRefreshData } = props;

  if (!currentRecipe || !currentIngredients || !currentSteps) {
    return (
      <div>Loading...</div>
    );
  };
    
  // set states
  const [editRecipe, setEditRecipe] = useState(false);
  const [editSteps, setEditSteps] = useState(false);
  const [updatedSteps, setUpdatedSteps] = useState([]);
  const [showAddStep, setShowAddStep] = useState(false);

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
    const trimmedSteps = trimArrayByStepId(updatedSteps)

    editExistingSteps(trimmedSteps);
  };

  const handleAddStepToggle = (event) => {
    setShowAddStep(prevState => !prevState);
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
            setRefreshData={setRefreshData}
          />
        </div>
      )}
      <div className="edit-section">
        <h4 id="edit-category">INGREDIENTS</h4>
        <div className="edit-content">{ingredientArray}</div>
      </div>
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
            <div>hello</div>
          }
          <button type="submit" onClick={handleUpdateSteps}>EDIT STEPS</button>
          <button type="submit" onClick={handleAddStepToggle}>ADD STEP</button>
        </div>
      )}
    </div>
  )
};