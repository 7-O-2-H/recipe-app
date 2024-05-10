// imports
// hooks/react
import { useState, useEffect } from 'react';
import { useRecipe } from '../hooks/useRecipe';
import useAppData from '../hooks/useAppData';
// helpers
import { deleteRecipe } from '../helpers/recipeHelpers';
import { addIngredient } from '../helpers/ingredientsHelpers';
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
  const [ingredientsData, setIngredientsData] = useState([]);
  const [stepData, setStepData] = useState([]);
  const [tagData, setTagData] = useState([]);

  // use useAppData to get all measurements to collect ingredients for current recipe
  const { allMeasurements } = useAppData();
  
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

  const handleAddIngredient = async (ingredientData) => {
    // add ingredient
    await addIngredient(ingredientData);

    // get measurement name from all measurements
    const measurementName = allMeasurements[(ingredientData.measurement_id)].measurement;
    
    // format ingredient
    const formattedIngredient = {
     ingredient: ingredientData.ingredient,
     quantity: ingredientData.quantity,
     measurement: measurementName 
    }

    // set ingredients data with formatted ingredient
    setIngredientsData(prevData => [...prevData, formattedIngredient]);
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
      <div>
        <h2>Submitted Ingredients</h2>
        <p>
          {ingredientsData && ingredientsData[0] && (
            ingredientsData.map((ingredient, index) => (
              <li key={index}>
                {ingredient.quanity} {ingredient.measurment} {ingredient.ingredient} 
              </li>
            ))
          )}
        </p>
      </div>
      {currentStep === 2 && (
        <div>
          <h3>Ingredients</h3>
          <IngredientsForm 
            onNextStep={handleNextStep}
            onPreviousStep={handlePreviousStep}  
            onCancel={handleCancel}
            addIngredient={handleAddIngredient}
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
