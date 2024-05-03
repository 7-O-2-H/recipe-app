// imports
import { useState } from "react";

export default function RecipeForm () {

  // const { ingredients, }
  const [ingredient, setIngredient] = useState('');
  const [quantity, setQuantity] = useState(undefined);
  const [measurement] = useState('');

  return (
    <form className="ingredient-form" >
      <input
        id="ingredient"
        type="text"
        className="input-field"
        placeholder="ingredient"
        value={ingredient}
        onChange={(event) => setIngredient(event.target.value)}
      />
      <input
        id="quantity"
        type="number"
        className="input-field"
        placeholder="quantity"
        value={quantity}
        onChange={(event) => setQuantity(event.target.value)}
      />
      <input
        id="measurement"
        type="number"
        className="input-field"
        placeholder="unit"
        value={measurement}
        onChange={(event) => setMeasurement(event.target.value)}
      />
      <button type="submit" className="submit-btn">
        ADD INGREDIENT
      </button>
    </form>
  );
};