var Contacts = React.createClass({
  propTypes: {
    items: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        firstName: React.PropTypes.string.isRequired,
        lastName: React.PropTypes.string.isRequired,
        email: React.PropTypes.string.isRequired,
        src: React.PropTypes.string
      })
    ).isRequired
  },
  render: function() {
    var contacts = this.props.items.map(function(contact) {
      return React.createElement(Contact, {key: contact.id, item: contact});
    });

    return (
      React.createElement('ul', {className: 'contactList'}, contacts)
    );
  }
});
