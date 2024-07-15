// imports
// react
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// components
import EditableIngredient from "./EditableIngredient";
import EditableStep from "./EditableStep";
import EditRecipeDetails from "./EditRecipeDetails";
import EditSteps from "./EditSteps";
import TagButton from "../addRecipe/TagButton";
import EditTags from "./EditTags";
import AddIngredient from "./AddIngredient";
import DeleteConfirmation from "./DeleteConfirmation";
// helpers
import { formatIngredientsData } from "../../helpers/conversionHelpers";
import { editExistingSteps } from "../../helpers/stepsHelpers";
import { addStep } from "../../helpers/stepsHelpers";
import { deleteRecipe } from "../../helpers/recipeHelpers";

export default function EditForm(props) {

  const router = useRouter();

  const { currentRecipe, currentIngredients, currentSteps, currentTags, triggerRefresh, authorizedUser } = props;
    
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
  const [editTags, setEditTags] = useState(false);
  const [addIngredient, setAddIngredient] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  // const submitterId = currentRecipe.user_id;
  // const authorizedUser = useUserAuthorization(submitterId);

  // use useEffect to update new step when dependencies change
  useEffect(() => {
    setNewStep({
      ...newStep,
      step_number: stepNumber,
      step_name: stepName,
      instruction: instructionContainer
    })
  }, [stepNumber, stepName, instructionContainer]);
  
  if (!currentRecipe || !currentIngredients || !currentSteps) {
    return (
      <div>Loading...</div>
    );
  };

  // if (authorizedUser === null) {
  //   return (
  //     <div>Loading...</div>
  //   )
  // };

  // if (!authorizedUser) {
  //   return (
  //     <div>You're not authorized to edit this recipe</div>
  //   )
  // };

  // handlers
  const handleEditRecipe = (event) => {
    setEditRecipe(prevState => !prevState);
  };

  // add ingredient handler
  const handleAddIngredient = (event) => {
    event.preventDefault();
    setAddIngredient(prev => !prev);
    return;
  };

  // steps handlers
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

  // tags handlers 
  const handleSelectTag = (tag) => {
    console.log(tag);
  };

  const handleEditTags = (event) => {
    setEditTags(prevState => !prevState);
    triggerRefresh();
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

  // navigation handlers
  const returnToRecipePage = (event) => {
    router.push(`/recipes/${currentRecipe.id}`);
  };

  const goToConverter = (event) => {

    const converterProps = { 
      recipe: JSON.stringify(currentRecipe),
      ingredients: JSON.stringify(currentIngredients),
    };

    router.push({
      pathname: '/converter', 
      query: converterProps
    });
  };

  const showPopup = (event) => {
    event.preventDefault();
    setShowDeleteConfirmation(prev => !prev);
  };

  const handleDeleteRecipe = (id) => {
    if (!authorizedUser) {
      toast.error('You are not authorized to delete this recipe');
      return;
    }
    deleteRecipe(id);
    router.push('/myRecipes');
    return;
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
      refresh={triggerRefresh}
    />
  ));

  const stepsArray = currentSteps.map((step) => (
    <EditableStep
      key={step.id}
      id={step.id}
      step_number={step.step_number}
      step_name={step.step_name}
      instruction={step.instruction}
    />  
  ));

  const tagsArray = currentTags.map((tag) => {
    return (
      <TagButton
        key={tag.tag_id}
        id={tag.tag_id}
        tag={tag.tag}
        handleClick={handleSelectTag}
      />
    )
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
      {addIngredient ? (
        <div>
          <div>
            <h4>ADD INGREDIENT</h4>
            <AddIngredient
              key={currentRecipe.id}
              onCancelorSubmit={handleAddIngredient}
              recipeId={currentRecipe.id}
              currentIngredients={currentIngredients}
              refresh={triggerRefresh}
            />
          </div>
        </div>
      ) : (
        <div className="edit-section">
          <div>
            <h4 id="edit-category">INGREDIENTS</h4>
            <p>Click ingredient to edit</p>
          </div>
          <div className="edit-content">{ingredientArray}</div>
          <button className="edit-button" onClick={handleAddIngredient}>ADD INGREDIENT</button>
        </div>
      )}
      {/* Steps */}
        <div className="edit-section">
            <div>
              <h4 id="edit-category">STEPS</h4>
              <p>Click step to edit</p>
            </div>
            <div className="edit-content">{stepsArray}</div>
            <button className="edit-button" onClick={handleAddStep}>ADD STEP</button>
          </div>
      {/* {!editSteps ? (
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
      )} */}
      {/* Tags */}
        <div className="edit-section">
        <h4 id="edit-category">TAGS</h4>
        {editTags ? (
          <div>
          </div>
        ) : (
          <div className="edit-content">
            {tagsArray}
          </div>
        )}
        {editTags ? (
          <div>
            <EditTags
              recipe={currentRecipe}
              revertToEditForm={handleEditTags}
              refreshEditForm={triggerRefresh}
            />
            <button className="edit-button" onClick={handleEditTags}>CANCEL</button>
          </div>
        ) : (
          <button className="edit-button" onClick={handleEditTags}>EDIT TAGS</button>
        )}   
      </div>
      <div>
        <button onClick={returnToRecipePage}>BACK TO RECIPE</button>
        <button onClick={goToConverter}>CHANGE SERVING SIZE</button>
        <button onClick={showPopup}>DELETE RECIPE</button> 
      </div>
      {showDeleteConfirmation &&
        <div>
          <DeleteConfirmation
            deleteRecipe={deleteRecipe}
            recipe={currentRecipe}
            cancel={showPopup}
            />
        </div>
      }
    </div>
  )
};