// imports
import { useEffect, useState } from 'react';
import { getRecipesBySortingData } from '../helpers/recipeHelpers';

// function to process values of sorting data array and convert them to expected data types in place of null
function processValues(ingredient, tag, maxTime) {

  const processedIngredient = ingredient !== null ? ingredient : '';
  const processedTag = tag !== null ? tag : '';
  const processedMaxTime = maxTime !== null ? maxTime : 0;

  const processedData = {
    ingredient: processedIngredient,
    tag: processedTag,
    maxTime: processedMaxTime
  }

  return processedData;

};

export function useSortingData() {
  
  const ingredient = localStorage.getItem('ingredient');
  const tag = localStorage.getItem('tag');
  const maxTime = localStorage.getItem('maxTime')

  const processedData = processValues(ingredient, tag, maxTime);
  
  useEffect(() => {

   
      getRecipesBySortingData(processedData)
      .then((data) => {
        console.log(data);
      });
    


    // console.log(processedData);
    
  }, [processedData]);

  return;

};
