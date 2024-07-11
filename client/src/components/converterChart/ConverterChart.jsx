import { useState } from 'react'; 
import TableCell from './TableCell';
import { formatConvertedData } from '../../helpers/conversionHelpers';
import './converterTable.css';

const IngredientsTable = (props) => {

  const {ingredients, serves, selectedServing} = props;
  const servingRatio = parseInt(selectedServing) / parseInt(serves);

  const convertedQuantityDecimalArray = ingredients.map(ingredient => (ingredient.quantity * servingRatio).toFixed(2));

  console.log(convertedQuantityDecimalArray);

  const formattedQuantity = formatConvertedData

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