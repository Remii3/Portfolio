import "../styles/SASS/home.scss";

const Home = () => {
  const moveToAbout = () => {
    const aboutSection = document.querySelector(".about");
    aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="home">
      <p id="stars"></p>
      <p id="stars2"></p>
      <p id="stars3"></p>
      <div className="home_titleSpace">
        <div className="titleSpace_title">
          <p className="title_firstLine">
            Hello, I'm <span className="firstLine_name">Remigiusz Woźniak</span>
            .
          </p>
          <p className="title_secondLine">I'm a front-end web developer.</p>
        </div>
        <button className="titleSpace_button" onClick={() => moveToAbout()}>
          Show more
        </button>
      </div>
    </section>
  );
};

export default Home;
