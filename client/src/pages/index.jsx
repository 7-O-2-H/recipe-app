// imports
import '../styles/styles.css';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import FullRecipe from '../components/FullRecipe';
import useAppData from '../hooks/useAppData';

export default function Home() {

  const { allRecipes } = useAppData();

  console.log("all recs:", allRecipes, "\nnumber of recipes: ", allRecipes.length)
  
  // template
  return (
   <div>
    <NavBar />
    <Spacer />
    <Header title="Add to Taste" />
    <Spacer />
    <FullRecipe />
   </div>
  );
}
