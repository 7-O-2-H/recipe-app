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
  };


  // define function to find greatest common divisor
  const findGCD = (a, b) => {
    if (b === 0) {
      return a;
    };
    return findGCD(b, a % b);
  };

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

    if (parseFloat(ing['quantity']) === 0) {
      if (ing['measurement'] !== '-') {
        str += `${ing['ingredient']} ${ing['measurement']}`;
        ingredientsArray.push(str);
        continue;
      };
      str += `${ing['ingredient']}`;
      ingredientsArray.push(str);
      continue;
    };

    if (ing['measurement'] === '-') {
      if (ing['quantity'] > 1) {
        str += `${ing['quantity']} ${ing['ingredient']}s`;
        ingredientsArray.push(str);
        continue;
      };
      str += `${ing['quantity']} ${ing['ingredient']}`;
      ingredientsArray.push(str);
      continue;
    };

    // convert to fraction and whole number if greater than 1
    if (ing['quantity'] > 1) {

      // check if decimal
      if (ing['quantity'] % 1 === 0) {

        str += `${ing['quantity']} ${ing['measurement']}s of ${ing['ingredient']}`; 
      
      } else {

        // initialize whole number and decimal (to be converted) for decimal values
        const wholeNum = ing['quantity'] - (ing['quantity'] % 1);
        const decimal = ing['quantity'] % 1;

        if (decimal.toFixed(2) === 0.66) {

          str += `${wholeNum} 2/3 ${ing['measurement']}s of ${ing['ingredient']}`;

        } else if (decimal.toFixed(2) === 0.33) {

          str += `${wholeNum} 1/3 ${ing['measurement']}s of ${ing['ingredient']}`;

        } else if (decimal.toFixed === 0.167) {

          str += `${wholeNum} 1/6 ${ing['measurement']}s of ${ing['ingredient']}`;
        
        } else if (decimal.toFixed(3) === 0.833) {

          str += `${wholeNum} 5/6 ${ing['measurement']}s of ${ing['ingredient']}`;

        } else {

          // use helper to convert decimal to fraction
          const fraction = decimalToFraction(decimal);

          str += `${wholeNum} ${fraction} ${ing['measurement']}s of ${ing['ingredient']}`;
        };
      };
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

          str += `1/6 ${ing['measurement']} of ${ing['ingredient']}`;

        } else if (parseFloat(decimal).toFixed(3) === 0.833) {

          str += `5/6 ${ing['measurement']} of ${ing['ingredient']}`;
        
        } else {

          // use helper to convert decimal to fraction
          const fraction = decimalToFraction(decimal);

          str += `${fraction} ${ing['measurement']} of ${ing['ingredient']}`;
        
        };
      };
    };

    // push strings to ing array
    ingredientsArray.push(str);

  };

  return ingredientsArray;

};

export function formatSingleIngredient (ingredient) {

  // return ingredient to taste or just ingredient name
  if (parseFloat(ingredient['quantity']) === 0) {
    if (ingredient['measurement'] !== '-') {
      return `${ingredient['ingredient']} ${ingredient['measurement']}`;
    };
    return`${ingredient['ingredient']}`;
  };

  // return number of ingredients if no measurement
  if (ingredient['measurement'] === '-') {
    if (ingredient['quantity'] > 1) {
      return `${ingredient['quantity']} ${ingredient['ingredient']}s`;
    };
    return`${ingredient['quantity']} ${ingredient['ingredient']}`;
  };

    // convert to fraction and whole number if greater than 1
  if (ingredient['quantity'] > 1) {

    // check if decimal
    if (ingredient['quantity'] % 1 === 0) {

      return `${ingredient['quantity']} ${ingredient['measurement']}s of ${ingredient['ingredient']}`; 
  
    } else {

      // initialize whole number and decimal (to be converted) for decimal values
      const wholeNum = ingredient['quantity'] - (ingredient['quantity'] % 1);
      const decimal = parseFloat(ingredient['quantity'] % 1)

      if (decimal === 0.66) {

        return `${wholeNum} 2/3 ${ingredient['measurement']}s of ${ingredient['ingredient']}`;

      } else if (decimal === 0.33) {

        return `${wholeNum} 1/3 ${ingredient['measurement']}s of ${ingredient['ingredient']}`;

      } else if (decimal === 0.167) {

        return `${wholeNum} 1/6 ${ingredient['measurement']}s of ${ingredient['ingredient']}`;
    
      } else {

        // use helper to convert decimal to fraction
        const fraction = decimalToFraction(decimal);
        console.log(fraction);
        return `${wholeNum} ${fraction} ${ingredient['measurement']}s of ${ingredient['ingredient']}`;
      };
    };

  // convert decimal to fraction for values less than one  
  } else {

    // check if decimal
    if (ingredient['quantity'] % 1 === 0) {

      return `${ingredient['quantity']} ${ingredient['measurement']} of ${ingredient['ingredient']}`; 
  
    } else {

      // initialize decimal (to be converted) for decimal values checking fr 3rds and 6ths
      const decimal = ingredient['quantity'] % 1;

      if (decimal.toFixed(2) === 0.66) {

        return `2/3 ${ingredient['measurement']} of ${ingredient['ingredient']}`;

      } else if (decimal.toFixed(2) === 0.33) {

        return `1/3 ${ingredient['measurement']} of ${ingredient['ingredient']}`;

      } else if (decimal === 0.167) {

          return `1/6 ${ingredient['measurement']}s of ${ingredient['ingredient']}`;
    
      } else {

        // use helper to convert decimal to fraction
        const fraction = decimalToFraction(decimal);

        return `${fraction} ${ingredient['measurement']} of ${ingredient['ingredient']}`;
    
      };
    };
  };
};