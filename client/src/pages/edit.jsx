// imports
import '../styles/styles.css';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import EditForm from '../components/EditForm';
// hooks
import useAppData from '../hooks/useAppData';
import { useRecipe } from '../hooks/useRecipe';

export default function Edit(recipeData) {

  // // retreive all recipes
  // const { allRecipes } = useAppData();

  // // create random index
  // const recipeIndex = Math.floor(Math.random() * allRecipes.length);

  // // use random number to select random recipe
  // const randomRecipe = allRecipes[recipeIndex];

  // // get all recipe data
  // const { currentRecipe, currentIngredients, currentSteps } = useRecipe(randomRecipe?.id);

  // //loading state 
  // if (!randomRecipe || !currentRecipe || !currentIngredients || !currentSteps) {
  //   return <div>Loading...</div>;
  // }
  
  // template
  return (
   <div>
    <NavBar />
    <Spacer />
    <Header title="Edit Recipe" />
    <Spacer />
    <EditForm />
   </div>
  );
}