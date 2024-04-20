// imports
import { getRecipeByRecipeId } from "../helpers/recipeHelpers";
import { useEffect, useState } from 'react';

export function useRecipe(recipeId) {
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [currentIngredients, setCurrentIngredients] = useState(null);
  const [currentSteps, setCurrentSteps] = useState(null);
  
  useEffect(() => {

    if (recipeId) {
      Promise.all([
        getRecipeByRecipeId(),
        getIngredientsByRecipeId(),
        getStepsByRecipeId(),
  
      ])
      .then((all) => {
        setCurrentRecipe(all[0]['data']);
        setCurrentIngredients(all[1]['data']);
        setCurrentSteps(all[2]['data']);
      })
    };
    
  }, [recipeId]);

  return { currentRecipe, currentIngredients, currentSteps };

}
