import React, { useState } from "react";
// import { BrowserRouter as Router, Link } from 'react-router-dom';
import "./navbar.css";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <>
      <nav className="navbar_user_desktop">
        {/* <section className="navbar_desktop_left">
                <Link to="/">
                    <img src="/images/logo_words.png" alt="Oviva Logo" className='navbar_desktop_logo' />
                </Link>
            </section>
            <section className="navbar_desktop_center">
                <Link to="">Preguntas</Link>
                <Link to="">Expertos</Link>
                <Link to="">Blog</Link>
                {isLoggedIn && <Link to="">Recetas</Link>} 
                {isLoggedIn && <Link to="">Videos</Link>}
            </section>
            <section className="navbar_desktop_right">
                <Link to="">
                    <img src="/images/icons/icon_profile_female.svg" alt="User icon" />
                </Link>
                <section>ES <span className='language_span'>|</span> EN</section> */}
        <section className="navbar_user_desktop--left">
          <img
            src="/images/logo_words.png"
            alt="Oviva Logo"
            className="navbar_desktop_logo"
          />
        </section>
        <section className="navbar_user_desktop--center">
          <section>Preguntas</section>
          <section>Expertos</section>
          <section>Blog</section>
          {isLoggedIn && <section>Recetas</section>}
          {isLoggedIn && <section>Videos</section>}
        </section>
        <section className="navbar_user_desktop--right">
          <img src="/images/icons/icon_profile_female.svg" alt="User icon" />
          <section className="navbar_desktop_language">
            ES <span className="language_span">|</span> EN
          </section>
        </section>
      </nav>

      <nav className="navbar_user_mobile">
      <section className="navbar_user_mobile--left">
        <img src="/images/logo_no_words.png" alt="Logo Oviva" />
      </section>
      <section className="navbar_user_mobile--right">
        <img src="/images/icons/icon_profile_female.svg" alt="User icon" className="navbar_mobile_profile_icon" />
        <input type="checkbox" className="toggle_menu" id="toggle_menu" checked={isOpen} onChange={toggleMenu} />
        <label htmlFor="toggle_menu" className="navbar_mobile_hamburger_icon">&#9776;</label>
      </section>
      <section className={`modal_menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li className="navbar_mobile_language">
            ES <span className="language_span">|</span> EN
          </li>
          <li>Preguntas</li>
          <li>Expertos</li>
          <li>Blog</li>
          {isLoggedIn && <li>Recetas</li>}
          {isLoggedIn && <li>Videos</li>}
        </ul>
        {/* <Router>
            <ul>
                <li className="navbar_mobile_language">
                <Link to="/">ES</Link> <span className="language_span">|</span> <Link to="/">EN</Link>
                </li>
                <li><Link to="/preguntas">Preguntas</Link></li>
                <li><Link to="/expertos">Expertos</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                {isLoggedIn && <li><Link to="/recetas">Recetas</Link></li>}
                {isLoggedIn && <li><Link to="/videos">Videos</Link></li>}
            </ul>
        </Router> */}
      </section>
    </nav>
    </>
  );
  
}

export default Navbar;
