import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./navbar.css";
import Navbar_admin from "./Navbar_admin";
import {
  isAuthenticated,
  isAdmin,
  TOKEN_COOKIE_NAME,
  decodeToken,
  logOut,
} from "../../utils/authUtils";
import { useCookies } from "react-cookie";
import Calendary from "../calendary/Calendary";

function Navbar() {
  const [cookies, setCookie, removeCookie] = useCookies([TOKEN_COOKIE_NAME]);

  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated(cookies));
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false); 

  const isAdminUser = isAdmin(cookies);
  const token = decodeToken(cookies[TOKEN_COOKIE_NAME]);

  const toggleModalMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleModalCalendar = () => {
    console.log("Toggling calendar modal");
    setIsCalendarOpen((prev) => !prev);
  };

  useEffect(() => {
    const authenticated = isAuthenticated(cookies);
    setIsLoggedIn(authenticated);
  }, [cookies]);

  const handleLogout = () => {
    logOut(removeCookie);
  };

  return (
    <Router>
      <nav className="navbar_user_desktop">
        <section className="navbar_user_desktop--left">
          <Link to="/" className="logo_link">
            <img
              src="/images/logo_words.png"
              alt="Oviva Logo"
              className="navbar_desktop--logo"
            />
          </Link>
        </section>
        <section className="navbar_user_desktop--center">
          <Link to="/preguntas">Preguntas</Link>
          <Link to="/expertos">Expertos</Link>
          <Link to="/blog">Blog</Link>
          {isLoggedIn && <Link to="/recetas">Recetas</Link>}
          {isLoggedIn && <Link to="/videos">Videos</Link>}
        </section>
        <section className="navbar_user_desktop--right">
          {isLoggedIn ? (
            <section className="navbar_user_desktop--right__left">
              <button className="button_calendar" onClick={toggleModalCalendar}>
                <img
                  src="/images/icons/icon_calendar.svg"
                  className="navbar_user_desktop--icon_calendar"
                  alt="Calendar icon"
                />
              </button>
              <section className="navbar_desktop--greeting_and_logout">
                {token && token.first_name && (
                  <section className="navbar_desktop--greeting">
                    ¡Hola,
                    <br />
                    {token.first_name}!
                  </section>
                )}
                <button onClick={handleLogout} className="button_logout">
                  <img
                    src="/images/icons/icon_logout.svg"
                    className="navbar_desktop--icon_logout"
                    alt="Logout icon"
                  />
                </button>
              </section>
            </section>
          ) : (
            <Link to="/profile" className="link_profile">
              <img
                src="/images/icons/icon_profile_female.svg"
                className="navbar_desktop--icon_profile"
                alt="User icon"
              />
            </Link>
          )}
        </section>

        <section className={`modal_calendar calendar_desktop ${isCalendarOpen ? "open" : ""}`}>
          <Calendary />
        </section>
      </nav>

      <nav className="navbar_user_mobile">
        <section className="navbar_user_mobile--left">
          <img src="/images/logo_no_words.png" alt="Logo Oviva" />
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
                  src="/images/icons/icon_calendar.svg"
                  className="navbar_user_mobile--icon_calendar"
                  alt="Calendar icon"
                />
              </button>
            </>
          ) : (
            <img
              src="/images/icons/icon_profile_female.svg"
              alt="User icon"
              className="navbar_mobile--icon_profile"
            />
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
                src="/images/icons/icon_logout.svg"
                className="navbar_mobile--icon_logout"
                alt="Logout icon"
              />
            </button>
          ) : null}
        </section>

        <section className={`modal_menu ${isMenuOpen ? "open" : ""}`}>
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

        <section className={`modal_calendar calendar_mobile ${isCalendarOpen ? "open" : ""}`}>
          <Calendary />
        </section>
      </nav>

      {isAdminUser && <Navbar_admin />}
    </Router>
  );
}

export default Navbar;
