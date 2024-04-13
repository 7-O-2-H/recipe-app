// imports
// components
import TagsList from "./TagsList";
import IngredientsList from "./IngredientsList";
import TimesList from "./TimesList";
// styles
import "../styles/BrowseOptions.css"


export default function BrowseOptions() {

  return (
    <div className="browse-options">
      <IngredientsList />
      <TagsList />
      <TimesList />
    </div>
  );
}