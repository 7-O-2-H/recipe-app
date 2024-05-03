//imports
import { useEffect } from "react";

// converts rational decimals to fractions
export function decimalToFraction(decimal) {
  
  // Define the maximum denominator to approximate the fraction
  const maxDenominator = 10000;

  let numerator = decimal;
  let denominator = 1;

  // Continuously multiply by 10 to convert to fraction
  while (Math.abs(Math.round(numerator) - numerator) > 1 / maxDenominator) {
      numerator *= 10;
      denominator *= 10;
  }


  // define function to find greatest common divisor
  const findGCD = (a, b) => {
    if (b === 0) {
      return a;
    }
    return findGCD(b, a % b);
  }

  // Find the greatest common divisor
  const gcd = findGCD(Math.round(numerator), denominator);

  // Simplify the fraction
  numerator /= gcd;
  denominator /= gcd;

  // Return the fraction as a string
  return `${Math.round(numerator)}/${denominator}`;
};

export function formatIngredientsData(ingredients) {

  const ingredientsArray = [];

  // loop through ingredients data
  for (const ing of ingredients) {

    // intialize formatted ingredients strings
    let str = '';

    if (parseInt(ing['quantity']) === 0) {
      str += `${ing['ingredient']}`;
      ingredientsArray.push(str);
      continue;
    }

    if (ing['measurement'] === '-') {
      str += `${ing['quantity']} ${ing['ingredient']}`;
      ingredientsArray.push(str);
      continue;
    }

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

  return ingredientsArray;

};

export function formatQuantity(quantity, ratio) {
  
  let parsedQuantity = parseInt(quantity);

  let accurateQuantity = 0;
  if (parsedQuantity === 0) {
    return '-';
  };

  if (parsedQuantity % 1 !== 0) {
    const decimal = parsedQuantity % 1;
    console.log(decimal);
    if (decimal === 0.33) {
      accurateQuantity += ((parsedQuantity - decimal) + (1 / 3));
    } else if (decimal === 0.167) {
      accurateQuantity += ((parsedQuantity - decimal) + (1 / 6));
    } else if (decimal === 0.66) {
      accurateQuantity += ((parsedQuantity - decimal) + (2 / 3));
    } else {
      accurateQuantity = parsedQuantity;
    }
  }
  const newQuantity = accurateQuantity * ratio;
  if (newQuantity % 1 === 0) {
    return newQuantity;
  }

  const wholeNum = newQuantity - (newQuantity % 1);
  const decimal = newQuantity % 1;
  const fraction = decimalToFraction(decimal);

  return `${wholeNum}${fraction}`;

}

export function updateQuantities(ingredients, ratio) {

  useEffect(() => {
    // Map over the ingredients array
    return ingredients.map(ingredient => {
      // Calculate the new quantity based on the given ratio
      const newQuantity = formatQuantity(ingredient.quantity, ratio)
      // Return a new object with the updated quantity and other properties unchanged
      return {
        ...ingredient,
        quantity: newQuantity
      };
    });
  }, [ingredients, ratio]);
};