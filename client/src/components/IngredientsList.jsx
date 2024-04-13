// imports
import { useState, useEffect } from "react";
import useAppData from "../hooks/useAppData";
import TagsDropdown from "../components/TagsDropdown";

export default function TagsList() {

  // retreive all tags
  const { allIngredients } = useAppData();

  const handleSelect = (selectedOption) => {
    console.log('Selected Option:', selectedOption);
  };

  return (
    <div>
      <IngredientsDropdown tags={allIngredients} onSelect={handleSelect} />
    </div>
  );
}