// imports
import { useState } from "react";
import { useVerification } from "../hooks/useVerification";
import { useMyRecipes } from "../hooks/useMyRecipes";
import "../styles/RecipeList.css"
import RecipeListItem from "./RecipeListItem";

export default function MyRecipeList() {

  // const [myRecipes, setMyRecipes] = useState([]);

  //set user
  const user = (useVerification());
  const { myRecipes } = useMyRecipes(user);
  // setMyRecipes(useMyRecipes(user));
  
  // get my recipes
  
  if (!user || !myRecipes) {
    return <div>Loading...</div>
  };  

    console.log(myRecipes);
  

  const recipesArray = myRecipes.map(recipe => (  
      <RecipeListItem
        key={recipe.id}
        id={recipe.id}
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