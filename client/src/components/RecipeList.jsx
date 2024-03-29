// imports
import useAppData from "../hooks/useAppData";
import { useEffect, useState } from "react";
import "../styles/RecipeList.css"
import RecipeListItem from "./RecipeListItem";
// import { getAllRecipes } from "../helpers/recipeHelpers";

export default function RecipeList() {

  //const [allRecipes, setAllRecipes] = useState([]);

  // useEffect(() => {
  //   getAllRecipes()
  //   .then((data) => {
  //     setAllRecipes(data['data']);
  //   })
  // }, []);

  const { allRecipes } = useAppData();
  // console.log(allRecipes[0].description);

  const recipesArray = allRecipes.map(recipe => (
      <RecipeListItem
        key={recipe.id}
        // submitted={recipe.user_id}
        name={recipe.recipe}
        time={recipe.time}
        unit={recipe.measurement}
        servingSize={recipe.serves}
        description={recipe.description}
      />
  ));

  // template
  // const recipe = allRecipes[3];
  console.log(allRecipes, recipesArray);
  return (
    <div className="recipe-list">
      {/* <RecipeListItem key={} name={'Some New Recipe'} time={30} unit={'minutes'} servingSize={4} description={'It\s a cool new recipe that will totally get you laid!'} /> */}
      {/* <RecipeListItem key={recipe.id} name={recipe.recipe} description={recipe.description} /> */}
      {recipesArray}
    </div>
  );
  
}