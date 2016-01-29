var React = require('react'),
    ReactDOM = require('react-dom'),
    _ = require('lodash'),
    resumeData = require('./../resources/data/resumeData.jsx');

var SkillItem = React.createClass({

  render() {
    return <li className="flex-item"><span className="white-text">{this.props.skill}</span></li>;
  }
});

// Build the Profile Section.
var ProfileComponent = React.createClass({
  render() {
    // get the list of skills.
    var skills = _.map(this.props.skills, (skill) => {
      return <SkillItem key={skill.id} {...skill}/>;
    });
    return (
      <div>
        <h1 id="name">{this.props.first_name} {this.props.last_name}</h1>
        <span>{this.props.title}</span><hr />
        <div id="topContacts" className="flex-box"></div>
        <img src={this.props.biopic} className="biopic"/>
        <span className="welcome-message">{this.props.welcome_message}</span>
        <h3 id="skills-h3">Skills at a Glance:</h3>
        <ul id="skills" className="flex-box">
          {skills}
        </ul>
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
