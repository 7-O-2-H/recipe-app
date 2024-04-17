// imports
import { useState, useEffect } from "react";
import useAppData from "../hooks/useAppData";
import TagsDropdown from "../components/TagsDropdown";

export default function TagsList() {

  // selected option state dec
  const [selectedOption, setSelectedOption] = useState('');

  // retreive all tags
  const { allTags } = useAppData();
  
  const handleSelect = (selectedOption) => {
    console.log('Selected Option:', selectedOption);
  };

  return (
    <div>
      <TagsDropdown tags={allTags} selectOption={selectedOption} onSelect={handleSelect} />
    </div>
  );
}