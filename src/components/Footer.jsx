import "../styles/SASS/footer.scss";

const Footer = () => {
  const socialMediaLinks = [
    { img: "fa-brands fa-github", link: "https://github.com/Remii3" },
    {
      img: "fa-brands fa-linkedin",
      link: "https://www.linkedin.com/in/remigiusz-wo%C5%BAniak-1244a5230/",
    },
  ];
  return (
    <section className="footer">
      <div className="footer_linksSpace">
        {socialMediaLinks.map((item, index) => (
          <a className="linksSpace_link" href={item.link} key={index}>
            <i className={item.img} />
          </a>
        ))}
      </div>
      <p className="footer_copyright">RemigiuszWoźniak©2022</p>
    </section>
  );
};

export default Footer;
