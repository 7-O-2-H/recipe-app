// imports
import { useState } from "react";
import useAppData from "../hooks/useAppData";
import IngredientsDropdown from "../components/IngredientsDropdown";
import { useRouter } from "next/router";

export default function IngredientsList() {

  const router = useRouter();

  // selected option state dec
  const [selectedOption, setSelectedOption] = useState('');

  // retreive all ingredients
  const { allIngredients } = useAppData();

  const handleClear = () => {
    localStorage.setItem('ingredient', '');
    router.push('/browse');
  };

  const handleSelect = (selectedOption) => {
    // console.log('Selected Option:', selectedOption);
    localStorage.setItem('ingredient', selectedOption);
    router.push('/browse');

  };

  return (
    <div>
      <IngredientsDropdown ingredients={allIngredients} selectedOption={selectedOption} onSelect={handleSelect} />
      <button onClick={handleClear}>CLEAR</button>
    </div>
  );
}