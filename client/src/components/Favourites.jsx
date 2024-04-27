// imports
import useVerification from "../hooks/useVerification";
import { useFavourites } from "../hooks/useFavourites";
import "../styles/RecipeList.css"
import RecipeListItem from "./RecipeListItem";

export default function Favourites() {

  //set userId with JWT
  const userId = (useVerification());

  // set favourites
  const { favourites } = useFavourites(userId);
  
  // get my recipes
  if (!userId || !favourites) {
    return <div>Loading...</div>
  };

  // console.log(favourites);

  if (!favourites.length) {
    return (
      <div id="empty-message">
        <h3>There's nothing here right now . . . </h3>
      </div>
    );
  };
  
  const recipesArray = favourites.map(recipe => (  
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