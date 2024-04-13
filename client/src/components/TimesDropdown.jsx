// imports
import { useState, useEffect } from "react";

export default function TagsDropdown({ times, selectedOption }) {

  // const [selectedOption, setSelectedOption] = useState('');

  // handle dropdown select
  const handleSelect = (time) => {
    const selectedValue = time.target.value;
    setSelectedOption(selectedValue);
    // onSelect(selectedValue);
  };
  
  // template
  return (
    <div className="times-dropdown">
      <select onChange={(e) => handleSelect(e.target.value)} value={selectedOption}>
        <option value="">TIME</option>
        {times.map((time) => (
          <option key={time.id} value={time.value}>
            {time.time}
          </option>
        ))}
      </select>   
    </div>
  );
}