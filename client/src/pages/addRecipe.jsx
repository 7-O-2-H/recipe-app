// imports
import '../styles/styles.css';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import AddForm from '../components/addRecipe/AddForm'

export default function AddRecipe() {

  // template
  return (
   <div>
    <NavBar />
    <Spacer />
    <Header title="Add Recips" />
    <Spacer />
    <AddForm />
   </div>
  );
}
