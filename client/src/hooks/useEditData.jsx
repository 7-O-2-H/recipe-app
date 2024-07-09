// imports
import { useState, useEffect } from "react";
import { getRecipeIngredientsByRecipeId } from "../helpers/ingredientsHelpers";

export function useEditData(id) {

  // states
  const [fullIngredientData, setFullIngredientData] = useState([]);


  useEffect(() => {

    // get full ing data array
    getRecipeIngredientsByRecipeId(id)
    .then((data) => {
      console.log(data);
      setFullIngredientData(data);
    })


  }, [id]);

  return { fullIngredientData };
  
};
