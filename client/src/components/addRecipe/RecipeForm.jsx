// imports
import { useState } from "react";

export default function RecipeForm () {

  const [recipe, setRecipe] = useState('');
  const [time, setTime] = useState(undefined);
  const [serves, setServes] = useState(undefined);
  const [description, setDescription] = useState('');

  return (
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
  );
};