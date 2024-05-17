// imports
// react
import { useState } from "react";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// hooks
import { useAppDataWithRefresh } from "../../hooks/useAppData";
//component
import QuantityDropdown from "./QuantityDropDown";

export default function IngredientsForm (props) {

  // retrieve prop functions
  const { onCancel, recipeId, addIngredient, onNextStep } = props;

  // initialize states
  const [ingredient, setIngredient] = useState('');
  const [quantity, setQuantity] = useState(undefined);
  const [quantityFormat, setQuantityFormat] = useState('decimal');
  const [quantityWholeNumber, setQuantityWholeNumber] = useState(undefined);
  const [quantityFraction, setQuantityFraction] = useState(undefined);
  const [selectedOption, setSelectedOption] = useState(undefined);
  const [measurement, setMeasurement] = useState(undefined);
  const [ingredientsQuery, setIngredientsQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [ingredientId, setIngredientId] = useState(null);
  const [refreshData, setRefreshData] = useState(false);
  const [ingredientsArray, setIngredientsArray] = useState([]);
  

  // retreive all ingredients and measurements
  const { allMeasurements, allIngredients } = useAppDataWithRefresh(refreshData);

  // remove hours and minutes from measurements and sort the array
  const foodMeasurements = allMeasurements.slice(2);
  const sortedMeasurements = foodMeasurements.sort((a, b) => {
    const measurementA = a.measurement.toLowerCase();
    const measurementB = b.measurement.toLowerCase();
    if (measurementA < measurementB) {
      return -1; 
    }
    if (measurementA > measurementB) {
      return 1;
    }
    return 0;
  });


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
    setIngredientId(selectedIngredient.id);
    setSuggestions([]);
  };

  // handle quantity formats and dropdown selection
  const updateQuantityFormat = (event) => {
    if (quantityFormat === "decimal") {
      setQuantityFormat('fraction');
      return;
    } else {
      setQuantityFormat('decimal');
      return;
    };
  };
  
  const handleQuantitySelect = (selectedValue) => {
    console.log(selectedValue, quantityWholeNumber);
    setSelectedOption(selectedValue);
    setQuantityFraction(parseFloat(selectedValue));
    const totalFraction = quantityWholeNumber + quantityFraction;
    setQuantity(totalFraction);
    return;
  };

  const handleAddIngredient = async (event) => {
    event.preventDefault();

    console.log(measurement, quantityWholeNumber, quantityFraction, ingredientsQuery);
    // if (quantityWholeNumber) {
      
      // }
      
      // setQuantityWholeNumber((parseInt(quantityWholeNumber)) || undefined);
      // setQuantityFraction((parseFloat(quantityFraction)) || undefined);
      
      console.log(typeof quantityFraction, typeof quantityWholeNumber, ingredientsQuery);


    // variable to ensure all variables are defined before enabling  submission
    let canSubmit = true;

    // update quantity to decimal if quantity was input as fraction
    // if (quantityFormat === 'fraction') {
      
    //   setQuantity(quantityWholeNumber + quantityFraction);
    // };

    // if quantity state is not yet set return without adding ingredient
    if (quantity === undefined) {
      canSubmit = false;
    };

    console.log(quantity);

    if (!measurement || !quantity || !ingredientsQuery) {
      toast.error("You must enter all values before submitting.");
      canSubmit = false;
      return;
    };

    if (canSubmit) {

      // check if ingredient is already in db
      const existingIngredient = allIngredients.find(ingredient => ingredient.ingredient.toLowerCase() === ingredientsQuery.toLowerCase());
      
      if (existingIngredient) {
        
        // set ingredient data for existing ingredient case
        const ingredientData = {
          existingIngredient: true,
          recipe_id: recipeId,
          ingredient: ingredientsQuery,
          ingredient_id: ingredientId,
          quantity: quantity,
          measurement_id: measurement
        };
        
        // add ingredient
        await addIngredient(ingredientData);
        
        // clear inputs
        setIngredientsQuery('');
        setQuantity(undefined);
        setMeasurement(undefined);
        setSuggestions([]);
        setQuantityFraction(undefined);
        setQuantityWholeNumber(undefined);

        // update refreshData to force retreival of updated dd info from useAppData
        setRefreshData(!refreshData);

      } else {
        
        // set ingredient data where ingredient is new
        const ingredientData = {
          existingIngredient: false,
          recipe_id: recipeId,
          ingredient: ingredientsQuery,
          quantity: quantity,
          measurement_id: measurement
        };
        
        await addIngredient(ingredientData);

        // clear inputs
        setIngredientsQuery('');
        setQuantity(undefined);
        setMeasurement(undefined);
        setSuggestions([]);
        setQuantityFraction(undefined);
        setQuantityWholeNumber(undefined);
        setSelectedOption(undefined);
        // update refreshData to force retreival of updated dd info from useAppData
        setRefreshData(!refreshData);
      };
    };      
  };
  

  const handleCancel = (event) => {
    event.preventDefault();
    onCancel();
    return;
  };

  return (
    <div>
      <ToastContainer />
      <form className="ingredient-form" >
        <input
          id="ingredient"
          type="text"
          className="input-field"
          placeholder="ingredient"
          value={ingredientsQuery}
          onChange={handleInputChange}
        />
        {quantityFormat === 'decimal' ? (
          <div>
            <input
              id="quantity"
              type="number"
              className="input-field"
              placeholder="quantity"
              value={quantity || ''}
              onChange={(event) => setQuantity(event.target.value)}
            />
            <button onClick={updateQuantityFormat}>USE FRACTIONS</button>
          </div>
        ) : (
          <div>
            <input
            id="quantity"
            type="number"
            className="input-field"
            placeholder="quantity"
            value={quantityWholeNumber !== undefined ? quantityWholeNumber.toString() : ''}
            onChange={(event) => setQuantityWholeNumber(parseInt(event.target.value))}
            min="0"
            max="100"
          />
            <QuantityDropdown onSelect={handleQuantitySelect} selectedOption={selectedOption} />
            <button onClick={updateQuantityFormat}>USE DECIMALS</button>
          </div>
        )}
         <ul>
          {suggestions.map(ingredient => (
            <li key={ingredient.id} onClick={() => handleIngredientSuggestion(ingredient.id)}>
              {ingredient.ingredient}
            </li>
          ))}
        </ul>
        <select
          id="measurement"
          value={measurement}
          onChange={(event) => setMeasurement(event.target.value)}
          >
          <option value="">Select Measurement</option>
            {sortedMeasurements.map((measurement) => (
              <option key={measurement.id} value={measurement.id}>
                {measurement.measurement}
            </option>
          ))}
        </select>
        <button type="submit" className="submit-btn" onClick={handleAddIngredient}>
          ADD INGREDIENT
        </button>
        <button onClick={handleNext}>GO TO STEPS</button>
        <button onClick={onNextStep(null)}>CANCEL</button>
      </form>
    </div>
  );
};