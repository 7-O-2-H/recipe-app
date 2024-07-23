// imports
import { useEffect, useState } from 'react';
import { getRecipesBySortingData } from '../helpers/recipeHelpers';
import { search } from '../helpers/recipeHelpers';


export function useSortingData(selectedIngredient, selectedTag, selectedTime, query) {

  //set default readable states for ingredient, tag and time
  const [sortingData, setSortingData] = useState({
    ingredient: '',
    tag: '',
    maxTime: 0,
    searchQuery: ''
  });
  
  const [allRecipes, setAllRecipes] = useState([]);
  
  // useEffect activates on change of sorting data and keeps data readable by query in case of null values
  useEffect(() => {

    const ingredient = selectedIngredient || '';
    const tag = selectedTag || '';
    const maxTime = selectedTime || 0;
    const searchQuery = query || '';
    
    setSortingData({
      ingredient: ingredient,
      tag: tag,
      maxTime: maxTime,
      searchQuery: searchQuery
    });
    
  }, [selectedIngredient, selectedTag, selectedTime, query]);
    
  


  // calls sorting data for recipes based on selected criteria
  useEffect(() => {

    console.log(sortingData);

    const fetchRecipes = async () => {
      try {
        console.log("Triggering getRecipesBySortingData with:", sortingData);
        const data = await getRecipesBySortingData(sortingData);
        console.log("Data received:", data);
        setAllRecipes(data['data']);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
      // getRecipesBySortingData(sortingData)
      // .then((data) => {
      //   console.log("triggering get recs");
      //   setAllRecipes(data['data']);
      // })
      // .catch((error) => {
      //   console.error("error fetching rec");
    
      // });
        
  }, [sortingData, query]);

  return { allRecipes }

};
