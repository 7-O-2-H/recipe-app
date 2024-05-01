// imports
import { useEffect, useState } from 'react';
import { getRecipeBySortingData } from '../helpers/recipeHelpers';

export function useSorintData(sortingData) {
  
  const [myRecipes, setMyRecipes] = useState([]);
  
  useEffect(() => {

    if (userId) {
      getRecipesByUserId(userId)
      .then((data) => {
        setMyRecipes(data['data']);
      });
    };
    
  }, [userId]);

  return { myRecipes };

};
