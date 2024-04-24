// Imports
import "../styles/NavBar.css";
import Link from "next/link";

export default function NavBar() {
  
  let loggedIn = false;

  // check if localStorage is defined
  if (typeof window!== 'undefined') {
    // get logged in status
    loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
  };

  // Template
  return (
    <div className="navbar">
      {!loggedIn ? (
        <ul className="links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/browse">Browse</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul> 
      ) : (
        <ul className="links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <h1>Favourites</h1>
          </li>
          <li>
            {/* <h1>My Recipes</h1> */}
          </li>
          <li>
            <Link href="/browse">Browse</Link>
          </li>
          <li>
            {/* <h1>Logout</h1> */}
          </li>
        </ul> 
      )}
    </div>
  );
}