import { useCallback, useEffect, useState } from "react";

import "../styles/SASS/nav.scss";
import "../../node_modules/hamburgers/_sass/hamburgers/hamburgers.scss";

const Nav = () => {
  const [stickyClass, setStickyClass] = useState({ position: "relative" });
  const [navbarPosition, setNavbarPosition] = useState(0);

  const stickyNavbar = useCallback(() => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;

      windowHeight > navbarPosition
        ? setStickyClass({ position: "fixed", top: "0", left: "0" })
        : setStickyClass({ position: "relative" });
    }
  }, [navbarPosition]);

  useEffect(() => {
    window.addEventListener("scroll", stickyNavbar);
    setNavbarPosition(document.querySelector(".navbar").offsetTop);

    return () => {
      window.removeEventListener("scroll", stickyNavbar);
    };
  }, [stickyNavbar]);

  const moveToHome = () => {
    const homeSection = document.querySelector(".home");
    homeSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const moveToAbout = () => {
    const aboutSection = document.querySelector(".about");
    aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const moveToPortfolio = () => {
    const portfolioSection = document.querySelector(".portfolio");
    portfolioSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const moveToContact = () => {
    const contactSection = document.querySelector(".contact");
    contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const burgerClickHandler = () => {
    document.querySelector(".navbar_burgerSpace").classList.toggle("is-active");
  };

  return (
    <nav className="navbar">
      <div style={stickyClass} className="navbar_container">
        <div className="navbar_insideSpace">
          <button
            className="hamburger hamburger--boring navbar_burgerSpace "
            type="button"
            onClick={() => burgerClickHandler()}
          >
            <span className="hamburger-box burgerSpace_stripeSpace">
              <span className="hamburger-inner stripeSpace_stripe"></span>
            </span>
          </button>
          <input type="checkbox" id="navbar_toggler" />
          <div className="navbar_menu">
            <ul className="menu_list">
              <li className="list_link" onClick={() => moveToHome()}>
                HOME
              </li>
              <li className="list_link" onClick={() => moveToAbout()}>
                ABOUT
              </li>
              <li className="list_link" onClick={() => moveToPortfolio()}>
                PORTFOLIO
              </li>
              <li className="list_link" onClick={() => moveToContact()}>
                CONTACT
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
