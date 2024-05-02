// imports
import { useState } from "react";
import useAppData from "../hooks/useAppData";
import IngredientsDropdown from "../components/IngredientsDropdown";
import { useSortingData } from "../hooks/useSortingData";


export default function IngredientsList() {

  // selected option state dec
  const [selectedOption, setSelectedOption] = useState('');

  // retreive all ingredients
  const { allIngredients } = useAppData();

  const handleSelect = (selectedOption) => {
    // console.log('Selected Option:', selectedOption);
    localStorage.setItem('ingredient', selectedOption);
    useSortingData();

  };

  return (
    <div>
      <IngredientsDropdown ingredients={allIngredients} selectedOption={selectedOption} onSelect={handleSelect} />
    </div>
  );
}