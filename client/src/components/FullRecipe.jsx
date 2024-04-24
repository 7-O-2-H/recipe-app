// imports
import { decimalToFraction } from "../helpers/conversionHelpers";
import { formatIngredientsData } from "../helpers/conversionHelpers";
import Ingredient from "./Ingredient";
import Steps from "./Steps";
import Spacer from "./Spacer";
import "../styles/FullRecipe.css"

export default function FullRecipe (props) {

  const { recipe, ingredients, steps } = props;

  // format ingredients into proper quantities and strings
  const ingredientsArray = formatIngredientsData(ingredients);

  const ingredientArray = ingredientsArray.map((ingredient, index) => (
    <Ingredient
      key={index + 1}
      ingredient={ingredient}
    />
  ));

  const stepsArray = steps.map((step, index) => (
    <Steps
      key={index + 1}
      step_name={step.step_name}
      instruction={step.instruction}
    />  
  ));

  // console.log("steps: ", steps, "steps Array: ", stepsArray);

  return (
    <div>
      <h2 className="recipe-description">
        {recipe.description}
      </h2>
      <Spacer />
      <div className="recipe-ingredients" >
        <div className="ingredients" >
          <h2>Ingredients</h2>
            <div className="ingredient-container" >{ingredientArray}</div>
        </div>
        <div className="break"></div>
        <div className="instructions">
          <h2>Instructions</h2>
          <div className="step-container">{stepsArray}</div>
        </div>
      </div>
    </div>
  )
  
};