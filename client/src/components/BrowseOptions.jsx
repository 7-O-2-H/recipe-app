// imports
// components
import TagsList from "./TagsList";
import IngredientsList from "./IngredientsList";
// styles
import "../styles/BrowseOptions.css"


export default function BrowseOptions() {

  return (
    <div className="browse-options">
      <IngredientsList />
      <TagsList />
    </div>
  );
}