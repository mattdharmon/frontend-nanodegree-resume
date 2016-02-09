// The React Libs.
var React = require('react'),
    ReactDOM = require('react-dom');

// Extra Libraries.
var _ = require('lodash'),
    resumeData = require('./resources/data/resumeData.jsx');

// The Components, require them so that webpack builds them.
var ProfileComponent = require('./components/profileComponent.jsx'),
    ContactComponent = require('./components/contactComponent.jsx'),
    WorkComponent = require('./components/workComponent.jsx'),
    EducationComponent = require('./components/educationComponent.jsx'),
    ProjectComponent = require('./components/projectsComponent.jsx');

// Render the Profile.
ReactDOM.render(
    <ProfileComponent {...resumeData.profile} />,
    document.getElementById('profile')
);

// Render the Work Experience.
ReactDOM.render(
    <WorkComponent {...resumeData.experience} />,
    document.getElementById('workExperienceContent')
);

// Render the contacts top section!
ReactDOM.render(
    <ContactComponent {...resumeData.profile.contact_info} />,
    document.getElementById('topContacts')
);

// Render the contacts footer section!
ReactDOM.render(
    <ContactComponent {...resumeData.profile.contact_info} />,
    document.getElementById('footerContacts')
);

ReactDOM.render(
    <EducationComponent {...resumeData.education} />,
    document.getElementById('education')
);

// Render the projects.
ReactDOM.render(
    <ProjectComponent {...resumeData.projects} />,
    document.getElementById('projects')
);

// Set some global vars (bad practice) so that the helper.js can render the maps.
window.data = resumeData;

window.bio = {
  contacts: {
    location: `${data.profile.location.city}, ${data.profile.location.state}`
  }
};
window.education = resumeData.education;

var workLocations = _.reduce(data.experience, (result, value, key) => {
  var location = {
    location: value.location.city + ', ' + value.location.state
  };
  result.push(location);
  return result;
}, []);

window.work = {
  jobs: workLocations
};
