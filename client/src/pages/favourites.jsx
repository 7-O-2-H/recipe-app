// imports
import "../styles/browse.css";
import NavBar from "../components/NavBar";
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import Favourites from '../components/Favourites'

export default function Browse() {

  // template
  return (
    <div>
      <NavBar />
      <Spacer />
      <Header title="Favourites" />
      <Spacer />
      <div className="browse-body" >
        <Favourites />
      </div>
    </div>
  );
};
