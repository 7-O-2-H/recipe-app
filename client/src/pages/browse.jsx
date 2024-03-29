// imports
import "../styles/browse.css";
import NavBar from "../components/NavBar";
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import RecipeList from "../components/RecipeList";

export default function Browse() {

  // template
  return (
    <div>
      <NavBar />
      <Spacer />
      <Header title="Recipes" />
      <Spacer />
        <div className="browse-body" >
          <RecipeList />
        </div>
      {/* <Spacer /> */}
    </div>
  );
}
