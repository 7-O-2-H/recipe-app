// imports
/// hooks
import { useFavourites } from "../hooks/useFavourites";
import { useLoggedInStatus } from "../hooks/useLoggedInStatus";
import { useRouter } from 'next/router';
import { useAllFavourites } from "../hooks/useAllFavourites"
import useVerification from "../hooks/useVerification";
import useUserAuthorization from "../hooks/useUserAuthorization";
// helpers
import { formatIngredientsData } from "../helpers/conversionHelpers";
import { addFavourite } from "../helpers/favouritesHelpers";
import { isFavourite } from "../helpers/favouritesHelpers";
import { getFavouriteId } from "../helpers/favouritesHelpers";
import { unfavourite } from "../helpers/favouritesHelpers";
import { deleteRecipe } from "../helpers/recipeHelpers";
// components
import Ingredient from "./Ingredient";
import Steps from "./Steps";
import Spacer from "./Spacer";
import Tag from "./Tag"
// styles
import "../styles/FullRecipe.css";
import "../styles/styles.css";

export default function FullRecipe (props) {

  // declare router
  const router = useRouter();

  // set default login status to false
  const { loggedIn } = useLoggedInStatus();

  // use hooks and props to set user id, favourites, recipe data
  const userId = parseInt(useVerification());
  const { allFavourites } = useAllFavourites();
  const { recipe, ingredients, steps, tags } = props;
  const submitterId = recipe.user_id;
  const authorizedUser = useUserAuthorization(submitterId);
  const converterProps = { 
    recipe: JSON.stringify(recipe),
    ingredients: JSON.stringify(ingredients),
  };

  // loading state
  if (loggedIn) {
    if (!userId || !recipe.id || !allFavourites || !tags) {
      return <div>Loading...</div>
    }
  };
  
  // get favourite status with helper
  const favouriteStatus = isFavourite(allFavourites, userId, recipe.id);
 
  // button handlers
  const handleFavourite = () => {
    addFavourite(userId, recipe.id);
    router.push('/favourites');
  };

  const handleEdit = () => {
    router.push(`/edit/${recipe.id}`);
  };

  const handleUnfavourite = () => {
    const favouriteId = getFavouriteId(allFavourites, userId, recipe.id);
    unfavourite(favouriteId);
    router.push('/favourites');
  };

  const handleDelete = () => {
    if (!authorizedUser) {
      console.log('You are not authorized to delete this recipe');
      return;
    }
    deleteRecipe(recipe.id);
    router.push('/myRecipes');
    return;
  };

  const handleSubmittedBy = () => {
    router.push({
      pathname: '/userRecipes',
      query: {
        submitterId: JSON.stringify(submitterId)
      }
    });
  };

  const handleConverter = () => {
    router.push({
      pathname: '/converter', 
      query: converterProps
    });
  };

  // format ingredients into proper quantities and strings
  const ingredientsArray = formatIngredientsData(ingredients);

  // tags, ingredients, steps arrays
  const ingredientArray = ingredientsArray.map((ingredient, index) => (
    <Ingredient
      key={index + 1}
      ingredient={ingredient}
    />
  ));

  const stepsArray = steps.map((step, index) => (
    <Steps
      key={index + 1}
      step_name={step.step_name}
      instruction={step.instruction}
    />  
  ));

  const tagsArray = tags.map((tag, index) => (

    <Tag
      key={index + 1}
      tag={tag['tag']}
    />
  ));

  return (
    <div>
    {/* <div className="home-div"> */}
      {/* <Spacer /> */}
      <h1 className="recipe-name">{recipe.recipe}</h1>
      <Spacer />
      <h2 className="recipe-description">
        {recipe.description}
      </h2>
      <Spacer />
      <div id="details">
        <p onClick={handleSubmittedBy}>Submitted by: {recipe.user_name}</p>
        <p>Serves: {recipe.serves}</p>
        <p>Time: {recipe.time} {recipe.measurement}</p>
      </div>
      <Spacer />
      <div className="recipe-ingredients" >
        <div className="ingredients" >
          <h2>Ingredients</h2>
          <Spacer />
            <div className="ingredient-container" >{ingredientArray}</div>
        </div>
        <div className="break"></div>
        <div className="instructions">
          <Spacer />
          <h2>Instructions</h2>
          <Spacer />
          <div className="step-container">{stepsArray}</div>
        </div>
      </div>
      <Spacer />
      {tagsArray.length > 0 &&
      // <Spacer />
      <div className="tags-container"> 
        <div className="tag-title">
          <h2>
            Tags
          </h2>
        </div>
        <Spacer />
        <div className="tags">
          {tagsArray}
        </div>
      </div>
      }
      {loggedIn ? (
        <>
          {!favouriteStatus ? (
            <>
              <Spacer />
              <div className="recipe-options">
                <h3>
                  Options
                </h3>
                <Spacer />
                <div className="option-buttons">
                  <button className="options-button" onClick={handleFavourite}>FAVOURITE</button>
                  {/* <button>SHARE RECIPE</button> */}
                  <button className="options-button" onClick={handleConverter}>CHANGE SERVING SIZE</button>
                  {authorizedUser ? (
                    <>
                      <button className="options-button" onClick={handleDelete}>DELETE RECIPE</button>
                      <button className="options-button" onClick={handleEdit}>EDIT RECIPE</button>
                    </>
                  ) : null}
                </div>
              </div>
            </>
          ) : (
            <>
              <Spacer />
              <div className="recipe-options">
                <h3>
                  Options
                </h3>
                <Spacer />
                <div className="option-buttons">
                  <button className="options-button" onClick={handleUnfavourite}>UNFAVOURITE</button>
                  {/* <button> SHARE RECIPE</button> */}
                  <button className="options-button" onClick={handleConverter}>CHANGE SERVING SIZE</button>
                  {authorizedUser ? (
                    <>
                      <button className="options-button" onClick={handleEdit}>EDIT RECIPE</button>
                      <button className="options-button" onClick={handleDelete}> DELETE RECIPE</button>
                    </>
                  ) : null}
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <Spacer />
          <div className="recipe-options">
            <h3>
              Options
            </h3>
            <Spacer />
            <div className="option-buttons">
              {/* <button> SHARE RECIPE</button>  */}
              <button className="options-button" onClick={handleConverter}>CHANGE SERVING SIZE</button>
            </div>
          </div>
        </>
      )}
    </div>
  )
  
};