// imports
import "../styles/FullRecipe.css"
import { useRouter } from "next/router";
import Ingredient from "./Ingredient";
import Steps from "./Steps";
import { formatIngredientsData } from "../helpers/conversionHelpers";

export default function EditForm() {

  const router = useRouter();
  const { recipe, ingredients, steps } = router.query;

  const currentRecipe = JSON.parse(recipe);
  const currentIngredients = JSON.parse(ingredients);
  const currentSteps = JSON.parse(steps);

  const ingredientsArray = formatIngredientsData(currentIngredients);

  const ingredientArray = ingredientsArray.map((ingredient, index) => (
    <Ingredient
      key={index + 1}
      ingredient={ingredient}
    />
  ));

  const stepArray = [];

  for (let i = 0; i < currentSteps.length; i++) {
    // console.log("current step: ", currentSteps[i].instruction);
    // console.log("current ing: ", ingredientsArray[i]);
    stepArray.push(currentSteps[i].instruction)
  }

  const stepsArray = stepArray.map((step, index) => (
    <Steps
      key={index + 1}
      instruction={step}
    />  
  ));

  // console.log("Rec: ", currentRecipe, ingredientsArray);
  // console.log("Ings: ", currentIngredients);
  console.log("Steps: ", stepArray);

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
        <p className="edit-content">{ingredientArray}</p>
        <button className="edit-button">EDIT</button>
      </div>
      <div className="edit-section">
        <h4 id="edit-category">INSTRUCTIONS</h4>
        <p className="edit-content">{stepsArray}</p>
        <button className="edit-button">EDIT</button>
      </div>
    </div>
  )
};