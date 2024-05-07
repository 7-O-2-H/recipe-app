// imports
import '../styles/styles.css';
import { useState } from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import RecipeForm from '../components/addRecipe/RecipeForm'
import IngredientsForm from '../components/addRecipe/IngredientsForm';

export default function AddRecipe() {
  
  // set initial states
  const [currentStep, setCurrentStep] = useState(1);

  // handle change between forms
  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
    console.log(currentStep);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // template
  return (
   <div>
    <NavBar />
    <Spacer />
    <Header title="Add Recipe" />
    <Spacer />
    <div>
      {currentStep === 1 && (
        <div>
          <h3>Recipe Details</h3>
          <RecipeForm onNextStep={handleNextStep} />
        </div>
      )}
      {currentStep === 2 && (
        <div>
          <h3>Ingredients</h3>
          <IngredientsForm 
            onNextStep={handleNextStep}
            onPreviousStep={handlePreviousStep}  
          />
        </div>
      )}
    </div>
   </div>
  );
}
