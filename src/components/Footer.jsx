import "../styles/SASS/footer.scss";

const Footer = () => {
  const socialMediaLinks = ["svg1", "svg2"];
  return (
    <section className="footer">
      <div className="footer_linksSpace">
        {socialMediaLinks.map((item, index) => (
          <a className="linksSpace_link" href="#" key={index}>
            {item}
          </a>
        ))}
      </div>
      <p className="footer_copyright">RemigiuszWoźniak 2022</p>
    </section>
  );
};

export default Footer;
