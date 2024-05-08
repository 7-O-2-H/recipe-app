// imports
// React
import { useState } from "react";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Hooks
import useAppData from "../../hooks/useAppData";
import useVerification from "../../hooks/useVerification";

// Helpers
import { addRecipe } from "../../helpers/recipeHelpers";

export default function RecipeForm (props) {

  // set prop data
  const { onNextStep,  } = props;

  // set states
  const [recipe, setRecipe] = useState('');
  const [time, setTime] = useState(undefined);
  const [serves, setServes] = useState(undefined);
  const [description, setDescription] = useState('');

  // call hooks
  const { allRecipes } = useAppData();
  const userId = parseInt(useVerification());

  // loading state
  if ( !allRecipes || !userId ) {
    return <div>Loading...</div>
  };

  const handleRecipeSubmit = (event) => {
    event.preventDefault();

    // check if recipe already exists
    const existingRecipe = allRecipes.find(rec => rec.recipe.toLowerCase() === (recipe.toLowerCase()));
    
    // prevent add recipe if already in db
    if (existingRecipe) {
      toast.error("There is already a recipe with this name in our database.");
      return;
    };

    if (!recipe || !time || !serves || !description) {
      toast.error("You must enter all values before submitting.");
      return;
    };

    // set rec data
    const recipeData = {
      user_id: userId,
      recipe: recipe,
      time: time,
      serves: serves,
      description: description
    };

    console.log(recipeData.recipe);
    // add recipe
    // addRecipe(recipeData);

    // update step to move to ingredients form
    onNextStep(recipe);

  };

  return (
    <div>
      <ToastContainer />
      <form className="recipe-form" onSubmit={handleRecipeSubmit}>
        <input
          id="recipe"
          type="text"
          className="input-field"
          placeholder="recipe name"
          value={recipe}
          onChange={(event) => setRecipe(event.target.value)}
        />
        <input
          id="time"
          type="number"
          className="input-field"
          placeholder="time to cook in minutes"
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />
        <input
          id="serves"
          type="number"
          className="input-field"
          placeholder="how many servings is this dish"
          value={serves}
          onChange={(event) => setServes(event.target.value)}
        />
        <input
          id="description"
          type="text"
          className="input-field"
          placeholder="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <button type="submit" className="submit-btn">
          ADD RECIPE DETAILS
        </button>
      </form>
    </div>
  );
};