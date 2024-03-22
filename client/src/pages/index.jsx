// imports
import '../styles/styles.css';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Spacer from '../components/Spacer';

export default function Home() {
  return (
   <div>
    <Spacer />
    <NavBar />
    <Spacer />
    <Header />
    <Spacer />
   </div>
  );
}
