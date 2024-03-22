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
          <Link href="/login">LOGIN</Link>
        </li>

  

              
        
           
  

      </ul>
    </div>
  );
}