// imports
import { getAllRecipes } from "../helpers/recipeHelpers";
import { getAllTags } from "../helpers/tagsHelpers";
import { getAllIngredients } from "../helpers/ingredientsHelpers";
import { getAllMeasurements } from "../helpers/measurementsHelpers";
import { useState, useEffect } from "react";

export function useAppData() {

  // states
  const [allRecipes, setAllRecipes] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [allIngredients, setAllIngredients] = useState([]);
  const [allMeasurements, setAllMeasurements] = useState([]);

  useEffect(() => {

    // get all ingredients, recipes, tagsA
    Promise.all([
      getAllRecipes(),
      getAllTags(),
      getAllIngredients(),
      getAllMeasurements(),
    ])
    .then((all) => {
      setAllRecipes(all[0]['data']);
      setAllTags(all[1]['data']);
      setAllIngredients(all[2]['data']);
      setAllMeasurements(all[3]['data']);
    })

  }, []);

  return { allRecipes, allTags, allIngredients, allMeasurements };
  
};

export function useAppDataWithRefresh(refreshData) {

  // states
  const [allRecipes, setAllRecipes] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [allIngredients, setAllIngredients] = useState([]);
  const [allMeasurements, setAllMeasurements] = useState([]);

  useEffect(() => {

    // get all ingredients, recipes, tagsA
    Promise.all([
      getAllRecipes(),
      getAllTags(),
      getAllIngredients(),
      getAllMeasurements(),
    ])
    .then((all) => {
      setAllRecipes(all[0]['data']);
      setAllTags(all[1]['data']);
      setAllIngredients(all[2]['data']);
      setAllMeasurements(all[3]['data']);
    })

  }, [refreshData]);

  return { allRecipes, allTags, allIngredients, allMeasurements };
  
};
