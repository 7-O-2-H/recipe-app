// imports
import { useState, useEffect } from "react";
import { getAllRecipes } from "../helpers/recipeHelpers";

export default function useAppData() {

  // states/props
  const [allRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    Promise.getAllRecipes()
    .then((data) => {
      // console.log(data);
      setAllRecipes(data)
    })

  }, []);

  return { allRecipes };

};
