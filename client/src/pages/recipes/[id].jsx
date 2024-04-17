
// imports
import { useRouter } from 'next/router';
import NavBar from "../../components/NavBar";
import Header from '../../components/Header';
import Spacer from '../../components/Spacer';
import { useRecipe } from '../../hooks/useRecipe';

export default function Recipe( {id} ) {

  // retrieve recipeId from router
  const router = useRouter();
  const recipe = router.query;
  const recipeId = recipe.id;
  // if (recipeId) {

  const currentRecipe = useRecipe(recipeId);
 

  console.log("router.query ", router.query, "\nid: ", recipeId, "\ncurrentRecipe: ", currentRecipe)

  // If recipe is not set, invoke loading state
  if (!currentRecipe) {
    return <div>Loading...</div>;
  }

  // Render the recipe details
  return (
    <div>
      <NavBar />
      <Spacer />
      <Header title={currentRecipe.recipe} />
      <Spacer />
    </div>
  );
};
  