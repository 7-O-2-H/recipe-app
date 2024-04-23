// imports
import { decimalToFraction } from "../helpers/conversionHelpers";
import { formatIngredientsData } from "../helpers/conversionHelpers";

export default function FullRecipe (props) {

  const { recipe, ingredients, steps } = props;

  const ingredientsArray = formatIngredientsData(ingredients);

  console.log("Ingredients Array: ", ingredientsArray);

  return (
    <div>
      {recipe.description}
      <div className="recipe-ingredients" >
        <div className="ingredients" >
          <p>INGREDIENTS</p>
            <p>{ingredientsArray}</p>
        </div>
      </div>
    </div>
  )
  
};