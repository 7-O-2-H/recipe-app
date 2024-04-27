// imports
import { formatIngredientsData } from "../helpers/conversionHelpers";
import { addFavourite } from "../helpers/favouritesHelpers";
import Ingredient from "./Ingredient";
import Steps from "./Steps";
import Spacer from "./Spacer";
import "../styles/FullRecipe.css"
import { useVerification } from "../hooks/useVerification";
import { useFavourites } from "../hooks/useFavourites";



export default function FullRecipe (props) {

  let loggedIn = false;

  // check if localStorage is defined
  if (typeof window!== 'undefined') {
    // get logged in status
    loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
  };

  const userId = useVerification();
  const userFavourites = useFavourites(userId);
  const { recipe, ingredients, steps } = props;

  // const currentFsvourites = 
  const currentRecipe = {
    user_id: userId,
    recipe_id: recipe.id
  };

  console.log('fav: ', userFavourites, 'recipe: ', currentRecipe);
  
  // const isFavourite = favourites.find(favourite => )

  const handleFavourite = () => {
    addFavourite(userId, recipe.id);
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
      <Spacer />
      <div className="favourites-option">
        <button className="favourites-button" onClick={handleFavourite}>Add to Favourites</button>
      </div>
    </div>
  )
  
};