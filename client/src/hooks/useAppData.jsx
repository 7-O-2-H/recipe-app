// imports
import { getAllRecipes, getIngredientsByRecipeId } from "../helpers/recipeHelpers";
import { getAllTags } from "../helpers/tagsHelpers";
import { useState, useEffect } from "react";

export default function useAppData() {

  // states/props
  const [allRecipes, setAllRecipes] = useState([]);
  // const [allIngredients, setAllIngredients] = useState([]);
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {

    // get all ingredients, recipes, tags
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

  return { allRecipes, allTags };
  
};
