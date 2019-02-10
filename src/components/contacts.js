var Contacts = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired
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
