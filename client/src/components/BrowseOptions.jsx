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

export default function BrowseOptions(props) {

  const { handleSelectIngredient, handleSelectTag } = props;

  // toggle vis of borwse optioins
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className="browse-options">
      {!visible && <button onClick={toggleVisibility}> SORT BY</button>}
      {visible && <div id="search-tools"> 
        <div id="search-bar">
          <Search />
        </div>
        <div id="filter-tools">
          <IngredientsList handleSelectIngredient={handleSelectIngredient}/>
          <TagsList handleSelectTag={handleSelectTag}/>
          <TimesList />
        </div>
      </div>}
    </div>
  );
}