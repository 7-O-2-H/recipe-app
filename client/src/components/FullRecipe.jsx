// imports
import { decimalToFraction } from "../helpers/conversionHelpers";

export default function FullRecipe (props) {

  const { recipe, ingredients, steps } = props;


  // create array of ingredients with measurement and quantity
  const ingredientsArray = [];

  // loop through ingredients data
  for (const ing of ingredients) {

    // intialize formatted ingredients strings
    let str = '';

    // convert to fraction and whole number if greater than 1
    if (ing['quantity'] > 1) {

      // check if decimal
      if (ing['quantity'] % 1 === 0) {

        str += `${ing['quantity']} ${ing['measurement']}s of ${ing['ingredient']}`; 
      
      } else {

        // initialize whole number and decimal (to be converted) for decimal values
        const wholeNum = ing['quantity'] - (ing['quantity'] % 1);
        const decimal = ing['quantity'] % 1;

        if (decimal === 0.66) {

          str += `${wholeNum} 2/3 ${ing['measurement']}s of ${ing['ingredient']}`;

        } else if (decimal === 0.33) {

          str += `${wholeNum} 1/3 ${ing['measurement']}s of ${ing['ingredient']}`;

        } else if (decimal === 0.167) {

          str += `${wholeNum} 1/6 ${ing['measurement']}s of ${ing['ingredient']}`;
        
        } else {

          // use helper to convert decimal to fraction
          const fraction = decimalToFraction(decimal);

          str += `${wholeNum} ${fraction} ${ing['measurement']}s of ${ing['ingredient']}`;
        }
      }
    } else {

      // check if decimal
      if (ing['quantity'] % 1 === 0) {

        str += `${ing['quantity']} ${ing['measurement']} of ${ing['ingredient']}`; 
      
      } else {

        // initialize decimal (to be converted) for decimal values
        const decimal = ing['quantity'] % 1;

        if (decimal === 0.66) {

          str += `2/3 ${ing['measurement']} of ${ing['ingredient']}`;

        } else if (decimal === 0.33) {

          str += `1/3 ${ing['measurement']} of ${ing['ingredient']}`;

        } else if (decimal === 0.167) {

          str += `1/6 ${ing['measurement']}s of ${ing['ingredient']}`;
        
        } else {

          // use helper to convert decimal to fraction
          const fraction = decimalToFraction(decimal);

          str += `${fraction} ${ing['measurement']} of ${ing['ingredient']}`;
        
        }
      }
    }

    // push strings to ing array
    ingredientsArray.push(str);

  }

  console.log("Ingredients Array: ", ingredientsArray);

  return (
    <div>
      {recipe.description}
      <div className="recipe-ingredients" >
        <div className="ingredients" >
          <p>INGREDIENTS</p>
            <p>{ingredients[0]['quantity']} {ingredients[0]['measurement']} of {ingredients[0]['ingredient']}</p>
        </div>
      </div>
    </div>
  )
  
};