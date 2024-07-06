import { useState } from "react";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDataWithRefresh } from "../../hooks/useAppData";
import EditIngredient from "./EditIngredient";
import { useEditData } from "../../hooks/useEditData";

export default function EditableIngredient({ recipeId, index, ingredient, ingredientArray }) {
  
  // parse JSON ingredients and extract data for current ingredient
  const parsedIngredientArray = JSON.parse(ingredientArray)
  const ingredientData = parsedIngredientArray[index];

  console.log(ingredientData);
  
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

  const handleCancel = (e) => {
    // e.preventDefault();
    setEditable(false);
    console.log(editable);
  };

  //template
  return (
    <div className="ingredients-container" >
      {!editable ? (
        <div className="ingredient" onClick={editIngredient}>
          - &nbsp;
          {ingredient}
          <br></br>
          <br></br>
          {/* <button className="edit-button" onClick={editIngredient}>EDIT</button> */}
        </div>
      ) : (
        <div>
          <EditIngredient
            handleCancel={handleCancel}
          />
        </div>
      )}
    </div>
  );
};
