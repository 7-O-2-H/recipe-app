// imports
import "../styles/browse.css";
import NavBar from "../components/NavBar";
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import RecipeList from "../components/RecipeList";
import BrowseOptions from "../components/BrowseOptions";

export default function UserRecipes() {

  // template
  return (
    <div>
      <NavBar />
      <Spacer />
      <Header title="My Recipes" />
      <Spacer />
      <BrowseOptions />
      <div className="browse-body" >
        <RecipeList />
      </div>
      {/* <Spacer /> */}
    </div>
  );
};
