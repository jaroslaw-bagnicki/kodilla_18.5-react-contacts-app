var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
      <form className="contactForm">
        <div className="formGroup"> 
          <label htmlFor="firstName">First name:</label>
          <input type="text" id="firstName" />
        </div>
        <div className="formGroup"> 
          <label htmlFor="lastName">Last name:</label>
          <input type="text" id="lastName" />
        </div>
        <div className="formGroup"> 
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        <button type="submit" className="formSubmitButton">Add contact</button>
      </form>
    );
  }
});
