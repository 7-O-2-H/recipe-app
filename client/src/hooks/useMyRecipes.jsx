// imports
import { useEffect, useState } from 'react';
import { getRecipesByUserId } from '../helpers/recipeHelpers';

export function useMyRecipes(userId) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {

    if (userId) {
      getRecipesByUserId(userId)
      .then((data) => {
        setRecipes(data['data']);
      });
    };
    
  }, [userId]);

  return recipes;

};
