// Imports
import "../styles/NavBar.css";
import Login from "../pages/login";
import Link from "next/link";

export default function NavBar() {
  
  // Template
  return (
    <div className="navbar">
      <ul className="links">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <Link href="/browse">Browse</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}