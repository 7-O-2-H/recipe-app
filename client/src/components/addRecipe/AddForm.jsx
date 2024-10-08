// imports
import "../../styles/FullRecipe.css"
import RecipeForm from './RecipeForm';
import IngredientsForm from './IngredientsForm';

export default function EditForm() {

  // template
  return (
    <div className="add-form">
      <div className="edit-section">
        <h4 id="recipe">RECIPE</h4>
        <RecipeForm />
      </div>
      <div className="edit-section">
        <h4 id="edit-category">ADD INGREDIENTS</h4>
        <IngredientsForm />
      </div>
      <div className="edit-section">
        <h4 id="edit-category">INSTRUCTIONS</h4>
      </div>
    </div>
  )
};