import { useState } from "react";

export default function EditableIngredient(props) {
  
  const { ingredient } = props;

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
