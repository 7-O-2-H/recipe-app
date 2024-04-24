// imports
import useAppData from "../hooks/useAppData";
import { useMyRecipes } from "../hooks/useMyRecipes";
import "../styles/RecipeList.css"
import RecipeListItem from "./RecipeListItem";

export default function MyRecipeList() {


  // get my recipes
  const { myRecipes } = useMyRecipes();

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