var React = require('react'),
    ReactDOM = require('react-dom'),
    resumeData = require('./../resources/data/resumeData.jsx');

// Build the Profile Section.
var ProfileComponent = React.createClass({
  render() {
    return (
      <div>
        <h1 id="name">{this.props.first_name} {this.props.last_name}</h1>
        <span>{this.props.title}</span><hr />
      </div>
    );
  }
});

// Render!
ReactDOM.render(
    <ProfileComponent {...resumeData.profile} />,
    document.getElementById('profile')
);

module.exports = ProfileComponent;
