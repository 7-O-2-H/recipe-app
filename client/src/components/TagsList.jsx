// imports
import { use, useState } from "react";
import useAppData from "../hooks/useAppData";
import TagsDropdown from "../components/TagsDropdown";
import { useSortingData } from "../hooks/useSortingData";

export default function TagsList() {

  // selected option state dec
  const [selectedOption, setSelectedOption] = useState('');

  // retreive all tags
  const { allTags } = useAppData();
  
  const handleSelect = (selectedOption) => {
    // console.log('Selected Option:', selectedOption);
    localStorage.setItem('tag', selectedOption);
    useSortingData();
  };

  return (
    <div>
      <TagsDropdown tags={allTags} selectOption={selectedOption} onSelect={handleSelect} />
    </div>
  );
}