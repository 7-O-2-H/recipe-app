// Imports
import "../styles/NavBar.css";
import Link from "next/link";
import { useRouter } from 'next/router';

export default function NavBar() {
  
  // set router
  const router = useRouter();

  // set default login status to false
  let loggedIn = false;

  // check if localStorage is defined
  if (typeof window!== 'undefined') {
    // get logged in status
    loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
  };

  //handle logout button click
  const handleLogout = () => {
    loggedIn = false;
    localStorage.setItem("loggedIn", false);
    router.push('/');
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
            {/* <h1>Favourites</h1> */}
          </li>
          <li>
            {/* <h1>My Recipes</h1> */}
          </li>
          <li>
            <Link href="/browse">Browse</Link>
          </li>
          <li>
            <button className="logoutButton" onClick={handleLogout}>Logout</button>
          </li>
        </ul> 
      )}
    </div>
  );
}