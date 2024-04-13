// imports
import { useState, useEffect } from "react";
// import useAppData from "../hooks/useAppData";

export default function TagsDropdown({ tags, selectedOption }) {

  // const [selectedOption, setSelectedOption] = useState('');

  // retreive all tags
  // const { allTags } = useAppData();

  // handle dropdown select
  const handleSelect = (tag) => {
    const selectedValue = tag.target.value;
    setSelectedOption(selectedValue);
    // onSelect(selectedValue);
  };
  
  // template
  return (
    <div className="tags-dropdown">
      <select onChange={(e) => handleSelect(e.target.value)} value={selectedOption}>
        <option value="">TAGS</option>
        {tags.map((tag) => (
          <option key={tag.id} value={tag.value}>
            {tag.tag}
          </option>
        ))}
      </select>   
    </div>
  );
}