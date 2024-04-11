// imports
import { getAllRecipes, getRecipeByRecipeId, getIngredientsByRecipeId, getAllTags } from "../helpers/recipeHelpers";
import { useState, useEffect } from "react";

export default function useAppData() {

  // states/props
  const [allRecipes, setAllRecipes] = useState([]);
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {

    getAllRecipes()
    .then((data) => {
      setAllRecipes(data['data']);
    });

    getIngredientsByRecipeId(1)
    .then((data) => {
      // setRecipeIngredients(data['data']);
    });

    getAllTags()
    .then((data) => {
      console.log(data);
      setAllTags(data['data']);
    });

  }, []);

  return { allRecipes, recipeIngredients, allTags };
  
};
