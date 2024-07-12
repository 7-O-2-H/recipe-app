// imports
// styles
import '../styles/styles.css';
// react
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// hooks 
import { useRecipeWithRefresh } from '../hooks/useRecipe';
// components
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import ConverterChart from '../components/converterChart/ConverterChart';

export default function Converter() {

  const router = useRouter();

  const { recipe, ingredients } = router.query;
  const parsedRecipe = JSON.parse(recipe);
  const parsedIngredients = JSON.parse(ingredients);

  const [selectedServing, setSelectedServing] = useState(parseInt(parsedRecipe.serves));
  const [servingRatio, setServingRatio] = useState(1);

  const handleServingChange = (event) => {
    const newServing = parseInt(event.target.value);
    setSelectedServing(newServing);
    setServingRatio(newServing / parseInt(parsedRecipe.serves));
  };

  const servingOptions = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div>
      <NavBar />
      <Spacer />
      <Header title="Convert Serving Size" />
      <Spacer />
        <h2 className='default-serving'>{parsedRecipe.recipe}</h2>
        <div className='vary-serving'>
          <h2>Serves:</h2>
          <select className="serving-dropdown" value={selectedServing} onChange={handleServingChange}>
          {servingOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
          </select>
        </div>
      <Spacer />
        <div className='conversion-chart' >
          <ConverterChart ingredients={parsedIngredients} serves={parsedRecipe.serves} selectedServing={selectedServing}/>
        </div>
    </div>
  );
};