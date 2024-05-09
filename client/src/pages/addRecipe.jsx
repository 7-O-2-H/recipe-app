// imports
// hooks/react
import { useState, useEffect } from 'react';
import { useRecipe } from '../hooks/useRecipe';
// helpers
import { deleteRecipe } from '../helpers/recipeHelpers';
import useAppData from '../hooks/useAppData';
// components
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import RecipeForm from '../components/addRecipe/RecipeForm'
import IngredientsForm from '../components/addRecipe/IngredientsForm';
import StepsForm from '../components/addRecipe/StepsForm';
// styles
import '../styles/styles.css';

export default function AddRecipe() {
  
  // set initial states
  const [currentStep, setCurrentStep] = useState(1);
  const [recipeId, setRecipeId] = useState(null);
  const [recipe, setRecipe] = useState('');
  const [ingredientData, setIngredientData] = useState([]);
  const [stepData, setStepData] = useState([]);
  const [tagData, setTagData] = useState([]);

  const { currentIngredients } = useRecipe(recipeId);

  useEffect(() => {
    setIngredientData(currentIngredients);
  }, [currentIngredients]);

  console.log(ingredientData);

  // handle change between forms
  const handleNextStep = (data) => {

    // set previously input data states so they can be displayed
    switch (currentStep) {
      case 1:
        setRecipe(data.recipe);
        setRecipeId(data.id);
        break;
      case 2:
        break;
    }    

    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleCancel = async () => {
    setRecipe(null);
    await deleteRecipe(parseInt(recipeId));
    setCurrentStep(1);
  };


  // template
  return (
   <div>
    <NavBar />
    <Spacer />
    <Header title="Add Recipe" />
    <Spacer />
    <div>
      {recipe && (
        <div>
          <p>Recipe: {recipe}</p>
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
            // onAdd={handleAddIngredient}
            recipeId={recipeId}
            step={currentStep}
          />
        </div>
      )}
      {currentStep === 3 && (
        <div>
          <StepsForm />
        </div>
      )}
    </div>
   </div>
  );
}
