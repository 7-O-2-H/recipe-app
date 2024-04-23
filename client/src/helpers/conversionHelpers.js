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