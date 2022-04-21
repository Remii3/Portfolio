import "../styles/SASS/contact.scss";
const Contact = () => {
  return (
    <section className="contact">
      <h1 className="contact_title">Contact</h1>
      <p className="contact_secTitle"></p>
      <form className="contact_form">
        <input type="text" className="form_name" />
        <input type="text" className="form_email" />
        <input type="text" className="form_message" />
        <div className="form_buttonSpace">
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
