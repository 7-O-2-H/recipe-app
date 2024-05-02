// imports
import { useEffect, useState } from 'react';
import { getRecipeBySortingData } from '../helpers/recipeHelpers';

// function to process values of sorting data array and convert them to expected data types in place of null
function processValues(ingredient, tag, maxTime) {

  const processedIngredient = ingredient !== null ? ingredient : '';
  const processedTag = tag !== null ? tag : '';
  const processedMaxTime = maxTime !== null ? maxTime : 0;

  return [processedIngredient, processedTag, processedMaxTime];

}
export function useSortingData() {
  
  const ingredient = localStorage.getItem('ingredient');
  const tag = localStorage.getItem('tag');
  const maxTime = localStorage.getItem('maxTime')

  const processedData = processValues(ingredient, tag, maxTime);
  
  // useEffect(() => {

    // if (userId) {
    //   getRecipesByUserId(userId)
    //   .then((data) => {
    //     setMyRecipes(data['data']);
    //   });
    // };


    console.log(processedData);
    
  // }, []);

  return;

};
