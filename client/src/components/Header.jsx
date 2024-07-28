import "../styles/Header.css";
import BurgerMenu from "./BurgerMenu";
import Spacer from "./Spacer";
import { useLoggedInStatus } from "../hooks/useLoggedInStatus";

export default function Header(props) {
  
  const title = props.title;
  
  let { loggedIn, userName } = useLoggedInStatus();

  // Template
  return (
    <div className="mobile-header">
      <div className="mobile-header-items">

      <BurgerMenu />
      <h1>{title}</h1>
      {loggedIn ? (
        <h3 className="user-name">
          {userName}
        </h3>
      ) : (
        <h3></h3>
      )}
      </div>
      {/* <Spacer /> */}
    </div>
  );
}