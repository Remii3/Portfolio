import "../styles/SASS/portfolio.scss";
import projectsFilter from "../functions/projectsFilter";
import { useState } from "react";
import calculatorImage from "../assets/img/calculator_image.png";
import netflixImage from "../assets/img/netflix_image.png";
import todoImage from "../assets/img/todo_image.png";
import weatherImage from "../assets/img/weather_image.png";
import huluImage from "../assets/img/hulu_image.png";
import dishesFormImage from "../assets/img/dishForm_image.png";
import foodDeliveryImage from "../assets/img/foodDelivery_image.png";
import oneHandedBanditImage from "../assets/img/oneHandedBandit_image.png";

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
    {
      img: todoImage,
      link: "https://remii3.github.io/Todo/",
      tech: "REACT",
    },
    {
      img: weatherImage,
      link: "https://remii3.github.io/WeatherForecast/",
      tech: "REACT",
    },
    {
      img: netflixImage,
      link: "https://netflix-database-c4dbd.web.app",
      tech: "REACT",
    },
    {
      img: calculatorImage,
      link: "https://remii3.github.io/Calculator/",
      tech: "JAVASCRIPT",
    },
    {
      img: huluImage,
      link: "https://hulu-copy-bxidmyla9-remii3.vercel.app/",
      tech: "NEXT",
    },
    {
      img: dishesFormImage,
      link: "https://remii3.github.io/Dishes-form/",
      tech: "REACT",
    },
    {
      img: foodDeliveryImage,
      link: "https://remii3.github.io/food-delivery/",
      tech: "REACT",
    },
    {
      img: oneHandedBanditImage,
      link: "https://remii3.github.io/One-handed-bandit/",
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
                <img src={item.img} alt="photo_link" className="link_image" />
                <a className="link_photoLink" href={item.link}>
                  Learn more
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
