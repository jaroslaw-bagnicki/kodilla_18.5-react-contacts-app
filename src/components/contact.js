var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.shape({
      firstName: React.PropTypes.string.isRequired,
      lastName: React.PropTypes.string.isRequired,
      email: React.PropTypes.string.isRequired,
      src: React.PropTypes.string
    }).isRequired
  },
  render: function() {
    return (
      React.createElement('li', {className: 'contactItem'},
        React.createElement('img', {
          className: 'contactImage',
          src: 'assets/profile-placeholder.jpg'
        }),
        React.createElement('div', {className: 'contactDetails'},
          React.createElement('p', {className: 'contactLabel'},
            React.createElement('span', {className: 'contactFirstName'}, this.props.item.firstName), ' ',
            React.createElement('span', {className: 'contactLastName'}, this.props.item.lastName)
          ),
          React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email},  this.props.item.email)
        )
      )
    );
  }
});
