import "../styles/SASS/nav.scss";
import "../../node_modules/hamburgers/_sass/hamburgers/hamburgers.scss";

const Nav = () => {
  const burgerClickHandler = () => {
    document.querySelector(".navbar_burgerSpace").classList.toggle("is-active");
  };

  const moveToHome = () => {};

  const moveToAbout = () => {};

  const moveToPortfolio = () => {};

  const moveToContact = () => {};

  return (
    <nav className="navbar">
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
            <li className="list_link">HOME</li>
            <li className="list_link">ABOUT</li>
            <li className="list_link">PORTFOLIO</li>
            <li className="list_link">CONTACT</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
