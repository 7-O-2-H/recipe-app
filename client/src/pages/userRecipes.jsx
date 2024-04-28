// imports
import "../styles/browse.css";
import NavBar from "../components/NavBar";
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import UserRecipeList from '../components/UserRecipeList'
import BrowseOptions from "../components/BrowseOptions";
import { useRouter } from "next/router";
import { useMyRecipes } from "../hooks/useMyRecipes";

export default function UserRecipes() {

  const router = useRouter();

  const { submitterId } = router.query;
  const userId = JSON.parse(submitterId);
  const { myRecipes } = useMyRecipes(userId);
  if (!userId || !myRecipes[0]) {
    return <div>Loading...</div>
  };  
  const userRecipes = `${myRecipes[0]['user_name']}\'s Recipes`;

  console.log(myRecipes);
  // template
  return (
    <div>
      <NavBar />
      <Spacer />
      <Header title={userRecipes}/>
      <Spacer />
      <BrowseOptions />
      <div className="browse-body" >
        <UserRecipeList userId={userId}/>
      </div>
      {/* <Spacer /> */}
    </div>
  );
};
