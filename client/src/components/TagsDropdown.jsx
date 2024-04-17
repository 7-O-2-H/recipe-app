// imports
import { useState, useEffect } from "react";
// import useAppData from "../hooks/useAppData";

export default function TagsDropdown({ tags, selectedOption, onSelect }) {
  
  // template
  return (
    <div className="tags-dropdown">
      <select onChange={(e) => onSelect(e.target.value)} value={selectedOption}>
        <option value="">TAGS</option>
        {tags.map((tag) => (
          <option key={tag.id} value={tag.tag}>
            {tag.tag}
          </option>
        ))}
      </select>   
    </div>
  );
}