// imports
import { useState, useEffect } from "react";
import useAppData from "../hooks/useAppData";

export default function TagsDropdown({ options, onSelect }) {

  const [selectedOption, setSelectedOption] = useState('');

  // retreive all tags
  const { allTags } = useAppData();

  // handle dropdown select
  const handleSelect = (option) => {
    const selectedValue = option.target.value;
    setSelectedOption(selectedValue);
    onSelect(selectedValue);
  };
  
  // template
  return (
    <div className="tags-dropdown">
      <select onChange={(e) => handleSelect(e.target.value)} value={selectedOption}>
        <option value="">Select a tag</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>   
    </div>
  );
}