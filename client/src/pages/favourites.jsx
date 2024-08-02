// imports
import "../styles/browse.css";
import "../styles/Favourites.css";
import NavBar from "../components/NavBar";
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import Favourites from '../components/Favourites'

export default function Browse() {

  // template
  return (
    <div className="favourites-body" >
      <NavBar />
      <Header title="Add to Taste" />
      <h2 className="browse-title">FAVOURITES</h2>
      <Spacer />
      <div >
        <Favourites />
      </div>
    </div>
  );
};
