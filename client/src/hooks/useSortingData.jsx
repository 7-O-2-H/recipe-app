// imports
import { useEffect, useState } from 'react';
import { getRecipesBySortingData } from '../helpers/recipeHelpers';
import { search } from '../helpers/recipeHelpers';


export function useSortingData(selectedIngredient, selectedTag) {

  //set default readable states for ingredient, tag and time
  const [sortingData, setSortingData] = useState({
    ingredient: '',
    tag: '',
    maxTime: 0
  });
  const [query, setQuery] = useState('');

  const [allRecipes, setAllRecipes] = useState([]);
  
  // useEffect activates on change of sorting data and keeps data readable by query in case of null values
  if (typeof window!== 'undefined') {
  useEffect(() => {

      const ingredient = selectedIngredient || '';
      const tag = selectedTag || '';
      const maxTime = localStorage.getItem('maxTime') || 0;
      const queryHolder = localStorage.getItem('query')
      
      setSortingData({
        ingredient: ingredient,
        tag: tag,
        maxTime: maxTime
      });

      setQuery(queryHolder)

      console.log(query);
      
    }, [selectedIngredient, selectedTag, localStorage.getItem('maxTime'), localStorage.getItem('query')]);
    
  }


  // calls sorting data for recipes based on selected criteria
  useEffect(() => {

    if (query) {
      console.log(query);
      search(query);
    };

      getRecipesBySortingData(sortingData)
      .then((data) => {
        setAllRecipes(data['data']);
      });
        
  }, [sortingData]);

  return { allRecipes }

};
