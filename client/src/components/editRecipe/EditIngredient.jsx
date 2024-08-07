// imports
// react
import { useState } from "react";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// hooks
import { useAppDataWithRefresh } from "../../hooks/useAppData";
//component
import QuantityDropdown from "../addRecipe/QuantityDropdown";
// helpers
import { deleteIngredient } from "../../helpers/ingredientsHelpers";
import { editIngredient } from "../../helpers/ingredientsHelpers";

export default function EditIngredient (props) {

  // retrieve prop functions
  const { handleCancel, recipeIngredientId, currentIngredient, currentQuantity, initialMeasurement, recipeId, refresh, authorizedUser } = props;
    
  // initialize states
  const [ingredient, setIngredient] = useState(currentIngredient);
  const [quantity, setQuantity] = useState(currentQuantity);
  const [quantityFormat, setQuantityFormat] = useState('decimal');
  const [quantityWholeNumber, setQuantityWholeNumber] = useState(undefined);
  const [quantityFraction, setQuantityFraction] = useState(undefined);
  const [selectedOption, setSelectedOption] = useState(undefined);
  const [measurement, setMeasurement] = useState(initialMeasurement);
  const [ingredientsQuery, setIngredientsQuery] = useState(currentIngredient);
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [ingredientId, setIngredientId] = useState(null);
  const [refreshData, setRefreshData] = useState(false);
  
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
    const totalFraction = quantityWholeNumber + parseFloat(selectedValue);
    setQuantity(totalFraction);
    return;
  };

  const handleUpdateIngredient = async (event) => {
    event.preventDefault();

    if (!authorizedUser) {
      toast.error("You're not authorized to edit this recipe");
      return;
    };

    // variable to ensure all variables are defined before enabling  submission
    let canSubmit = true;

    // if quantity state is not yet set return without adding ingredient
    if (quantity === undefined || quantity === '') {
      canSubmit = false;
    };

    if (!measurement || !quantity || !ingredientsQuery) {
      toast.error("You must enter all values before submitting.");
      canSubmit = false;
      return;
    };

    if (canSubmit) {

      // check if ingredient is already in db
      const existingIngredient = allIngredients.find(ingredient => ingredient.ingredient.toLowerCase() === ingredientsQuery.toLowerCase());
      
      if (existingIngredient) {

        // check if ingredient remains the same: ingredientId will be null and needs to be established
        if (!ingredientId) {

          // set ingredient data with established ingredient id
          const ingredientData = {
            id: recipeIngredientId,
            existingIngredient: true,
            ingredient: ingredientsQuery,
            ingredient_id: existingIngredient.id,
            quantity: quantity,
            measurement_id: measurement
          };

          console.log(ingredientData);

          try {

            await editIngredient(ingredientData);

            // refresh and revert to pre edit state
            refresh();
            handleCancel(event);

          } catch (err) {
            console.error("Error updating ingredient: ", err);
            toast.error("Failed to update ingredient");
          };

        } else {

          // set ingredient data for existing ingredient case
          const ingredientData = {
            id: recipeIngredientId,
            existingIngredient: true,
            ingredient: ingredientsQuery,
            ingredient_id: ingredientId,
            quantity: quantity,
            measurement_id: measurement
          };
                      
          // edit ingredient using recipe ingredient from ingredientData
          try {
            await editIngredient(ingredientData);
            
            // refresh and revert to non-edit state
            refresh();
            handleCancel(event);
            
          } catch (err) {
            console.error("Error updating ingredient: ", err);
            toast.error("Failed to update ingredient");
          };              
        };
        
      } else {
        
        // set ingredient data where ingredient is new
        const ingredientData = {
          id: recipeIngredientId,
          existingIngredient: false,
          ingredient: ingredientsQuery,
          quantity: quantity,
          measurement_id: measurement
        };
        
        await editIngredient(ingredientData);

        // refresh and revert to non-edit state
        refresh();
        handleCancel(event);
      };
    };      
  };

  // handle submit with a check to see if the user has entered some ingredient
  // const handleNext = (e) => {
  //   e.preventDefault();
    
  //   if (ingredientsData && ingredientsData.length > 0) {
  //     onNextStep();
  //   } else {
  //     toast.error('You must enter at least one ingredient for your recipe.')
  //   };
  // };

  // handle delete ingredient
  const handleDelete = async (event) => {
    event.preventDefault();
    
    // find ingredient id from ingredient string
    const ingredientObject = allIngredients.find(ingredient => ingredient.ingredient === currentIngredient);

    // format ingredient id and recipe id
    const ingredientData = {
      ingredient_id: ingredientObject.id,
      recipe_id: recipeId
    };

    await deleteIngredient(ingredientData);
    
    // refresh ingredients and revert to edit form
    refresh();
    handleCancel(event);

  };

  return (
    <div>
      <ToastContainer />
      <form className="ingredient-form" >
        {quantityFormat === 'decimal' ? (
          <div>
            <input
              id="quantity"
              type="number"
              className="input-field"
              placeholder="quantity"
              value={quantity || ''}
              onChange={(event) => setQuantity(parseFloat(event.target.value))}
              min="0"
            />
            <button onClick={updateQuantityFormat}>USE FRACTIONS</button>
          </div>
        ) : (
          <div>
            <input
            id="quantity"
            type="number"
            className="input-field"
            placeholder={"quantity"}
            value={quantityWholeNumber !== undefined ? quantityWholeNumber.toString() : ''}
            onChange={(event) => setQuantityWholeNumber(parseInt(event.target.value))}
            min="0"
            max="100"
          />
            <QuantityDropdown onSelect={handleQuantitySelect} selectedOption={selectedOption} />
            <button onClick={updateQuantityFormat}>USE DECIMALS</button>
          </div>
        )}
        <select
          id="measurement"
          value={measurement || ''}
          onChange={(event) => setMeasurement(event.target.value)}
          >
          <option value=''>Select Measurement</option>
            {sortedMeasurements.map((measurement) => (
              <option key={measurement.id} value={measurement.id}>
                {measurement.measurement}
            </option>
          ))}
        </select>
        <input
          id="ingredient"
          type="text"
          className="input-field"
          placeholder="ingredient"
          value={ingredientsQuery}
          onChange={handleInputChange}
        />
        <ul>
          {suggestions.map(ingredient => (
            <li key={ingredient.id} onClick={() => handleIngredientSuggestion(ingredient.id)}>
              {ingredient.ingredient}
            </li>
          ))}
        </ul>
        <button type="submit" className="submit-btn" onClick={handleUpdateIngredient}>
          UPDATE INGREDIENT
        </button>
        <button type="submit" className="submit-btn" onClick={handleDelete}>DELETE INGREDIENT</button>
        <button onClick={handleCancel}>CANCEL</button>
      </form>
    </div>
  );
};