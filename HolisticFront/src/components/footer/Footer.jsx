import { Link, BrowserRouter as Router } from "react-router-dom";
import "./footer.css";
import React from "react";

function Footer() {
  return (
    <footer>
      <React.Fragment>
        <section className="footer_left">
          <img
            src="/image/logo_no_words.png"
            alt="Oviva Logo"
            className="footer_logo"
          />
          <section>Oviva © 2024</section>
        </section>
        <section className="footer_center">
          <Link to="/about">
            <section>¿Quién soy?</section>
          </Link>
          <Link to="/privacy_policy">
            <section>Política de privacidad</section>
          </Link>
        </section>
        <section className="footer_right">
          <a
            href="https://www.facebook.com/groups/444935560693383"
            className="link_facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/image/icons/icon_facebook.svg" alt="Facebook logo" />
          </a>
          <a
            href="https://www.instagram.com/holisticovaries/"
            className="link_instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/image/icons/icon_instagram.svg" alt="Instagram logo" />
          </a>
        </section>
      </React.Fragment>
    </footer>
  );
}

export default Footer;
