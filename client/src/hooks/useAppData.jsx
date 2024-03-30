// imports
import { getAllRecipes, getIngredientsByRecipeId } from "../helpers/recipeHelpers";
import { useState, useEffect } from "react";

export default function useAppData() {

  // states/props
  const [allRecipes, setAllRecipes] = useState([]);
  const [recipeIngredients, setRecipeIngredients] = useState([]);


  useEffect(() => {
    getAllRecipes()
    .then((data) => {
      // console.log(data);
      setAllRecipes(data['data']);
    })

    getIngredientsByRecipeId(4)
    .then((data) => {
      setRecipeIngredients(data['data']);
    })
    

  }, []);

  return { allRecipes, recipeIngredients };

};
