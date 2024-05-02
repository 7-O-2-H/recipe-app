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