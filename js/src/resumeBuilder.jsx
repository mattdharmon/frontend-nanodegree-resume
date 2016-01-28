// The React Libs.
var React = require('react'),
    ReactDOM = require('react-dom');

// Extra Libraries.
var _ = require('lodash'),
    resumeData = require('./resources/data/resumeData.jsx');

// The Components, require them so that webpack builds them.
var ProfileComponent = require('./components/profileComponent.jsx'),
    ContactComponent = require('./components/contactComponent.jsx'),
    WorkComponent = require('./components/workComponent.jsx');

// Set some global vars (bad practice) so that the helper.js can render the maps.
window.data = resumeData;

window.bio = {
  contacts: {
    location: `${data.profile.location.city}, ${data.profile.location.state}`
  }
};
window.education = {
  schools: [
    {
      location: `${data.profile.location.city}, ${data.profile.location.state}`
    }
  ]
};
var workLocations = [];
_.reduce(data.experience, (result, value, key) => {
  var location = {
    location: value.location.city + ', ' + value.location.state
  };
  result.push(location);
  return result;
}, workLocations);

window.work = {
  jobs: workLocations
};
