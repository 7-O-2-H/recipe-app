import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDataWithRefresh } from "../../hooks/useAppData";
import EditIngredient from "./EditIngredient";
import { useEditData } from "../../hooks/useEditData";

export default function EditableIngredient({ recipeId, index, ingredient, ingredientArray, refresh }) {
  
  // parse JSON ingredients and extract data for current ingredient
  const parsedIngredientArray = JSON.parse(ingredientArray)
  const ingredientData = parsedIngredientArray[index];
  
  // remove unwanted chars
  const cleanIngredient = ingredient.replace(/^"|"$/g, '');

  const { fullIngredientData } = useEditData(recipeId);
  
  // set edit toggle and ingredient data states
  const [editable, setEditable] = useState(false);
  const [refreshData, setRefreshData] = useState(false);
  const [recipeIngredientId, setRecipeIngredientId] = useState(null);
  const [updatedIngredient, setUpdatedIngredient] = useState({
    ingredient: ingredientData.ingredient,
    quantity: ingredientData.quantity,
    measurement: ingredientData.measurement
  });

  // get full ingredient info with rec ing id and update state
  useEffect(() => {
    if (fullIngredientData && fullIngredientData.length > 0) {
      const recipeIngredient = fullIngredientData.find(ing => ing.ingredient === ingredientData.ingredient);
      if (recipeIngredient) {
        setRecipeIngredientId(recipeIngredient.id);
      }
    }
  }, [fullIngredientData]);
  
  // retrieve measurements and ingredients
  const { allMeasurements, allIngredients } = useAppDataWithRefresh(refreshData);

  let currentMeasurementObject = {};
  let initialMeasurement = '';

  // retreive measurement ID as string
  if (allMeasurements && allMeasurements[0]) {

    currentMeasurementObject = allMeasurements.find(measurement => measurement.measurement === ingredientData.measurement);
    initialMeasurement = (currentMeasurementObject.id).toString();
  }

  // handle edit condition
  const editIngredient = (e) => {
    e.preventDefault();
    setEditable(true);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setEditable(false);
  };

  //template
  return (
    <div className="ingredients-container" >
      {!editable ? (
        <div className="ingredient" onClick={editIngredient}>
          - &nbsp;
          {cleanIngredient}
          <br></br>
          <br></br>
          {/* <button className="edit-button" onClick={editIngredient}>EDIT</button> */}
        </div>
      ) : (
        <div>
          <EditIngredient
            handleCancel={handleCancel}
            recipeIngredientId={recipeIngredientId}
            currentIngredient={ingredientData.ingredient}
            currentQuantity={ingredientData.quantity}
            currentMeasurement={ingredientData.measurement}
            initialMeasurement={initialMeasurement}
            recipeId={recipeId}
            refresh={refresh}
          />
        </div>
      )}
    </div>
  );
};
