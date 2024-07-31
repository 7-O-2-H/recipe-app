// imports
import "../styles/MyRecipes.css";
import NavBar from "../components/NavBar";
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import MyRecipeList from "../components/MyRecipeList";
import BrowseOptions from "../components/BrowseOptions";

export default function MyRecipes() {

  // template
  return (
    <div className="my-recipes-page">
      <NavBar />
      {/* <Spacer /> */}
      <Header title="Add to Taste" />
      <h2 className="my-recipes-title">MY RECIPES</h2>
      <Spacer />
      <div className="my-recipes-body" >
        <MyRecipeList />
      </div>
    </div>
  );
};
