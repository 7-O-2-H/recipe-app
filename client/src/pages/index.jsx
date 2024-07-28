// imports
import '../styles/styles.css';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import FullRecipe from '../components/FullRecipe';
import { useAppData, useAppDataWithRefresh } from '../hooks/useAppData';
// import { useAppDataWithRefresh } from '../hooks/useAppData';
import { useRecipe } from '../hooks/useRecipe';
import RecipeListItem from '../components/RecipeListItem';
import { useState } from 'react';
import BurgerMenu from '../components/BurgerMenu';

export default function Home() {

  const [refresh, setRefresh] = useState(true);

  // retreive all recipes
  const { allRecipes } = useAppDataWithRefresh(refresh);

  // create random index
  const recipeIndex = Math.floor(Math.random() * allRecipes.length);

  // use random number to select random recipe
  const randomRecipe = allRecipes[recipeIndex];

  // get all recipe data
  const { currentRecipe, currentIngredients, currentSteps, currentTags } = useRecipe(randomRecipe?.id);

  //loading state 
  if (!randomRecipe || !currentRecipe || !currentIngredients || !currentSteps || !currentTags) {
    return <div>Loading...</div>;
  };

  const newRecipe = (event) => {
    setRefresh(prev => !prev);
  };

  // template
  return (
   <div>
    <NavBar />
    {/* <BurgerMenu /> */}
    <Spacer />
    <Header title="Add to Taste" />
    <Spacer />
    <div className='home-div'>

    {/* <RecipeListItem
        key={randomRecipe.id}
        id={randomRecipe.id}
        submitted={randomRecipe.user_name}
        name={randomRecipe.recipe}
        time={randomRecipe.time}
        unit={randomRecipe.measurement}
        servingSize={randomRecipe.serves}
        description={randomRecipe.description}
        />
      <Spacer /> */}
        
      <FullRecipe
        recipe={currentRecipe} 
        ingredients={currentIngredients}
        steps={currentSteps} 
        tags={currentTags}
        />
        <button onClick={newRecipe}>Try Something New</button>
        </div>
   </div>
  );
}
