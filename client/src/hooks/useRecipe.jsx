// imports
import { getRecipeByRecipeId, getIngredientsByRecipeId, getStepsByRecipeId } from "../helpers/recipeHelpers";
import { useEffect, useState } from 'react';

export function useRecipe(recipeId) {
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [currentIngredients, setCurrentIngredients] = useState(null);
  const [currentSteps, setCurrentSteps] = useState(null);
  
  useEffect(() => {

    if (recipeId) {
      Promise.all([
        getRecipeByRecipeId(recipeId),
        getIngredientsByRecipeId(recipeId),
        getStepsByRecipeId(recipeId),
      ])
      .then((all) => {
        setCurrentRecipe(all[0]['data'][0]);
        setCurrentIngredients(all[1]['data']);
        setCurrentSteps(all[2]['data']);
      })
    };
    
  }, [recipeId]);

  return { currentRecipe, currentIngredients, currentSteps };

}
