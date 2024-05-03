// imports
// import "../styles/FullRecipe.css"
import Spacer from '../Spacer'

export default function EditForm() {

  // template
  return (
    <div className="add-form">
      <div className="edit-section">
        <h4 id="recipe">RECIPE</h4>
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