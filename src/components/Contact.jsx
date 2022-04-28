import "../styles/SASS/contact.scss";
const Contact = () => {
  return (
    <section className="contact">
      <h1 className="contact_title">CONTACT</h1>
      <p className="contact_secTitle">
        If you have any questions please contact me.
      </p>
      <form
        action="https://formsubmit.co/remek778790@gmail.com"
        method="POST"
        className="contact_form"
      >
        <input
          type="text"
          name="name"
          className="form_input"
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          className="form_input"
          placeholder="Email"
        />
        <textarea
          type="text"
          name="message"
          className="form_input"
          placeholder="Your message"
          rows={10}
        ></textarea>
        <input
          type="hidden"
          name="_next"
          value="https://remii3.github.io/Portfolio/"
        ></input>
        <div className="form_buttonSpace">
          <button type="submit" className="buttonSpace_button">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
