// imports
// import "../styles/FullRecipe.css"
import Spacer from '../Spacer'
import RecipeForm from './RecipeForm'

export default function EditForm() {

  // template
  return (
    <div className="add-form">
      <div className="edit-section">
        <h4 id="recipe">RECIPE</h4>
        <RecipeForm />
      </div>
      <div className="edit-section">
        <h4 id="edit-category">INGREDIENTS</h4>
      </div>
      <div className="edit-section">
        <h4 id="edit-category">INSTRUCTIONS</h4>
      </div>
    </div>
  )
};