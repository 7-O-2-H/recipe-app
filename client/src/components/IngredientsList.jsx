// imports
import useAppData from "../hooks/useAppData";
import IngredientsDropdown from "../components/IngredientsDropdown";
import { all } from "axios";

export default function IngredientsList() {

  // retreive all ingredients
  const { allIngredients } = useAppData();

  const handleSelect = (selectedOption) => {
    console.log('Selected Option:', selectedOption);
  };

  console.log(allIngredients);

  return (
    <div>
      <IngredientsDropdown ingredients={allIngredients} onSelect={handleSelect} />
    </div>
  );
}