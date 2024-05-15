import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./navbar.css";
import Navbar_admin from "./Navbar_admin";
import {
  isAuthenticated,
  isAdmin,
  TOKEN_COOKIE_NAME,
  decodeToken,
  logOut
} from "../../utils/authUtils";
import { useCookies } from "react-cookie";

function Navbar() {
  const [cookies, setCookie, removeCookie] = useCookies([TOKEN_COOKIE_NAME]);
  
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated(cookies));
  const [isOpen, setIsOpen] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const isAdminUser = isAdmin(cookies);
  const token = decodeToken(cookies[TOKEN_COOKIE_NAME]);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  
  useEffect(() => {
    const authenticated = isAuthenticated(cookies);
    setIsLoggedIn(authenticated);
  }, [cookies]); // Actualizar isLoggedIn cuando cambian las cookies

  const handleLogout = () => {
    logOut(removeCookie); // Llama a la función logOut para cerrar sesión
  };


  return (
    <Router>
      <nav className="navbar_user_desktop">
        <section className="navbar_user_desktop--left">
          <Link to="/" className="logo_link">
            <img
              src="/images/logo_words.png"
              alt="Oviva Logo"
              className="navbar_desktop_logo"
            />
          </Link>
        </section>
        <section className="navbar_user_desktop--center">
          <Link to="">Preguntas</Link>
          <Link to="">Expertos</Link>
          <Link to="">Blog</Link>
          {isLoggedIn && <Link to="">Recetas</Link>}
          {isLoggedIn && <Link to="">Videos</Link>}
        </section>
        <section className="navbar_user_desktop--right">
          {" "}
          {isLoggedIn ? (
            <section className="navbar_user_desktop--right-left">
              {token && token.first_name && (
              <section className="navbar_desktop_greeting">
                ¡Hola,
                <br />
                {token.first_name}!
              </section>)}
              <button onClick={handleLogout} className="button_logout">
                <img src="/images/icons/icon_logout.svg" alt="Logout icon" />
              </button>
            </section>
          ) : (
            <Link to="/profile" className="link_profile">
              <img
                src="/images/icons/icon_profile_female.svg"
                alt="User icon"
              />
            </Link>
          )}
        </section>
      </nav>

      <nav className="navbar_user_mobile">
        <section className="navbar_user_mobile--left">
          <img src="/images/logo_no_words.png" alt="Logo Oviva" />
        </section>
        <section className="navbar_user_mobile--right">
          {isLoggedIn ? (
            <React.Fragment>
              {token && token.first_name && (
                <section className="navbar_mobile_greeting">
                ¡Hola,
                <br />
                {token.first_name}!
              </section>
              )}
              <button onClick={handleLogout} className="button_logout">
                <img src="/images/icons/icon_logout.svg" alt="Logout icon" />
              </button>
            </React.Fragment>
          ) : (
            <img
              src="/images/icons/icon_profile_female.svg"
              alt="User icon"
              className="navbar_mobile_profile_icon"
            />
          )}
          <input
            type="checkbox"
            className="toggle_menu"
            id="toggle_menu"
            checked={isOpen}
            onChange={toggleMenu}
          />
          <label htmlFor="toggle_menu" className="navbar_mobile_hamburger_icon">
            &#9776;
          </label>
        </section>
        <section className={`modal_menu ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/preguntas">Preguntas</Link>
            </li>
            <li>
              <Link to="/expertos">Expertos</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            {isLoggedIn && (
              <li>
                <Link to="/recetas">Recetas</Link>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <Link to="/videos">Videos</Link>
              </li>
            )}
          </ul>
        </section>
      </nav>

      {isAdminUser && <Navbar_admin />}
    </Router>
  );
}

export default Navbar;
