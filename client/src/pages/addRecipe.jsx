// imports
// hooks/react
import { useState } from 'react';
// helpers
import { deleteRecipe } from '../helpers/recipeHelpers';
import { useRecipe } from '../hooks/useRecipe';
// components
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import RecipeForm from '../components/addRecipe/RecipeForm'
import IngredientsForm from '../components/addRecipe/IngredientsForm';
// styles
import '../styles/styles.css';

export default function AddRecipe() {
  
  // set initial states
  const [currentStep, setCurrentStep] = useState(1);
  const [recipeId, setRecipeId] = useState(null);
  const [recipeData, setRecipeData] = useState([]);

  if (recipeId) {
    const { currentRecipe } = useRecipe(recipeId);
    setRecipeData(currentRecipe);
  };

  // handle change between forms
  const handleNextStep = () => {
    // if (currentStep === 1) {
    //   setRecipeId(recipeId);
    // };

    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleCancel = () => {
    setCurrentStep(1);
    deleteRecipe(recipeId);
  };

  // template
  return (
   <div>
    <NavBar />
    <Spacer />
    <Header title="Add Recipe" />
    <Spacer />
    <div>
      {recipeId && (
        <div>
          <p>Recipe: {recipeData.recipe}</p>
        </div>
      )}
    </div>
    <div>
      {currentStep === 1 && (
        <div>
          <h3>Recipe Details</h3>
          <RecipeForm 
            onNextStep={handleNextStep}
            onCancel={handleCancel}
          />
        </div>
      )}
      {currentStep === 2 && (
        <div>
          <h3>Ingredients</h3>
          <IngredientsForm 
            onNextStep={handleNextStep}
            onPreviousStep={handlePreviousStep}  
            onCancel={handleCancel}
            step={currentStep}
          />
        </div>
      )}
    </div>
   </div>
  );
}
