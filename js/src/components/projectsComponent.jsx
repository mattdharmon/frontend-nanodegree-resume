var React = require('react'),
    _ = require('lodash');

var ProjectImageItemComponent = React.createClass({
  render() {
    return (
        <div className="col l3 m6 s12">
          <img className="responsive-img" src={this.props.image}/>
        </div>
    );
  }
});

var ProjectItemComponent = React.createClass({
  render() {

    // Render each image component.
    var images = _.map(this.props.images, (image) => {
      return <ProjectImageItemComponent key={image.id} image={image.url} />;
    });

    return (
        <div className="project-entry">
          <a href={this.props.url}>{this.props.title}</a>
          <div className="date-text">{this.props.dates}</div>
          <p><br/>{this.props.description}</p>
          <div className="row">
            {images}
          </div>
        </div>
    );
  }
});

var ProjectComponent = React.createClass({
  render() {
    // Render each project.
    var projects = _.map(this.props, (project) => {
      return <ProjectItemComponent key={project.id} {...project} />;
    });

    return(
        <div id="projectsSection">
          {projects}
        </div>
    );
  }
});

module.exports = ProjectComponent;