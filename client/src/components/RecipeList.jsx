// imports
import useAppData from "../hooks/useAppData";
import { useEffect, useState } from "react";
import "../styles/RecipeList.css"
import RecipeListItem from "./RecipeListItem";
import Link from "next/link";

export default function RecipeList() {

  const { allRecipes } = useAppData();
  console.log(allRecipes);

  const recipesArray = allRecipes.map(recipe => (  
      <RecipeListItem
        key={recipe.id}
        submitted={recipe.user_name}
        name={recipe.recipe}
        time={recipe.time}
        unit={recipe.measurement}
        servingSize={recipe.serves}
        description={recipe.description}
      />
  ));

  // template
  return (
    <div className="recipe-list">
      {recipesArray}
    </div>
  );
  
}