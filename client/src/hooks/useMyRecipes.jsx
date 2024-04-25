// imports
import { useEffect, useState } from 'react';
import { getRecipesByUserId } from '../helpers/recipeHelpers';

export function useMyRecipes(user) {
  
  const [myRecipes, setMyRecipes] = useState([]);
  
  useEffect(() => {

    if (user && user.id) {
      const userId = user.id;
      getRecipesByUserId(userId)
      .then((data) => {
        console.log(data);
        setMyRecipes(data['data']);
      });
    };
    
  }, [user]);

  console.log(myRecipes);

  return myRecipes;

};
