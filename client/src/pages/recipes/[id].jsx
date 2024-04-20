
// imports
import { useRouter } from 'next/router';
import NavBar from "../../components/NavBar";
import Header from '../../components/Header';
import Spacer from '../../components/Spacer';
import { useRecipe } from '../../hooks/useRecipe';
import FullRecipe from '../../components/FullRecipe';

export default function Recipe( {id} ) {

  // retrieve recipeId from router
  const router = useRouter();
  const recipe = router.query;
  const recipeId = recipe.id;

  // use hook to retreive selected recipe
  const { currentRecipe, currentIngredients, currentSteps } = useRecipe(recipeId);
 
  // If recipe is not set, invoke loading state
  // if (!currentRecipe || !currentIngredients || !currentSteps) {
  if (!currentRecipe || !currentIngredients) {
    return <div>Loading...</div>;
  }

  console.log("current rec: ", currentRecipe, "\ncurrent ing: ", currentIngredients, "\ncurrent steps: ", currentSteps);

  // Render the recipe details
  return (
    <div>
      <NavBar />
      <Spacer />
      <Header title={currentRecipe.recipe} />
      <Spacer />
      // <FullRecipe props={currentRecipe} />
    </div>
  );
};
  