import "../styles/SASS/portfolio.scss";

const Portfolio = () => {
  const DUMMY_PROJECTS = [
    "asd",
    "asd",
    "asd",
    "asd",
    "asd",
    "asd",
    "asd",
    "asd",
    "asd",
  ];
  const categories = ["ALL", "NEXT", "REACT", "JAVASCRIPT"];
  return (
    <section className="portfolio">
      <h1 className="portfolio_title">Projects</h1>

      <div className="portfolio_projects">
        <div className="projects_categoriesSpace">
          {categories.map((item, index) => (
            <span className="categoriesSpace_category" key={index}>
              {item}
            </span>
          ))}
        </div>
        <div className="projects_linksSpace">
          {DUMMY_PROJECTS.map((item, index) => (
            <div className="linksSpace_link" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
