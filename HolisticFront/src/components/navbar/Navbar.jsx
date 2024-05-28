import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Navbar_admin from "./Navbar_admin";
import {
  isAuthenticated,
  isAdmin,
  TOKEN_COOKIE_NAME,
  decodeToken,
  logOut,
} from "../../utils/authUtils";
import Cookies from 'js-cookie';
import Calendary from "../calendary/Calendary";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false); 

  const isAdminUser = isAdmin();
  const token = decodeToken(Cookies.get(TOKEN_COOKIE_NAME)); 

  const toggleModalMenu = () => {
    setIsMenuOpen((prev) =>!prev);
  };

  const toggleModalCalendar = () => {
    setIsCalendarOpen((prev) =>!prev);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const isLoggedIn = isAuthenticated();
      setIsLoggedIn(isLoggedIn);
    }, 1000);
  
    return () => clearInterval(intervalId);
  }, []);
  

  const handleLogout = () => {
    logOut();
    Cookies.remove(TOKEN_COOKIE_NAME); 
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
    <nav className="navbar_user_desktop">
      <section className="navbar_user_desktop--left">
        <Link to="/" className="logo_link">
          <img
            src="/image/logo_words.png"
            alt="Oviva Logo"
            className="navbar_desktop--logo"
          />
        </Link>
      </section>
      <section className="navbar_user_desktop--center">
        <Link to="/">Inicio</Link>
        <Link to="/faq">Preguntas</Link>
        <Link to="/experts">Expertos</Link>
        <Link to="/blog">Blog</Link>
        {isLoggedIn && <Link to="/user/recipes">Recetas</Link>}
        {isLoggedIn && <Link to="/user/exercise">Videos</Link>}
      </section>
      <section className="navbar_user_desktop--right">
        {isLoggedIn? (
          <section className="navbar_user_desktop--right__left">
            <button className="button_calendar" onClick={toggleModalCalendar}>
              <img
                src="/image/icons/icon_calendar.svg"
                className="navbar_user_desktop--icon_calendar"
                alt="Calendar icon"
              />
            </button>
            <section className="navbar_desktop--greeting_and_logout">
              {token && token.first_name && (
                <section className="navbar_desktop--greeting">
                  ¡Hola,<br />
                  {token.first_name}!
                </section>
              )}
              <button onClick={handleLogout} className="button_logout">
                <img
                  src="/image/icons/icon_logout.svg"
                  className="navbar_desktop--icon_logout"
                  alt="Logout icon"
                />
              </button>
            </section>
          </section>
        ) : (
          <Link to="/login" className="link_profile--desktop">
            <img
              src="/image/icons/icon_profile_female.svg"
              className="navbar_desktop--icon_profile"
              alt="User icon"
            />
          </Link>
        )}
      </section>

      <section className={`modal_calendar calendar_desktop ${isCalendarOpen? "open" : ""}`}>
        <Calendary />
      </section>
    </nav>

    <nav className="navbar_user_mobile">
    <section className="navbar_user_mobile--left">
          <Link to="/" className="logo_link">
            <img src="/image/logo_no_words.png" alt="Logo Oviva" />
          </Link>
        </section>
        <section className="navbar_user_mobile--right">
          {isLoggedIn ? (
            <>
              {token && token.first_name && (
                <section className="navbar_mobile--greeting">
                  ¡Hola,
                  <br />
                  {token.first_name}!
                </section>
              )}
              <button className="button_calendar" onClick={toggleModalCalendar}>
                <img
                  src="/image/icons/icon_calendar.svg"
                  className="navbar_user_mobile--icon_calendar"
                  alt="Calendar icon"
                />
              </button>
            </>
          ) : (
            <Link to="/login" className="link_profile--mobile">
            <img
              src="/image/icons/icon_profile_female.svg"
              alt="User icon"
              className="navbar_mobile--icon_profile"
            />
          </Link>
          )}
          <input
            type="checkbox"
            className="toggle_menu"
            id="toggle_menu"
            checked={isMenuOpen}
            onChange={toggleModalMenu}
          />
          <label
            htmlFor="toggle_menu"
            className="navbar_mobile--icon_hamburger"
          >
            &#9776;
          </label>
          {isLoggedIn ? (
            <button onClick={handleLogout} className="button_logout">
              <img
                src="/image/icons/icon_logout.svg"
                className="navbar_mobile--icon_logout"
                alt="Logout icon"
              />
            </button>
          ) : null}
        </section>

        <section className={`modal_menu ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/faq">Preguntas</Link>
            </li>
            <li>
              <Link to="/experts">Expertos</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            {isLoggedIn && (
              <li>
                <Link to="/user/recipes">Recetas</Link>
                
              </li>
            )}
            {isLoggedIn && (
              <li>
                <Link to="/user/exercise">Videos</Link>
              </li>
            )}
          </ul>
        </section>

        <section className={`modal_calendar calendar_mobile ${isCalendarOpen ? "open" : ""}`}>
          <Calendary />
        </section>
    </nav>

    {isAdminUser && <Navbar_admin />}
    </React.Fragment>
  );
}

export default Navbar;
