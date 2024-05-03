import { useState } from 'react'; 
import TableCell from './TableCell';
import { formatQuantity } from '../../helpers/conversionHelpers';
import './converterTable.css';

const IngredientsTable = (props) => {

  const {ingredients, serves, selectedServing} = props;
  const servingRatio = parseInt(selectedServing) / parseInt(serves);

  const updateQuantities = (ingredients, ratio) => {
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
  };

  const newIngredients = updateQuantities(ingredients, servingRatio);

  // console.log(newIngredients);

  return (
    <table className="ingredients-table">
      <thead>
        <tr className="header-row">
          <TableCell>QUANTITY</TableCell>
          <TableCell>MEASUREMENT</TableCell>
          <TableCell>INGREDIENT</TableCell>
        </tr>
      </thead>
      <tbody>
        {ingredients.map((ingredient, index) => (
          <tr key={index} className="row">
            <TableCell>{(ingredient.quantity * servingRatio).toFixed(2)}</TableCell>
            <TableCell>{ingredient.measurement}</TableCell>
            <TableCell>{ingredient.ingredient}</TableCell>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default IngredientsTable;