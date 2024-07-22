// imports
import { useState } from "react";
import { useAppData } from "../hooks/useAppData";
import IngredientsDropdown from "../components/IngredientsDropdown";
import { useRouter } from "next/router";

export default function IngredientsList({ handleSelectIngredient }) {

  const router = useRouter();

  // selected option state dec
  const [selectedOption, setSelectedOption] = useState('');

  // retreive all ingredients
  const { allIngredients } = useAppData();

  const handleClear = () => {
    setSelectedOption('');
    handleSelectIngredient('');
  };

  return (
    <div>
      <IngredientsDropdown 
        ingredients={allIngredients}
        selectedOption={selectedOption}
        onSelect={(value) => {
          setSelectedOption(value);
          handleSelectIngredient(value);
        }} 
        clear={handleClear}
      />
    </div>
  );
};