// imports
// React
import { useState } from "react";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Hooks
import { useAppData } from "../../hooks/useAppData";
import useVerification from "../../hooks/useVerification";

// Helpers
import { editRecipeDetails } from "../../helpers/recipeHelpers";

export default function EditRecipeDetails (props) {

  const { id, recipeUserId, title, description, serves, time } = props
  
  
  // set states
  const [recipe, setRecipe] = useState(title);
  const [newTime, setNewTime] = useState(time);
  const [newServes, setNewServes] = useState(serves);
  const [newDescription, setNewDescription] = useState(description);

  // call hooks
  const { allRecipes } = useAppData();
  const userId = parseInt(useVerification());

  // loading state
  if ( !allRecipes ) {
    return <div>Loading...</div>
  };

  const handleEditRecipeDetails = async (event) => {
    event.preventDefault();

    // check if recipe already exists
    const existingRecipe = allRecipes.find(rec => rec.recipe.toLowerCase() === (recipe.toLowerCase()));
    
    // prevent add recipe if already in db and is not the name of the recipe currently being edited
    if (existingRecipe && existingRecipe.id !== id) {
      toast.error("There is already a recipe with this name in our database.");
      return;
    };

    // set rec data
    const recipeData = {
      id: id,
      recipe: recipe,
      time: newTime,
      serves: newServes,
      description: newDescription
    };

    editRecipeDetails(recipeData);

  //   // add recipe and set recipe id
  //   const recipeId = await addRecipe(recipeData);
  //   // add recipe id to recipe Data
  //   recipeData.id = recipeId;

  //   // update step to move to ingredients form
  //   onNextStep(recipeData);

  };

  return (
    <div>
      <ToastContainer />
      <form className="recipe-form" >
        <div>
          <label>Recipe</label>
          <input
            id="recipe"
            type="text"
            className="input-field"
            placeholder="recipe name"
            value={recipe}
            onChange={(event) => setRecipe(event.target.value)}
          />
        </div>
        <div>
          <label>Time to Cook</label>
          <input
            id="time"
            type="number"
            className="input-field"
            placeholder="time to cook in minutes"
            value={newTime || ''}
            onChange={(event) => setNewTime(event.target.value)}
          />
        </div>
        <div>
          <label>Serves</label>
          <input
            id="serves"
            type="number"
            className="input-field"
            placeholder="how many servings is this dish"
            value={newServes || ''}
            onChange={(event) => setNewServes(event.target.value)}
          />
          </div>
        <div>
          <label>Description</label>
          <input
            id="description"
            type="text"
            className="input-field"
            placeholder="description"
            value={newDescription}
            onChange={(event) => setNewDescription(event.target.value)}
          />
        </div>
        <button type="submit" className="submit-btn" onClick={handleEditRecipeDetails}>
          EDIT RECIPE DETAILS
        </button>
      </form>
    </div>
  );
};