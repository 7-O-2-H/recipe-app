// imports
import { getAllRecipes } from "../helpers/recipeHelpers";
import { getAllTags } from "../helpers/tagsHelpers";
import { getAllIngredients } from "../helpers/ingredientsHelpers";
import { useState, useEffect } from "react";

export default function useAppData() {

  // states
  const [allRecipes, setAllRecipes] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [allIngredients, setAllIngredients] = useState([]);

  useEffect(() => {

    // get all ingredients, recipes, tags
    Promise.all([
      getAllRecipes(),
      getAllTags(),
      getAllIngredients(),

    ])
    .then((all) => {
      setAllRecipes(all[0]['data']);
      setAllTags(all[1]['data']);
      setAllIngredients(all[2]['data']);
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

  return { allRecipes, allTags, allIngredients };
  
};
