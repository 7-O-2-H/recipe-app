// imports
import { useState } from "react";
import useAppData from "../../hooks/useAppData";

export default function IngredientsForm () {

  // initialize states
  const [ingredient, setIngredient] = useState('');
  const [quantity, setQuantity] = useState(undefined);
  const [measurement, setMeasurement] = useState('');
  const [ingredientsQuery, setIngredientsQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  // retreive all ingredients and measurements
  const { allMeasurements, allIngredients } = useAppData();

  // handle ingredients input with query suggestions
  const handleInputChange = (e) => {

    const inputValue = (e.target.value);
    setIngredientsQuery(inputValue);

    // filter ingredients to suggest, limit to 5 at a time
    const filteredIngredients = allIngredients.filter(ingredient => ingredient.ingredient.toLowerCase().includes(inputValue.toLowerCase())).slice(0, 5);
    
    // only show dropdown if user has input ingredients
    setShowDropdown(inputValue.trim() !== '');
    setSuggestions(filteredIngredients);
  };

  
  const handleIngredientSuggestion = (selectedIngredientId) => {
    
    const selectedIngredient = allIngredients.find(ingredient => ingredient.id === selectedIngredientId);
    setIngredientsQuery(selectedIngredient.ingredient);
    setSuggestions([]);
  };
  
  const handleAddIngredient = (event) => {
    event.preventDefault();
    
    const existingIngredient = allIngredients.find(ingredient => ingredient.ingredient.toLowerCase() === ingredientsQuery.toLowerCase());

    if (existingIngredient) {
      submitForm(existingIngredient.id);
    } else {
      addIngredient(ingredientsQuery)
        .then((newIngredientId) => {
          console.log("New ingredient added with ID:", newIngredientId);
          submitForm(newIngredientId);
        })
        .catch((error) => {
          console.error("Error adding new ingredient:", error);
          // Handle error, e.g., display an error message to the user
        });
    }
  }
  

  return (
    <form className="ingredient-form" >
      <input
        id="ingredient"
        type="text"
        className="input-field"
        placeholder="ingredient"
        value={ingredientsQuery}
        onChange={handleInputChange}
      />

      <input
        id="quantity"
        type="number"
        className="input-field"
        placeholder="quantity"
        value={quantity}
        onChange={(event) => setQuantity(event.target.value)}
      />
       <ul>
        {suggestions.map(ingredient => (
          <li key={ingredient.id} onClick={() => handleIngredientSuggestion(ingredient.id)}>
            {ingredient.ingredient}
          </li>
        ))}
      </ul>
      <input
        id="measurement"
        type="number"
        className="input-field"
        placeholder="unit"
        value={measurement}
        onChange={(event) => setMeasurement(event.target.value)}
      />
      <button type="submit" className="submit-btn" onClick={handleAddIngredient}>
        ADD INGREDIENT
      </button>
    </form>
  );
};