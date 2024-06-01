
// imports
import { useRouter } from 'next/router';
import { useState } from 'react';
import NavBar from "../../components/NavBar";
import Header from '../../components/Header';
import Spacer from '../../components/Spacer';
import { useRecipe } from '../../hooks/useRecipe';
import EditForm from '../../components/editRecipe/EditForm';

export default function Edit( { params } ) {

  // retrieve recipeId from router
  const router = useRouter();
  const recipe = router.query;
  const [recipeId, setRecipeId] = useState(parseInt(recipe.id)); 

  console.log(recipeId, typeof recipeId);
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
      <Header title={`Edit ${currentRecipe.recipe}`} />
      <Spacer />
      <EditForm
        currentRecipe={currentRecipe}
        currentIngredients={currentIngredients}
        currentSteps={currentSteps}
        currentTags={currentTags}
      />
    </div>
  );
};
  