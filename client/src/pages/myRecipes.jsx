// imports
import "../styles/browse.css";
import NavBar from "../components/NavBar";
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import MyRecipeList from "../components/MyRecipeList";
import BrowseOptions from "../components/BrowseOptions";

export default function MyRecipes() {

  // template
  return (
    <div>
      <NavBar />
      <Spacer />
      <Header title="My Recipes" />
      <Spacer />
      <div className="browse-body" >
        <MyRecipeList />
      </div>
    </div>
  );
};
