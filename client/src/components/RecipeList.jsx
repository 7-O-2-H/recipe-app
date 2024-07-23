// imports
import { useSortingData } from "../hooks/useSortingData";
import "../styles/RecipeList.css"
import RecipeListItem from "./RecipeListItem";

export default function RecipeList(props) {

  const { ingredient, tag, time, query } = props;
  
  const { allRecipes } = useSortingData(ingredient, tag, time, query);

  

  const recipesArray = allRecipes.map(recipe => (  
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

  // template
  return (
    <div className="recipe-list">
      {recipesArray}
    </div>
  );
  
}