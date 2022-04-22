import "../styles/SASS/footer.scss";

const Footer = () => {
  const socialMediaLinks = [
    { img: "", link: "" },
    { img: "", link: "" },
  ];
  return (
    <section className="footer">
      <div className="footer_linksSpace">
        {socialMediaLinks.map((item, index) => (
          <a className="linksSpace_link" href={item.link} key={index}>
            <img src={item.img} alt="photo_link" />
          </a>
        ))}
      </div>
      <p className="footer_copyright">RemigiuszWoźniak©2022</p>
    </section>
  );
};

export default Footer;
