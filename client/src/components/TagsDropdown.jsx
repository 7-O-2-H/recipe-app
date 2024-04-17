// imports
import { useState, useEffect } from "react";
// import useAppData from "../hooks/useAppData";

export default function TagsDropdown({ tags, selectedOption, onSelect }) {

  // // handle dropdown select
  // const handleSelect = (e) => {
  //   const selectedValue = e.target.value;
  //   onSelect(selectedValue);
  //   // console.log(selectedValue);
  // };
  
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