import React, { useState } from 'react';
import Link from 'next/link';
import { useLoggedInStatus } from '../hooks/useLoggedInStatus';
import Spacer from './Spacer';
import "../styles/BurgerMenu.css";

export default function BurgerMenu() {

  const [menuOpen, setMenuOpen] = useState(false);

  // use hook to establish logged in status
  let { loggedIn, userName } = useLoggedInStatus();
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  //handle logout button click
  const handleLogout = () => {
    toggleMenu();
    loggedIn = false;
    localStorage.setItem("token", '');
    localStorage.setItem("loggedIn", JSON.stringify(false));
    localStorage.setItem("userName", userName);
    router.push('/login');
  };

  return (
    <div className='burger'>
      <div className="hamburger-button" onClick={toggleMenu}>
        <div style={{ transform: menuOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'none' }}></div>
        <div style={{ opacity: menuOpen ? '0' : '1' }}></div>
        <div style={{ transform: menuOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'none' }}></div>
      </div>
      {loggedIn && (
        <h3 className='user-name'>{userName}</h3>

      )}
      {menuOpen && (
        <div>

        {!loggedIn ? (
          <div className='hamburger-menu'>

            <ul className="menu-items">
              <Spacer />
              <li>
                <Link href="/" className="menu-item" onClick={toggleMenu}>HOME</Link>
              </li>
              <Spacer />
              <li>
                <Link href="/browse" className="menu-item" onClick={toggleMenu}>RECIPES</Link>
              </li>
              <Spacer />
              <li>
                <Link href="/about" className="menu-item" onClick={toggleMenu}>ABOUT</Link>
              </li>
              <Spacer />
              <li>
                <Link href="/login" className="menu-item" onClick={toggleMenu}>LOGIN</Link>
              </li>
              <Spacer />
        
            </ul>
          </div>
        ) : (
          <div className='hamburger-menu'>
            <ul className="menu-items">
              <Spacer />
              <li>
                <Link href="/" className="menu-item" onClick={toggleMenu}>GAMBLE GRUB</Link>
              </li>
              <Spacer />
              <li>
                <Link href="/browse" className="menu-item" onClick={toggleMenu}>BROWSE</Link>
              </li>
              <Spacer />
              <li>
                <Link href="/favourites" className="menu-item" onClick={toggleMenu}>FAVOURITES</Link>
              </li>
              <Spacer />
              <li>
                <Link href="/myRecipes" className="menu-item" onClick={toggleMenu}>MY RECIPES</Link>
              </li>
              <Spacer />
              <li>
                <Link href="/" className="menu-item" onClick={handleLogout}>LOGOUT</Link>
              </li>
              <Spacer />
        
            </ul>
          </div>
        )}
      </div>  
        )}
      </div>
  );
}