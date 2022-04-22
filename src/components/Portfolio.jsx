import "../styles/SASS/portfolio.scss";
import projectsFilter from "../functions/projectsFilter";
import { useState } from "react";

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState("ALL");
  const DUMMY_PROJECTS = [
    { img: "", link: "https://remii3.github.io/Todo/", tech: "REACT" },
    {
      img: "",
      link: "https://remii3.github.io/WeatherForecast/",
      tech: "REACT",
    },
    { img: "", link: "https://netflix-database-c4dbd.web.app", tech: "REACT" },
    {
      img: "",
      link: "https://remii3.github.io/Calculator/",
      tech: "JAVASCRIPT",
    },
  ];

  const categories = ["ALL", "NEXT", "REACT", "JAVASCRIPT"];

  const selectCategoryHandler = (e) => {
    setSelectedFilter(e.target.innerText);
  };

  return (
    <section className="portfolio">
      <h1 className="portfolio_title">Projects</h1>

      <div className="portfolio_projects">
        <div className="projects_categoriesSpace">
          {categories.map((item, index) => (
            <span
              className="categoriesSpace_category"
              key={index}
              onClick={(e) => selectCategoryHandler(e)}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="projects_linksSpace">
          {projectsFilter(DUMMY_PROJECTS, selectedFilter).map((item, index) => (
            <div className="linksSpace_link" key={index}>
              <a href={item.link}>
                <img src={item.img} alt="photo_link" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
