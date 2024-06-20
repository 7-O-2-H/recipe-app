
// imports
import { useRouter } from 'next/router';
import { useState } from 'react';
import NavBar from "../../components/NavBar";
import Header from '../../components/Header';
import Spacer from '../../components/Spacer';
import { useRecipeWithRefresh } from '../../hooks/useRecipe';
// import { useAppDataWithRefresh } from '../../hooks/useAppData';
import EditForm from '../../components/editRecipe/EditForm';

export default function Edit( { params } ) {

  // retrieve recipeId from router
  const router = useRouter();
  const recipe = router.query;

  // set states
  const [recipeId, setRecipeId] = useState(parseInt(recipe.id)); 
  const [refreshData, setRefreshData] = useState(false);

  // use hook to retreive selected recipe
  const { currentRecipe, currentIngredients, currentSteps, currentTags } = useRecipeWithRefresh(recipeId, refreshData);
  
  // function to trigger refresh on update submission
  const triggerRefresh = () => {
    setRefreshData(prevState => !prevState);
    console.log(refreshData);
  };
  
  // useAppDataWithRefresh(refreshData);

  // If recipe is not set, invoke loading state
  if (!currentRecipe || !currentIngredients || !currentSteps || !currentTags) {
    return <div>Loading...</div>;
  };
  
  // call useAppData with refresh to get updated recipe
  // Render the recipe details
  return (
    <div>
      <NavBar />
      <Spacer />
      <Header title={`Edit`} />
      <Spacer />
      <EditForm
        currentRecipe={currentRecipe}
        currentIngredients={currentIngredients}
        currentSteps={currentSteps}
        currentTags={currentTags}
        triggerRefresh={triggerRefresh}
      />
    </div>
  );
};
  