// imports
// import "../styles/FullRecipe.css"
import { useState } from "react";
import { useRouter } from "next/router";
import EditableIngredient from "./EditableIngredient";
import Steps from "../Steps";
import { formatIngredientsData } from "../../helpers/conversionHelpers";
import EditRecipeDetails from "./EditRecipeDetails";

export default function EditForm(props) {

  const { currentRecipe, currentIngredients, currentSteps, currentTags, setRefreshData } = props;

  console.log(currentSteps);

  if (!currentRecipe || !currentIngredients || !currentSteps) {
    return (
      <div>Loading...</div>
    );
  };
  
  console.log()
  // set states
  const [editRecipe, setEditRecipe] = useState(false);

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

  // // format steps
  // const stepArray = [];

  // for (let i = 0; i < currentSteps.length; i++) {
  //   stepArray.push(currentSteps[i].instruction)
  // }

  const stepsArray = currentSteps.map((step, index) => (
    <Steps
      key={index + 1}
      step_name={step.step_name}
      instruction={step.instruction}
    />  
  ));

  // handlers 
  const handleEditRecipe = (event) => {
    setEditRecipe(prevState => !prevState);
  };

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
      <div className="edit-section">
        <h4 id="edit-category">INSTRUCTIONS</h4>
        <div className="edit-content">{stepsArray}</div>
        <button className="edit-button">EDIT STEPS</button>
      </div>
    </div>
  )
};