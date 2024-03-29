// imports
import { getAllRecipes } from "../helpers/recipeHelpers";
import { useState, useEffect } from "react";

export default function useAppData() {

  // states/props
  const [allRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    getAllRecipes()
    .then((data) => {
      // console.log(data);
      setAllRecipes(data['data'])
    })

  }, []);

  return { allRecipes };

};
