// imports
import { useEffect, useState } from 'react';
import { getRecipesByUserId } from '../helpers/tagsHelpers';

export function useMyRecipes(tagId) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {

    if (userId) {
      getRecipesByTagId(userId)
      .then((data) => {
        setRecipes(data['data']);
      });
    };
    
  }, [userId]);

  return recipes;

};
