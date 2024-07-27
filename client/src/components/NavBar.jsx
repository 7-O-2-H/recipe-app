// Imports
import "../styles/NavBar.css";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useLoggedInStatus } from '../hooks/useLoggedInStatus';

export default function NavBar() {
  
  // set router
  const router = useRouter();

  // use hook to establish logged in status
  let { loggedIn, userName } = useLoggedInStatus();

  //handle logout button click
  const handleLogout = () => {
    loggedIn = false;
    localStorage.setItem("token", '');
    localStorage.setItem("loggedIn", JSON.stringify(false));
    localStorage.setItem("userName", userName);
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
            <Link href="/">{userName}</Link>
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
            <Link href="/" onClick={handleLogout}>Logout</Link>
          </li>
        </ul> 
      )}
    </div>
  );
}