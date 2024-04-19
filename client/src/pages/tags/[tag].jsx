
// imports
import { useRouter } from 'next/router';
import NavBar from "../../components/NavBar";
import Header from '../../components/Header';
import Spacer from '../../components/Spacer';
import { useTag } from '../../hooks/useTag';
import RecipeListItem from '../../components/RecipeListItem';

export default function Tag( {id} ) {

  // retrieve tagId from router
  const router = useRouter();
  const tag = router.query;
  const tagId = tag.id;


  const recipes = useTag(tagId);
 

  // console.log("router.query ", router.query, "\n: ", tagId, "\nRecipes: ", recipes)

  const recipesArray = recipes.map(recipe => (  
    <RecipeListItem
      key={recipe.id}
      id={recipe.id}
      submitted={recipe.user_name}
      name={recipe.recipe}
      time={recipe.time}
      unit={recipe.measurement}
      servingSize={recipe.serves}
      description={recipe.description}
    />
  ));

  // Loading state
  if (!recipes) {
    return <div>Loading...</div>;
  }

  // template
  return (
    <div>
      <NavBar />
      <Spacer />
      <Header title={tag.tag} />
      <div className="recipe-list">
        {recipesArray}
      </div>
      <Spacer />
    </div>
  );
};
  