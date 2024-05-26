import { useState } from "react";

export default function EditableIngredient({ key, index, ingredient, ingredientArray }) {
  
  // parse JSON ingredients and extract data for current ingredient
  const parsedIngredientArray = JSON.parse(ingredientArray)
  const ingredientData = parsedIngredientArray[index];

  console.log(ingredientData, ingredient);
  
  // set edit toggle
  const [editable, setEditable] = useState(false);

  // handle edit condition
  const editIngredient = (e) => {
    e.preventDefault();
    setEditable(true);
  };

  //template
  return (
    <div className="ingredients-container">
      <div className="ingredient">
        - &nbsp;
        {ingredient}
        <br></br>
        <br></br>
        <button className="edit-button" onClick={editIngredient}>EDIT</button>
      </div>
    </div>
  );
};
