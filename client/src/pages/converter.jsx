// imports
// styles
import '../styles/styles.css';
// react
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// components
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import ConverterChart from '../components/converterChart/ConverterChart';

export default function Converter() {

  const router = useRouter();

  const [parsedRecipe, setParsedRecipe] = useState(null);
  const [parsedIngredients, setParsedIngredients] = useState(null);
  const [selectedServing, setSelectedServing] = useState(1);
  const [servingRatio, setServingRatio] = useState(1);

  useEffect(() => {
    const fetchData = () => {
      try {
        // Ensure router is ready and query parameters are available
        if (router.isReady) {
          const { recipe, ingredients } = router.query;

          if (recipe && ingredients) {
            // Parse JSON data with error handling
            const recipeData = JSON.parse(recipe);
            const ingredientsData = JSON.parse(ingredients);

            // Update state with parsed data
            setParsedRecipe(recipeData);
            setParsedIngredients(ingredientsData);
            setSelectedServing(parseInt(recipeData.serves) || 1);
            setServingRatio(1);
          } else {
            // Redirect to homepage if data is missing
            router.push('/');
          }
        }
       } catch (error) {
         console.error("Error parsing JSON or processing data: ", error);
         // Redirect to homepage if parsing fails
         router.push('/');
       }
    };

    fetchData();    
  }, [router.isReady, router.query]);

  // handlers
  const handleServingChange = (event) => {
    const newServing = parseInt(event.target.value);
    setSelectedServing(newServing);
    setServingRatio(newServing / parseInt(parsedRecipe.serves));
  };

  // set serving ooptions for drop down
  const servingOptions = Array.from({ length: 20 }, (_, i) => i + 1);

  // loading state
  if (!parsedRecipe || !parsedIngredients) {
    return <div>Loading...</div>;
  };

  const returnToRecipePage = (event) => {
    router.push(`/recipes/${parsedRecipe.id}`)
  };

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
      <Spacer />
        <div>
        < button onClick={returnToRecipePage}>BACK TO RECIPE</button>
        </div>
    </div>
  );
};