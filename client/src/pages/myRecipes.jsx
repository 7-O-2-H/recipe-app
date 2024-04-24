// imports
import "../styles/browse.css";
import NavBar from "../components/NavBar";
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import MyRecipeList from "../components/MyRecipeList";
import BrowseOptions from "../components/BrowseOptions";

export default function Browse() {

  // template
  return (
    <div>
      <NavBar />
      <Spacer />
      <Header title="My Recipes" />
      <Spacer />
      <BrowseOptions />
      <div className="browse-body" >
        <MyRecipeList />
      </div>
      {/* <Spacer /> */}
    </div>
  );
};
