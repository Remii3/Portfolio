import "../styles/SASS/portfolio.scss";
import projectsFilter from "../functions/projectsFilter";
import { useState } from "react";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState({
    activeObject: 0,
    categories: [
      { id: 0, name: "ALL" },
      { id: 1, name: "NEXT" },
      { id: 2, name: "REACT" },
      { id: 3, name: "JAVASCRIPT" },
    ],
  });
  const listOfProjects = [
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

  const selectCategoryHandler = (id) => {
    setSelectedCategory({ ...selectedCategory, activeObject: id });
  };

  const selectCategoryStylesHandler = (id) => {
    if (selectedCategory.activeObject === id) {
      return "categoriesSpace_category-active";
    } else {
      return "";
    }
  };

  return (
    <section className="portfolio">
      <h1 className="portfolio_title">PROJECTS</h1>

      <div className="portfolio_projects">
        <div className="projects_categoriesSpace">
          {selectedCategory.categories.map((item, index) => (
            <span
              className={`categoriesSpace_category ${selectCategoryStylesHandler(
                item.id
              )}`}
              key={index}
              onClick={() => selectCategoryHandler(item.id)}
            >
              {item.name}
            </span>
          ))}
        </div>
        <div className="projects_linksSpace">
          {projectsFilter(listOfProjects, selectedCategory.activeObject).map(
            (item, index) => (
              <div className="linksSpace_link" key={index}>
                <a href={item.link}>
                  <img src={item.img} alt="photo_link" />
                </a>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
