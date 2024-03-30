// imports
import '../styles/styles.css';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import Ingredients from '../components/Ingredients';

export default function Home() {

  // template
  return (
   <div>
    <NavBar />
    <Spacer />
    <Header title="Codex Epicuria" />
    <Spacer />
    <Ingredients />
   </div>
  );
}
