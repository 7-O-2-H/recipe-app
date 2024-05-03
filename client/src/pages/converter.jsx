// imports
import '../styles/styles.css';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import Column from '../components/converterChart/Column';
import { useRouter } from 'next/router';

export default function Converter() {

  const router = useRouter();

  const { recipe, ingredients, steps } = router.query;
  const parsedRecipe = JSON.parse(recipe);
  const parsedIngredients = JSON.parse(ingredients);
  const parsedSteps = JSON.parse(steps);

  const quantitiesArray = [];
  const measurementsArray =[];
  const ingredientsArray = [];
  for (const ingredient of parsedIngredients) {
    quantitiesArray.push(ingredient.quantity);
    measurementsArray.push(ingredient.measurement);
    ingredientsArray.push(ingredient.ingredient);
  }
  
  const ingredientsColumn = ingredientsArray.map((ingredient, index) => (
    <Column
      key={index+1}
      item={ingredient}
    />
  ));

  const quantitiesColumn = quantitiesArray.map((quantity, index) => (
    <Column
      key={index + 1}
      item={quantity}
    />
  ));

  const measurementsColumn = measurementsArray.map((measurement, index) => (
    <Column  
      key={index + 1}
      item={measurement}
    />
  ));

  // console.log(parsed);
  console.log(measurementsArray, quantitiesArray, measurementsColumn)
  // template
  return (
    <div>
      <NavBar />
      <Spacer />
      <Header title="Convert Serving Size" />
      <Spacer />
        <h1>{parsedRecipe.recipe}</h1>
        <div className='conversion-chart' >
          <div>{quantitiesColumn}</div>
          <div>{measurementsColumn}</div>
          <div>{ingredientsColumn}</div>
        </div>
    </div>
  );
};