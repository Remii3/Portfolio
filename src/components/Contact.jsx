import "../styles/SASS/contact.scss";
const Contact = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contact">
      <h1 className="contact_title">Contact</h1>
      <p className="contact_secTitle">
        If you have any questions please contact me
      </p>
      <form className="contact_form" onSubmit={() => submitHandler()}>
        <input type="text" className="form_input" />
        <input type="text" className="form_input" />
        <input type="text" className="form_input" />
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
