// imports
import { useEffect, useState } from 'react';
import { getRecipesBySortingData } from '../helpers/recipeHelpers';


export function useSortingData() {

  //set default readable states for ingredient, tag and time
  const [sortingData, setSortingData] = useState({
    ingredient: '',
    tag: '',
    maxTime: 0
  });

  const [allRecipes, setAllRecipes] = useState([]);
  
  // useEffect activates on change of sorting data and keeps data readable by query in case of null values
  if (typeof window!== 'undefined') {
  useEffect(() => {

      const ingredient = localStorage.getItem('ingredient') || '';
      const tag = localStorage.getItem('tag') || '';
      const maxTime = localStorage.getItem('maxTime') || 0;
      
      setSortingData({
        ingredient: ingredient,
        tag: tag,
        maxTime: maxTime
      });
      
    }, [localStorage.getItem('ingredient'), localStorage.getItem('tag'), localStorage.getItem('maxTime')  ]);
    
  }
  // calls sorting data for recipes based on selected criteria
  useEffect(() => {

      getRecipesBySortingData(sortingData)
      .then((data) => {
        setAllRecipes(data['data']);
      });
        
  }, [sortingData]);

  return { allRecipes }

};
