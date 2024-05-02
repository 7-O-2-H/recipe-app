// imports
import { useEffect, useState } from 'react';
import { getRecipeBySortingData } from '../helpers/recipeHelpers';

export function useSortingData() {
  
  // const [ingredient, setIngrediet] = useState('');
  // const [tag, setTag] = useState('');
  // const [time, useState] = useState([]);
  
  // useEffect(() => {

    // if (userId) {
    //   getRecipesByUserId(userId)
    //   .then((data) => {
    //     setMyRecipes(data['data']);
    //   });
    // };

    const ingredient = localStorage.getItem('ingredient');
    const tag = localStorage.getItem('tag');
    const maxTime = localStorage.getItem('maxTime')

    console.log('ing: ', ingredient, 'tag', tag, 'time', maxTime);
    
  // }, []);

  return;

};
