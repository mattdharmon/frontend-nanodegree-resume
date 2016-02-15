// This is horrible practice and would not recommend doing this.
/**
 * This will simulate the data returned from an API endpoint.
 * @TODO: This should be stored in a database and have an API service wrapped around it.
 * @type {Array}
 */
bio = {
  name: "Matthew Harmon",
  title: "Web Developer",
  biopic: "images/my_picture.jpg",
  welcome_message: "If you're good at something, never do it for free.",
  contacts: {
    mobile: "555-555-5346",
    email: "email@mailinator.com",
    location: "Cottage Grove, Wisconsin",
    github: "mattdharmon"
  },
  skills: [
    "Web Development",
    "Android",
    "PHP",
    "ASP.NET",
    "Java",
    "Linux"
  ],
  display: function() {
    var $profile = $(".container #profile");

    // Full Name
    HTMLheaderName = HTMLheaderName.replace("%data%", this.name);
    $profile.append(HTMLheaderName);
    
    // Title
    HTMLheaderRole = HTMLheaderRole.replace("%data%", this.title);
    $profile.append(HTMLheaderRole);
    
    // Contacts Section
    var contacts = "<ul class='flex-box'>"
    + HTMLmobile.replace("%data%", this.contacts.mobile)
    + HTMLemail.replace("%data%", this.contacts.email)
    + HTMLgithub.replace("%data%", this.contacts.github)
    + HTMLlocation.replace("%data%", this.contacts.location)
    + "</ul>";
    var topContacts = "<div id='topContacts' class='flex-box'></div>";
    $profile.append(topContacts);
    $("#topContacts").append(contacts);
    $("#footerContacts").append(contacts);
    
    // Biopic
    HTMLbioPic = HTMLbioPic.replace("%data%", this.biopic);
    $profile.append(HTMLbioPic);
    
    // Welcome Message
    HTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcome_message);
    $profile.append(HTMLwelcomeMsg);
    
    // Skills Header
    $profile.append(HTMLskillsStart);
    
    // Skills
    this.skills.forEach(function(skill) {
       skill = HTMLskills.replace("%data%", skill);
       $("#skills").append(skill); 
    });  
  }
};

work = {
  jobs: [
    {
      employer: "Hardin Design and Development",
      title: "Web Developer",
      dates: "October 2015 - Present",
      location: "Madison, Wisconsin",
      website: "http://hardindd.com",
      description: [
        {
          responsibility: "Development, maintain and implement enterprise software written in PHP and JavaScript"
        },
        {
          responsibility: "Build and code custom software/applications using various programming languages across multiple platforms and operating systems"
        },
        {
          responsibility: "Configure, build and develop custom modules to fit the needs of existing applications"
        },
        {
          responsibility: "Migrate and maintain a MySQL database."
        },
        {
          responsibility: "Conduct in-house application testing before final implementation for clients"
        },
        {
          responsibility: "Gather technical and business requirements"
        }
      ]
    },
    {
      employer: "InfoSec Institute",
      title: "Web Developer",
      dates: "January 2015 - September 2015",
      location: "Madison, Wisconsin",
      website: "http://www.infosecinstitute.com/",
      description: [
        {
          responsibility: "Responsible for the development and maintenance of company's primary web application"
        },
        {
          responsibility: "Served as the Architect Developer on multiple software projects to create, design and develod technical master plans for the creation of web applications utilizing raw data to analyze/forecast trends and assemble technical requirements for multiple teams (Software and Business)"
        },
        {
          responsibility: "Evaluated and analyzed different design specifications with the software development team"
        },
        {
          responsibility: "Designed applications using the \"top down view\" method with project managers and developers"
        },
        {
          responsibility: "Developed test readiness applications"
        },
        {
          responsibility: "Worked in an Agile Development Methodology with SCRUM, daily meetings, sprints"
        },
        {
          responsibility: "Use PHP and the CakePHP framework to create the site as well as APIs"
        }
      ]
    },
    {
      employer: "Johnson Health Tech",
      title: "Web Developer",
      dates: "September 2013 - January 2015",
      location: "Cottage Grove, Wisconsin",
      website: "https://www.johnsonfit.com/",
      description: [
        {
          responsibility: "Written software using various programming languages- PHP, Python, and JavaScript"
        },
        {
          responsibility: "Used frameworks Symfony2, Django Rest, Express, Angular, and a custom built framework"
        },
        {
          responsibility: "Used testing frameworks PHPUnit, Django-unittest, Mocha (with Karma)"
        },
        {
          responsibility: "Helped develop applications using NodeJS and Express, one of which to parse binary messages produced by exercising equipment"
        },
        {
          responsibility: "Created and developed a central API for the company’s e-commerce site using Python"
        },
        {
          responsibility: "Used both SQL databases (MySQL, PostgreSQL) and NoSQL databases (MongoDB, Redis) to support our sites."
        },
        {
          responsibility: "Trained junior developers and cross-trained developers in various programming languages, primarily in PHP"
        },
        {
          responsibility: "Wrote technical documentation for other developers and non developers"
        }
      ]
    }
  ],
  display: function() {
    var $work = $("#workExperienceContent");
    
    // Loop through the jobs and display it.
    this.jobs.forEach(function(job, index) {
      // Create a new work entry.
      $work.append(HTMLworkStart);
      var $workEntry = $(".work-entry:last");
    
      // Employer.
      var jobHeader = HTMLworkEmployer.replace("%data%", job.employer)
        + HTMLworkTitle.replace("%data%", job.title);
      $workEntry.append(jobHeader);
    
      // Work dates.
      $workEntry.append(HTMLworkDates.replace("%data%", job.dates));
    
      // Work Location.
      $workEntry.append(HTMLworkLocation.replace("%data%", job.location));
    
      // Work Details.
      $workEntry.append("<br />");
      job.description.forEach(function(desc) {
        $workEntry.append(HTMLworkDescription.replace("%data%", desc.responsibility));
      });
    });
  }
};

