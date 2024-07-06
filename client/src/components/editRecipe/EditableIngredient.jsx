import { useState } from "react";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDataWithRefresh } from "../../hooks/useAppData";
import EditIngredientForm from "./EditIngredientForm";
import { useEditData } from "../../hooks/useEditData";

export default function EditableIngredient({ recipeId, index, ingredient, ingredientArray }) {
  
  // parse JSON ingredients and extract data for current ingredient
  const parsedIngredientArray = JSON.parse(ingredientArray)
  const ingredientData = parsedIngredientArray[index];
  
  // const { fullIngredientData } = useEditData(recipeId);

  // console.log(fullIngredientData);
  // console.log('ingData: ', ingredientData);

 
  // const recipeIngredientId = fullIngredientData.find((ingredient) => ingredient.ingredient === ingredientData.ingredient);
  
  // console.log(recipeIngredientId);

  // set edit toggle and ingredient data states
  const [editable, setEditable] = useState(false);
  const [refreshData, setRefreshData] = useState(false);
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

  //template
  return (
    <div className="ingredients-container" onClick={editIngredient}>
      {!editable ? (
        <div className="ingredient">
          - &nbsp;
          {ingredient}
          <br></br>
          <br></br>
          {/* <button className="edit-button" onClick={editIngredient}>EDIT</button> */}
        </div>
      ) : (
        <div>
          <EditIngredientForm />
        </div>
      )}
    </div>
  );
};
