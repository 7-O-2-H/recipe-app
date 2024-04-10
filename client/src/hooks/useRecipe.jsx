// imports
import { getRecipeByRecipeId } from "../helpers/recipeHelpers";
import { useEffect, useState } from 'react';

export function useRecipe(recipeId) {
  const [currentRecipe, setCurrentRecipe] = useState(null);

  // console.log("recipeId, ", recipeId, "currentRecipe ", currentRecipe);
  useEffect(() => {

    if (recipeId) {
      getRecipeByRecipeId(recipeId)
      .then((data) => {
        console.log(data['data'][0]);
        setCurrentRecipe(data['data'][0]);
      });
    };
    
  }, [recipeId]);

  return currentRecipe;

}
