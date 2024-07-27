// imports
import '../styles/styles.css';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import FullRecipe from '../components/FullRecipe';
import { useAppData } from '../hooks/useAppData';
import { useRecipe } from '../hooks/useRecipe';
import RecipeListItem from '../components/RecipeListItem';

export default function Home() {

  // retreive all recipes
  const { allRecipes } = useAppData();

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

  // template
  return (
   <div>
    <NavBar />
    <Spacer />
    <Header title="Add to Taste" />
    <Spacer />
    <RecipeListItem
      key={randomRecipe.id}
      id={randomRecipe.id}
      submitted={randomRecipe.user_name}
      name={randomRecipe.recipe}
      time={randomRecipe.time}
      unit={randomRecipe.measurement}
      servingSize={randomRecipe.serves}
      description={randomRecipe.description}
    />  
   </div>
  );
}
