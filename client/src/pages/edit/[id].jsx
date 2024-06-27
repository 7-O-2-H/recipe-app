
// imports
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
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
  const { id } = router.query;

  // set states
  const [recipeId, setRecipeId] = useState(parseInt(null)); 
  const [refreshData, setRefreshData] = useState(false);

  // use effect to immediately update recipe Id when available to avoid triggering loading state
  useEffect(() => {
    if (id) {
      setRecipeId(parseInt(id));
    }
  }, [id]);

  // use hook to retreive selected recipe
  const { currentRecipe, currentIngredients, currentSteps, currentTags } = useRecipeWithRefresh(recipeId, refreshData);
  
  // function to trigger refresh on update submission
  const triggerRefresh = () => {
    setRefreshData(prevState => !prevState);
  };
  
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
  