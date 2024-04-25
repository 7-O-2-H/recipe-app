// imports
import { useEffect, useState } from 'react';
import { getRecipesByUserId } from '../helpers/recipeHelpers';

export function useMyRecipes(userId) {
  
  const [myRecipes, setMyRecipes] = useState([]);
  
  useEffect(() => {

    if (userId) {
      getRecipesByUserId(userId)
      .then((data) => {
        setMyRecipes(data['data']);
      });
    };
    
  }, [userId]);

  console.log(userId);
  return { myRecipes };

};
