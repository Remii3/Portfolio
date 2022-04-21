import "../styles/SASS/about.scss";
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
    "TypeScript",
    "GIT",
    "Firebase",
  ];

  return (
    <section className="about">
      <div className="about_headline">
        <h1 className="headline_title">ABOUT</h1>
        <img src="#" alt="my_photo" className="headline_image" />
      </div>
      <div className="about_informationSpace">
        <div className="informationSpace_me">
          <h1 className="me_title">Who am I? </h1>
          <p className="me_description">
            I'm a Front-End Developer with a passion for animations and creating
            intuitive user experience.
          </p>
          <p className="me_contact">Let's create a project together.</p>
        </div>
        <div className="informationSpace_techStack">
          <h1 className="techStack_title">Technologies I use</h1>
          {techStack.map((item, index) => (
            <p key={index} className="techStack_item">
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
