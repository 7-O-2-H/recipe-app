// imports
import { useState } from "react";

export default function TagsDropdown({ times, selectedOption, onSelect }) {

  // template
  return (
    <div className="times-dropdown">
      <select onChange={(e) => onSelect(e.target.value)} value={selectedOption}>
        <option value="">TIME</option>
        {times.map((time) => (
          <option key={time.id} value={time.time}>
            {time.timeOption}
          </option>
        ))}
      </select>   
    </div>
  );
}