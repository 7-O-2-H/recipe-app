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
import { addRecipe } from "../../helpers/recipeHelpers";

export default function EditRecipeDetails (props) {

  const { id, title, description, serves, time } = props

  console.log(id, description, title, serves, time);
  
  
  // set states
  const [recipe, setRecipe] = useState(title);
  const [newTime, setNewTime] = useState(time);
  const [newServes, setNewServes] = useState(serves);
  const [newDescription, setNewDescription] = useState(description);

  // // call hooks
  // const { allRecipes } = useAppData();
  // const userId = parseInt(useVerification());

  // // loading state
  // if ( !allRecipes || !userId ) {
  //   return <div>Loading...</div>
  // };

  // const handleRecipeSubmit = async (event) => {
  //   event.preventDefault();

  //   // check if recipe already exists
  //   const existingRecipe = allRecipes.find(rec => rec.recipe.toLowerCase() === (recipe.toLowerCase()));
    
  //   // prevent add recipe if already in db
  //   if (existingRecipe) {
  //     toast.error("There is already a recipe with this name in our database.");
  //     return;
  //   };

  //   if (!recipe || !time || !serves || !description) {
  //     toast.error("You must enter all values before submitting.");
  //     return;
  //   };

  //   // set rec data
  //   const recipeData = {
  //     user_id: userId,
  //     recipe: recipe,
  //     time: time,
  //     serves: serves,
  //     description: description
  //   };

  //   // add recipe and set recipe id
  //   const recipeId = await addRecipe(recipeData);
  //   // add recipe id to recipe Data
  //   recipeData.id = recipeId;

  //   // update step to move to ingredients form
  //   onNextStep(recipeData);

  // };

  return (
    <div>
      <ToastContainer />
      <form className="recipe-form" >
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
          value={newTime || ''}
          onChange={(event) => setNewTime(event.target.value)}
        />
        <input
          id="serves"
          type="number"
          className="input-field"
          placeholder="how many servings is this dish"
          value={newServes || ''}
          onChange={(event) => setNewServes(event.target.value)}
        />
        <input
          id="description"
          type="text"
          className="input-field"
          placeholder="description"
          value={newDescription}
          onChange={(event) => setNewDescription(event.target.value)}
        />
        <button type="submit" className="submit-btn">
          ADD RECIPE DETAILS
        </button>
      </form>
    </div>
  );
};