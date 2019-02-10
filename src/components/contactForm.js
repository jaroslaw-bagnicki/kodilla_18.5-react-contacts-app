var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
      React.createElement('form', {className: 'contactForm'},
        React.createElement('div', {className: 'formGroup'},
          React.createElement('label', {htmlFor: 'firstName'}, 'First name:'),
          React.createElement('input', {
            id: 'firstName',
            type: 'text'
            // value: this.props.contact.firstName
          })
        ),
        React.createElement('div', {className: 'formGroup'},
          React.createElement('label', {htmlFor: 'lastName'}, 'Last name:'),
          React.createElement('input', {
            id: 'lastName',
            type: 'text'
            // value: this.props.contact.lastName
          })
        ),
        React.createElement('div', {className: 'formGroup'},
          React.createElement('label', {htmlFor: 'email'}, 'Email:'),
          React.createElement('input', {
            id: 'email',
            type: 'email'
            // value: this.props.contact.lastName
          })
        ),
        React.createElement('button', {type: 'submit', className: 'formSubmitButton'}, 'Add contact')
      )
    );
  }
});
