import React from 'react';
import TableCell from './TableCell';
import './converterTable.css';

const IngredientsTable = (props) => {

  const {ingredients} = props;
  
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
            <TableCell>{ingredient.quantity}</TableCell>
            <TableCell>{ingredient.measurement}</TableCell>
            <TableCell>{ingredient.ingredient}</TableCell>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default IngredientsTable;