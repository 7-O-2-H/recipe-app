// imports
import useVerification from "../hooks/useVerification";
import { useMyRecipes } from "../hooks/useMyRecipes";
import "../styles/RecipeList.css"
import RecipeListItem from "./RecipeListItem";
import BrowseOptions from "./BrowseOptions";

export default function MyRecipeList() {

  //set user
  const userId = useVerification();

  // set MyRecipes
  const { myRecipes } = useMyRecipes(userId);
  
  // get my recipes
  
  if (!userId || !myRecipes) {
    return <div>Loading...</div>
  };

  if (!myRecipes.length) {
    return (
      <div>
        <div id="empty-message">
          <h3>There's nothing here right now . . . </h3>
        </div>
        <div>
          <button className="">ADD RECIPE</button>
        </div>
      </div>
    );
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
      <div>
        <BrowseOptions />
      </div>
      <div>
      {recipesArray}
      </div>
      <div>
        <button className="">ADD RECIPE</button>
      </div>
    </div>
  );
  
}