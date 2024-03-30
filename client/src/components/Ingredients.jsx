// imports
import useAppData from "../hooks/useAppData";
import { useEffect, useState } from "react";

export default function Ingredients() {

  const { recipeIngredients } = useAppData();
  console.log(recipeIngredients);
  return (
    <div>Hello</div>
  )
  // const recipesArray = allRecipes.map(recipe => (
  //     <RecipeListItem
  //       key={recipe.id}
  //       submitted={recipe.user_id}
  //       name={recipe.recipe}
  //       time={recipe.time}
  //       unit={recipe.measurement}
  //       servingSize={recipe.serves}
  //       description={recipe.description}
  //     />
  // ));

  // // template
  // // const recipe = allRecipes[3];
  // console.log(allRecipes, recipesArray);
  // return (
  //   <div className="recipe-list">
  //     {recipesArray}
  //   </div>
  // );
  
}