var React = require('react');
var _ = require('lodash')

// The Responsibility list items.
var ResponsibilityItemComponent = React.createClass({
  render() {
    return (
        <li> - {this.props.responsibility}</li>
    );
  }
});

// The Work item that displays each jobs information.
var WorkItemComponent = React.createClass({
  render() {
    var responsibilities = _.map(this.props.responsibilities, (responsibility) => {
      return (
          <ResponsibilityItemComponent key={responsibility.id} {...responsibility} />
      );
    });
    return (
        <div className="work-entry">
          <a href={this.props.website}>{this.props.company} - {this.props.title}</a>
          <div className="date-text">{this.props.start_date} - {this.props.end_date}</div>
          <div className="location-text">{this.props.location.city}, {this.props.location.state}</div>
          <br />
          <div className="workDetails">
            <ul type="circle">
              {responsibilities}
            </ul>
          </div>
        </div>
    );
  }
});

// The Work Section.
module.exports = React.createClass({
  render() {
    var workNodes = _.map(this.props, (work) => {
      return (
          <WorkItemComponent key={work.id} {...work} ></WorkItemComponent>
      );
    });
    return (
      <div id="workSection">
        {workNodes}
      </div>
    );
  }
});