education = {
  schools: [
    {
      name: "Madison Area Technical College",
      location: "Madison, WI",
      degree: 'Certificate',
      dates: "December, 2012",
      url: "http://madisoncollege.edu/",
      majors: [
        "IT - Microsoft Visual Studio.NET Certificate",
        "IT - Professional Developer Java Certificate"
      ]
    }
  ],
  onlineCourses: [
    {
      title: "Front End Developer Nanodegree",
      school: "Udactiy",
      dates: "January 2016 - Present",
      url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ],
  display: function() {
    var $school = $("#educationContent");
    
    // Physical Schools.
    this.schools.forEach(function(school) {
      // Create a new education entry.
      $school.append(HTMLschoolStart);
      var $entry = $(".education-entry:last");
      
      // School Name w/Degree Header
      var header = HTMLschoolName.replace("%data%", school.name)
        + HTMLschoolDegree.replace("%data%", school.degree);
      $entry.append(header);
      
      // Dates
      $entry.append(HTMLschoolDates.replace("%data%", school.dates));
      
      // Location
      $entry.append(HTMLschoolLocation.replace("%data%", school.location));
      
      // Majors
      school.majors.forEach(function(major) {
        $entry.append(HTMLschoolMajor.replace("%data%", major));
      });
    });
    
    // Online Schools.
    $school.append(HTMLonlineClasses);
    this.onlineCourses.forEach(function(school) {
      // Create new Online Entry
      $school.append(HTMLschoolStart);
      var $entry = $(".education-entry:last");
      
      // Title w/SchoolName for header.
      var header = HTMLonlineTitle.replace("%data%", school.title)
        + HTMLonlineSchool.replace("%data%", school.school);
      $entry.append(header);
      
      // Dates
      $entry.append(HTMLonlineDates.replace("%data%", school.dates));
      
      // Website 
      $entry.append(HTMLonlineURL.replace("%data%", school.url));
    });
  }
};

projects = {
  projects: [
    {
      title: "Portfolio",
      dates: "January 2016",
      description: "A Udacity project from the Front End Web Developer Nanodegree where we show off the projects that I have done.",
      images: [
       "images/portfolio.png"
      ],
      url: "https://mattdharmon.github.io/UdacityP1FrontEndProjectPortfolio/"
    }
  ],
  display: function() {
    var $project = $('#projectsContent');
    
    // Loop through projects and append.
    this.projects.forEach(function(project) {
      // Create new Online Entry
      $project.append(HTMLprojectStart);
      var $entry = $(".project-entry:last");
      
      // The title header.
      $entry.append(HTMLprojectTitle.replace("%data%", project.title));
      
      // Dates
      $entry.append(HTMLprojectDates.replace("%data%", project.dates));
      
      // Imgaes.
      $entry.append("<div class='row image-entry'></div>");
      var $imageEntry = $(".image-entry:last");
      project.images.forEach(function(image) {
        $imageEntry.append(HTMLprojectImage.replace("%data%", image));
      });
    });
  }
};


function init() {
    bio.display();
    work.display();
    education.display();
    projects.display();
}

init();