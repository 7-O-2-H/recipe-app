
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
  const { currentRecipe, currentIngredients, currentSteps, currentTags } = useRecipe(recipeId);
 
  console.log(currentRecipe, currentIngredients, currentSteps, currentTags)
  // If recipe is not set, invoke loading state
  if (!currentRecipe || !currentIngredients || !currentSteps || currentTags) {
    return <div>Loading...</div>;
  }

  // Render the recipe details
  return (
    <div>
      <NavBar />
      <Spacer />
      <Header title={currentRecipe.recipe} />
      <Spacer />
      <FullRecipe 
        recipe={currentRecipe} 
        ingredients={currentIngredients}
        steps={currentSteps}
        tags={currentTags}
      />
    </div>
  );
};
  