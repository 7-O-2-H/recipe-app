// imports
// components
import TagsList from "./TagsList";
import IngredientsList from "./IngredientsList";
import TimesList from "./TimesList";
import Search from "./Search";

// styles
import "../styles/BrowseOptions.css"

// hooks
import { useState } from "react";

export default function BrowseOptions() {

  // toggle vis of borwse optioins
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className="browse-options">
      {!visible && <button onClick={toggleVisibility}> SORT BY</button>}
      {visible && <div id="search-tools"> 
        <IngredientsList />
        <TagsList />
        <TimesList />
        <Search />
      </div>}
    </div>
  );
}