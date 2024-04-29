// imports
import '../styles/styles.css';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import EditForm from '../components/EditForm';
// hooks
import useAppData from '../hooks/useAppData';
import { useRecipe } from '../hooks/useRecipe';

export default function Edit(recipeData) {
  
  // template
  return (
   <div>
    <NavBar />
    <Spacer />
    <Header title="Edit Recipe" />
    <Spacer />
    <EditForm />
   </div>
  );
}