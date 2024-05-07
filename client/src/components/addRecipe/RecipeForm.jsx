// imports
import { useState } from "react";
import useAppData from "../../hooks/useAppData";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RecipeForm () {

  const [recipe, setRecipe] = useState('');
  const [time, setTime] = useState(undefined);
  const [serves, setServes] = useState(undefined);
  const [description, setDescription] = useState('');

  const { allRecipes } = useAppData();

  if ( !allRecipes ) {
    return <div>Loading...</div>
  };

  const handleRecipedSubmit = (event) => {
    event.preventDefault();

    const existingRecipe = allRecipes.find(rec => rec.recipe.toLowerCase() === (recipe.toLowerCase()));
    if (existingRecipe) {
      toast.error("There is already a recipe with this name in our database.");
    };
    return;
  }

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