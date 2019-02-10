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
      <li className="contactItem">
        <img src="assets/profile-placeholder.jpg" className="contactImage" />
        <div className="contactDetails">
          <p className="contactLabel">
            <span className="contactFirstName">{this.props.item.firstName} </span>
            <span className="contactLastName">{this.props.item.lastName}</span>
          </p>
          <a href={'mailto:' + this.props.item.email} className="contactEmail">{this.props.item.email}</a>
        </div>
      </li>
    );
  }
});
