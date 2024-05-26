import { useState } from "react";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDataWithRefresh } from "../../hooks/useAppData";

export default function EditableIngredient({ index, ingredient, ingredientArray }) {
  
  // parse JSON ingredients and extract data for current ingredient
  const parsedIngredientArray = JSON.parse(ingredientArray)
  const ingredientData = parsedIngredientArray[index];

  console.log(ingredientData, ingredient);
  
  // set edit toggle and ingredient data states
  const [editable, setEditable] = useState(false);
  const [measurement, setMeasurement] = useState(ingredientData.measurement);
  const [ingredientsQuery, setIngredientsQuery] = useState(ingredientData.ingredient);
  const [refreshData, setRefreshData] = useState(false);
  const [ingredientId, setIngredientId] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [updatedIngredient, setUpdatedIngredient] = useState({
    ingredient: ingredientData.ingredient,
    quantity: ingredientData.quantity,
    measurement: ingredientData.measurement
  });
  
  // retrieve measurements and ingredients
  const { allMeasurements, allIngredients } = useAppDataWithRefresh(refreshData);

  // handle edit condition
  const editIngredient = (e) => {
    e.preventDefault();
    setEditable(true);
  };

  // handle input
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

  // handle ingredient suggestions
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

  //template
  return (
    <div className="ingredients-container">
      {!editable ? (
        <div className="ingredient">
          - &nbsp;
          {ingredient}
          <br></br>
          <br></br>
          <button className="edit-button" onClick={editIngredient}>EDIT</button>
        </div>
      ) : (
        <div>
          <ToastContainer />
          <form className="ingredient-form" >
            {/* {quantityFormat === 'decimal' ? (
              <div>
                <input
                  id="quantity"
                  type="number"
                  className="input-field"
                  placeholder="quantity"
                  value={quantity || ''}
                  onChange={(event) => setQuantity(event.target.value)}
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
                  placeholder="quantity"
                  value={quantityWholeNumber !== undefined ? quantityWholeNumber.toString() : ''}
                  onChange={(event) => setQuantityWholeNumber(parseInt(event.target.value))}
                  min="0"
                  max="100"
                />
                <QuantityDropdown onSelect={handleQuantitySelect} selectedOption={selectedOption} />
                <button onClick={updateQuantityFormat}>USE DECIMALS</button>
              </div> */}
            {/* )} */}
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
          {/* <button type="submit" className="submit-btn" onClick={handleAddIngredient}>
            ADD INGREDIENT
          </button>
          <button onClick={handleNext}>GO TO STEPS</button>
          <button onClick={handleCancel}>CANCEL</button> */}
        </form>
      </div>
      )}
    </div>
  );
};
