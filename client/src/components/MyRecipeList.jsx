// imports
import { tokenVerification } from "../helpers/tokenVerification";
import { useMyRecipes } from "../hooks/useMyRecipes";
import "../styles/RecipeList.css"
import RecipeListItem from "./RecipeListItem";

export default function MyRecipeList() {

  let token = '';
  // retreive token
  if (typeof window!== 'undefined') {
    // get logged in status
    token = localStorage.getItem('token');
  };

  // set user
  // const user = tokenVerification(token)

  // get my recipes
  // const { myRecipes } = useMyRecipes();

  // if (!user) {
  //   return <div>Loading...</div>
  // }

  console.log("token:", token['token'])
  // "\nuser: ", user);
  // const recipesArray = myRecipes.map(recipe => (  
  //     <RecipeListItem
  //       key={recipe.id}
  //       id={recipe.id}
  //       submitted={recipe.user_name}
  //       name={recipe.recipe}
  //       time={recipe.time}
  //       unit={recipe.measurement}
  //       servingSize={recipe.serves}
  //       description={recipe.description}
  //     />
  // ));

  // template
  return (
    <div className="recipe-list">
      {/* {recipesArray} */}
    </div>
  );
  
}