// imports
// import "../styles/FullRecipe.css"
import { useRouter } from "next/router";
import EditableIngredient from "./EditableIngredient";
import Steps from "../Steps";
import { formatIngredientsData } from "../../helpers/conversionHelpers";

export default function EditForm() {

  const router = useRouter();
  const { recipe, ingredients, steps } = router.query;

  const currentRecipe = JSON.parse(recipe);
  const currentIngredients = JSON.parse(ingredients);
  const currentSteps = JSON.parse(steps);

  const ingredientsArray = formatIngredientsData(currentIngredients);
  // console.log(ingredients, ingredientsArray);

  const ingredientArray = ingredientsArray.map((ingredient, index) => (
    <EditableIngredient
      key={index + 1}
      index={index}
      ingredient={JSON.stringify(ingredient)}
      ingredientArray={ingredients}
    />
  ));

  const stepArray = [];

  for (let i = 0; i < currentSteps.length; i++) {
    stepArray.push(currentSteps[i].instruction)
  }

  const stepsArray = stepArray.map((step, index) => (
    <Steps
      key={index + 1}
      instruction={step}
    />  
  ));

  // template
  return (
    <div className="edit-form">
      <div className="edit-section">
        <h4 id="edit-category">TITLE</h4>
        <div className="edit-content">
          {currentRecipe.recipe}
        </div>
        <button className="edit-button">EDIT</button>
      </div>
      <div className="edit-section">
        <h4 id="edit-category">INGREDIENTS</h4>
        <div className="edit-content">{ingredientArray}</div>
      </div>
      <div className="edit-section">
        <h4 id="edit-category">INSTRUCTIONS</h4>
        <div className="edit-content">{stepsArray}</div>
        <button className="edit-button">EDIT</button>
      </div>
    </div>
  )
};