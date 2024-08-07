// imports
// styles
import "../styles/BrowseOptions.css"
// react
import { useState } from "react";
// components
import TagsList from "./TagsList";
import IngredientsList from "./IngredientsList";
import TimesList from "./TimesList";
import Search from "./Search";
import Spacer from "./Spacer";

export default function BrowseOptions(props) {

  const { handleSelectIngredient, handleSelectTag, handleSelectTime, handleSearch } = props;

  // toggle vis of borwse optioins
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className="browse-options">
      {!visible && 
      <div>
        {/* <Spacer /> */}
        <button className="filter-button" onClick={toggleVisibility}> FILTER RESULTS</button>
      </div>  
      }
      {visible && <div id="search-tools"> 
        <div id="search-bar">
          <Search handleSearch={handleSearch}/>
        </div>
        <Spacer />
        <div id="filter-tools">
          <IngredientsList handleSelectIngredient={handleSelectIngredient} />
          <TagsList handleSelectTag={handleSelectTag} />
          <TimesList handleSelectTime={handleSelectTime} />
        </div>
        <button className="filter-button" onClick={toggleVisibility}>CLOSE FILTER OPTIONS</button>
      </div>}
    </div>
  );
}