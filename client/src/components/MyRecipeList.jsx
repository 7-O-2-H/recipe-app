// imports
import useVerification from "../hooks/useVerification";
import { useMyRecipes } from "../hooks/useMyRecipes";
import { useRouter } from "next/router";
import "../styles/RecipeList.css"
import RecipeListItem from "./RecipeListItem";
import BrowseOptions from "./BrowseOptions";
import Spacer from "./Spacer";

export default function MyRecipeList() {

  const router = useRouter();

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

  // button handlers
  const handleAddButton = () => {
    router.push('/addRecipe')
  }

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
    <div>
      <div>
        <BrowseOptions />
      </div>
      <div className="recipe-list">
        <Spacer />
      {recipesArray}
      </div>
      <Spacer />
      <div>
        <button className="add-button" onClick={handleAddButton}>ADD RECIPE</button>
      </div>
    </div>
  );
  
}