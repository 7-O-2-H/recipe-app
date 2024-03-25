// imports
import useAppData from "../hooks/useAppData";
import { useEffect, useState } from "react";
import "../styles/RecipeList.css"
import RecipeListItem from "./RecipeListItem";
import { getAllRecipes } from "../helpers/recipeHelpers";

export default function RecipeList() {

  const [allRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    getAllRecipes()
    .then((data) => {
      setAllRecipes(data['data']);
    })
  }, []);

  // const allRecipes = useAppData();
  // console.log(allRecipes[0].description);

  // const recipesArray = allRecipes.map(recipe => {
  //   <div>
  //     <RecipeListItem
  //       key={recipe.id}
  //       submitted={recipe.user_id}
  //       name={recipe.name}
  //       time={recipe.time}
  //       unit={recipe.measurement_id}
  //       servingSize={recipe.serves}
  //       description={recipe.description}
  //     />
  //   </div>
  // });

  // template
  const recipe = allRecipes[3];
  console.log(recipe);
  return (
    <div className="recipe-list">
      <RecipeListItem key={recipe.id} name={recipe.recipe} description={recipe.description} />
    </div>
  );
  
}
{/* {recipesArray} */}