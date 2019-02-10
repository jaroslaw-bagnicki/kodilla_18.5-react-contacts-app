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
      React.createElement('div', {className: 'contactItem'},
        React.createElement('img', {
          className: 'contactImage',
          src: 'assets/profile-placeholder.jpg'
        }),
        React.createElement('p', {className: 'contactLabel'}, 'First name: ' + this.props.item.firstName),
        React.createElement('p', {className: 'contactLabel'}, 'Last name: ' + this.props.item.lastName),
        React.createElement('p', {className: 'contactLabel'}, 'Mail: ',
          React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email},  this.props.item.email)
        )
      )
    );
  }
});
