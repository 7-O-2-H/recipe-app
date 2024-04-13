// imports
import { useState, useEffect } from "react";
// import useAppData from "../hooks/useAppData";

export default function IngredientsDropdown({ ingredients, selectedOption }) {

  // const [selectedOption, setSelectedOption] = useState('');

  // handle dropdown select
  const handleSelect = (ingredient) => {
    const selectedValue = ingredient.target.value;
    setSelectedOption(selectedValue);
  };
  
  // template
  return (
    <div className="ingredients-dropdown">
      <select onChange={(e) => handleSelect(e.target.value)} value={selectedOption}>
        <option value="">INGREDIENTS</option>
        {ingredients.map((ingredient) => (
          <option key={ingredient.id} value={ingredient.value}>
            {ingredient.ingredient}
          </option>
        ))}
      </select>   
    </div>
  );
}