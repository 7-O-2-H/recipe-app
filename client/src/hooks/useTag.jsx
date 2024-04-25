// imports
import { useEffect, useState } from 'react';
import { getRecipesByTagId } from '../helpers/tagsHelpers';

export function useTag(tagId) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {

    if (tagId) {
      getRecipesByTagId(tagId)
      .then((data) => {
        setRecipes(data['data']);
      });
    };
    
  }, [tagId]);

  return { recipes };

};
