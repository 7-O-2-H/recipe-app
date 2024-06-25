// imports
import { useEffect, useState } from 'react';
import { getRecipesByTagId } from '../helpers/tagsHelpers';
import { getFullTagsInfo } from '../helpers/tagsHelpers';

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

export function useFullTags(recipeId) {

  const [fullTagsInfo, setFullTagsInfo] = useState([]);

  useEffect(() => {

    if (recipeId) {
      getFullTagsInfo(recipeId)
      .then((data) => {
        setFullTagsInfo(data['data']);
      });
    };
    
  }, [recipeId]);

  return { fullTagsInfo };

};