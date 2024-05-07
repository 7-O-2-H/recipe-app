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

export default function RecipeForm () {

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

  const handleRecipedSubmit = (event) => {
    event.preventDefault();

    // check if recipe already exists
    const existingRecipe = allRecipes.find(rec => rec.recipe.toLowerCase() === (recipe.toLowerCase()));
    
    // prevent add recipe if already in db
    if (existingRecipe) {
      toast.error("There is already a recipe with this name in our database.");
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

    // add recipe
    addRecipe(recipeData);

  };

  return (
    <div>
      <ToastContainer />
      <form className="recipe-form" onSubmit={handleRecipedSubmit}>
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