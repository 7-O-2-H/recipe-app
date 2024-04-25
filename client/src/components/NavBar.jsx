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
    localStorage.setItem("token", '');
    localStorage.setItem("loggedIn", JSON.stringify(false));
    router.push('/login');
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
            <Link href="/favourites">Favourites</Link>
          </li>
          <li>
            <Link href="/myRecipes">My Recipes</Link>
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