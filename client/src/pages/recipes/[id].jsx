
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
 
  // If recipe is not set, invoke loading state
  if (!currentRecipe || !currentIngredients || !currentSteps || !currentTags) {
    return <div>Loading...</div>;
  }

  // Render the recipe details
  return (
    <div>
      <NavBar />
      <Spacer />
      <Header title="Add to Taste" />
      <Spacer />
      <div className='home-div'>
        <FullRecipe 
          recipe={currentRecipe} 
          ingredients={currentIngredients}
          steps={currentSteps}
          tags={currentTags}
        />
      </div>
    </div>
  );
};
  