// imports
/// hooks
import { useFavourites } from "../hooks/useFavourites";
import { useLoggedInStatus } from "../hooks/useLoggedInStatus";
import { useRouter } from 'next/router';
import { useAllFavourites } from "../hooks/useAllFavourites"
import useVerification from "../hooks/useVerification";
// helpers
import { formatIngredientsData } from "../helpers/conversionHelpers";
import { addFavourite } from "../helpers/favouritesHelpers";
import { isFavourite } from "../helpers/favouritesHelpers";
// components
import Ingredient from "./Ingredient";
import Steps from "./Steps";
import Spacer from "./Spacer";
// styles
import "../styles/FullRecipe.css"

export default function FullRecipe (props) {

  // declare router
  const router = useRouter();

  // set default login status to false
  const loggedIn = useLoggedInStatus();

  // use hooks and props to set user id, favourites, recipe data
  const userId = parseInt(useVerification());
  const { allFavourites } = useAllFavourites();
  const { recipe, ingredients, steps } = props;

  // loading state
  if (loggedIn) {
    if (!userId || !recipe.id || !allFavourites) {
      return <div>Loading...</div>
    }
  }

  // get favourite status with helper
  const favouriteStatus = isFavourite(allFavourites, userId, recipe.id);
 
  // button handlers
  const handleFavourite = () => {
      addFavourite(userId, recipe.id);
      router.push('/favourites')
  };

  const handleUnfavourite = () => {
    // addFavourite(userId, recipe.id);
    router.push('/favourites')
  };

  // format ingredients into proper quantities and strings
  const ingredientsArray = formatIngredientsData(ingredients);

  const ingredientArray = ingredientsArray.map((ingredient, index) => (
    <Ingredient
      key={index + 1}
      ingredient={ingredient}
    />
  ));

  const stepsArray = steps.map((step, index) => (
    <Steps
      key={index + 1}
      step_name={step.step_name}
      instruction={step.instruction}
    />  
  ));

  return (
    <div>
      <h2 className="recipe-description">
        {recipe.description}
      </h2>
      <Spacer />
      <div className="recipe-ingredients" >
        <div className="ingredients" >
          <h2>Ingredients</h2>
            <div className="ingredient-container" >{ingredientArray}</div>
        </div>
        <div className="break"></div>
        <div className="instructions">
          <h2>Instructions</h2>
          <div className="step-container">{stepsArray}</div>
        </div>
      </div>
      {loggedIn ? (
        <>
          {!favouriteStatus ? (
            <>
              <Spacer />
              <div className="favourites-option">
                <button className="favourites-button" onClick={handleFavourite}>Add to Favourites</button>
              </div>
            </>
          ) : (
            <>
              <Spacer />
              <div className="favourites-option">
                <button className="unfavourite-button" onClick={handleUnfavourite}>Remove from Favourites</button>
              </div>
            </>
          )}
        </>
      ) : null}
    </div>
  )
  
};