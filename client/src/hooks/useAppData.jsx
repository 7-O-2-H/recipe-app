// imports
import { getAllRecipes, getAllTags, getIngredientsByRecipeId } from "../helpers/recipeHelpers";
import { useState, useEffect } from "react";

export default function useAppData() {

  // states/props
  const [allRecipes, setAllRecipes] = useState([]);
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {

    Promise.all([
      getAllRecipes(),
      getAllTags(),
    ])
    .then((all) => {
      setAllRecipes(all[0]['data']);
      setAllTags(all[1]['data']);
    })

    // get recipes
    // getAllRecipes()
    // .then((data) => {
    //   console.log(data);
    //   setAllRecipes(data['data']);
    // });

    // get igredients
    // getIngredientsByRecipeId(1)
    // .then((data) => {
    //   setRecipeIngredients(data['data']);
    // });

    // get tags
    // getAllTags()
    // .then((data) => {
    //   setAllTags(data);
    // });

  }, []);

  return { allRecipes, recipeIngredients, allTags };
  return { allRecipes, recipeIngredients, allTags };
  
};
