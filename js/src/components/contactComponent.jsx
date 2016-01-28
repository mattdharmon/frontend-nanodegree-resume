var React = require('react');
var _ = require('lodash');

// The list item for each contact.
var ContactItemComponent = React.createClass({
  render: function() {
    return (
        <li className="flex-item">
          <span className="orange-text">{this.props.type}</span>
          <span className="white-text">{this.props.detail}</span>
        </li>
    );
  }
});

// The Contacts themselves.
module.exports = React.createClass({
  render() {
    var contactNodes = _.map(this.props, (contact) => {
      return (
          <ContactItemComponent key={contact.id} type={contact.type} detail={contact.detail} ></ContactItemComponent>
      );
    });
    return (
      <ul className="flex-box">
        {contactNodes}
      </ul>
    );
  }
});
