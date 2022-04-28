import "../styles/SASS/about.scss";

import profileImage from "../assets/img/IMG_3354 ret kadr.jpg";

const About = () => {
  const techStack = [
    "HTML",
    "CSS",
    "Sass",
    "Styled-Components",
    "Tailwind",
    "JS ES6",
    "Axios",
    "Rest",
    "React.js",
    "Redux",
    "Next.js",
    "GIT",
    "Firebase",
  ];

  const moveToContact = () => {
    const contactSection = document.querySelector(".contact");
    contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="about">
      <div className="about_headline">
        <h1 className="headline_title">ABOUT</h1>
        <img src={profileImage} alt="my_photo" className="headline_image" />
      </div>
      <div className="about_informationSpace">
        <div className="informationSpace_me">
          <h1 className="me_title">Who am I? </h1>
          <p className="me_description">
            I'm a Front-End Developer with a passion for animations and creating
            intuitive user experience.
          </p>
          <span className="me_contact" onClick={() => moveToContact()}>
            Let's create a project together.
          </span>
        </div>
        <div className="informationSpace_techStack">
          <h1 className="techStack_title">Technologies I use</h1>
          <div className="techStack_itemSpace">
            {techStack.map((item, index) => (
              <p key={index} className="itemSpace_item">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
