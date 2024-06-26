// imports
import useVerification from "../hooks/useVerification";
import { useMyRecipes } from "../hooks/useMyRecipes";
import "../styles/RecipeList.css"
import RecipeListItem from "./RecipeListItem";

export default function MyRecipeList(props) {

  //set user
  const { userId } = props;

  // set MyRecipes
  const { myRecipes } = useMyRecipes(userId);
  
  // get my recipes
  
  if (!userId || !myRecipes) {
    return <div>Loading...</div>
  };  

  const recipesArray = myRecipes.map(recipe => (  
      <RecipeListItem
        key={recipe.id}
        id={recipe.id}
        submitted={recipe.user_name}
        user_id={recipe.user_id}
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
      <div>
        <button className="">ADD RECIPE</button>
      </div>
    </div>
  );
  
}