// imports
import '../styles/styles.css';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Spacer from '../components/Spacer';

export default function Home() {

  // template
  return (
   <div>
    <Spacer />
    <NavBar />
    <Spacer />
    <Header title="Codex Epicuria" />
    <Spacer />
   </div>
  );
}
