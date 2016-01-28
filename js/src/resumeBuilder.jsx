var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');
var ProfileComponent = require('./components/profileComponent.jsx');
var ContactComponent = require('./components/contactComponent.jsx');
var WorkComponent = require('./components/workComponent.jsx');
var resumeData = require('./resources/data/resumeData.jsx');

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

// Render the React sections.
ReactDOM.render(
    <ProfileComponent {...data.profile} />,
    document.getElementById('profile')
);

ReactDOM.render(
    <ContactComponent {...data.profile.contact_info} />,
    document.getElementById('topContacts')
);

ReactDOM.render(
    <ContactComponent {...data.profile.contact_info} />,
    document.getElementById('footerContacts')
);

ReactDOM.render(
    <WorkComponent {...data.experience} />,
    document.getElementById('workExperienceContent')
);
