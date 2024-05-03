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
  const [allMeasurements, setAllMeasurements] = useState([]);

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

  }, []);

  return { allRecipes, allTags, allIngredients };
  
};
