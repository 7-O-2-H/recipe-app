import { useState } from "react";

export default function EditableIngredient({ key, index, ingredient, ingredientArray }) {
  
  // const { index, ingredient, ingredientData } = props;

  const ingredientData = JSON.parse(ingredientArray)

  // const ingredientsArray = ingredientData;
  console.log(ingredient, ingredientData[index], index);

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
