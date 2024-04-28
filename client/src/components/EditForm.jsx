// imports
import "../styles/FullRecipe.css"
import { useRouter } from "next/router";

export default function EditForm() {

  const router = useRouter();
  const { recipe, ingredients, steps } = router.query;

  const currentRecipe = JSON.parse(recipe);
  const currentIngredients = JSON.parse(ingredients);
  const currentSteps = JSON.parse(steps);

  console.log("Rec: ", currentRecipe);
  // console.log("Ings: ", currentIngredients);
  // console.log("Steps: ", currentSteps);

  // template
  return (
    <div className="edit-form">
      <div className="edit-section">
        <h4 id="edit-category">TITLE</h4>
        <p className="edit-content">{currentRecipe.recipe}</p>
        <button className="edit-button">EDIT</button>
      </div>
      <div className="edit-section">
        <h4 id="edit-category">INGREDIENTS</h4>
        <p className="edit-content">Ingredients</p>
        <button className="edit-button">EDIT</button>
      </div>
      <div className="edit-section">
        <h4 id="edit-category">INSTRUCTIONS</h4>
        <p className="edit-content">Recipe Name</p>
        <button className="edit-button">EDIT</button>
      </div>
    </div>
  )
};