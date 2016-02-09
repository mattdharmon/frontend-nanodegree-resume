var React = require('react'),
    _ = require('lodash');

// The online school items.
var OnlineSchoolItemComponent = React.createClass({
  render() {
    return (
        <div className="education-entry">
          <a href={this.props.url}>{this.props.title} - {this.props.school}</a>
          <div className="date-text">{this.props.date}</div>
        </div>
    );
  }
});

var MajorItemComponent = React.createClass({
  render() {
    return <li><em>{this.props.degree}</em></li>;
  }
});

// The School item that displays each jobs information.
var SchoolItemComponent = React.createClass({
  render() {
    var majorNodes = _.map(this.props.majors, (value) => {
      return <MajorItemComponent key={value.id} {...value} />;
    }, []);

    return (
        <div className="education-entry">
          <a href={this.props.url}>{this.props.name} - {this.props.degree}</a>
          <div className="date-text">{this.props.dates}</div>
          <div className="location-text">{this.props.location}</div>
          <em><br/>Majors:</em>
            <ul>{majorNodes}</ul>
        </div>
    );
  }
});

// The Education Section.
var EducationComponent = React.createClass({
  render() {
    var educationNodes = _.map(this.props.schools, (school) => {
      return (
          <SchoolItemComponent key={school.id} {...school} ></SchoolItemComponent>
      );
    });

    var onlineNodes = _.map(this.props.onlineCourses, (school) => {
      return (
          <OnlineSchoolItemComponent key={school.id} {...school} ></OnlineSchoolItemComponent>
      );
    });
    return (
        <div id="educationSection">
          {educationNodes}
          <h3>Online Classes</h3>
          {onlineNodes}
        </div>
    );
  }
});

module.exports = EducationComponent;
