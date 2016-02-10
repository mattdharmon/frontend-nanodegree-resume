// This is horrible practice and would not recommend doing this.
/**
 * This will simulate the data returned from an API endpoint.
 * @TODO: This should be stored in a database and have an API service wrapped around it.
 * @type {Array}
 */
bio = {
  first_name: "Matthew",
  last_name: "Harmon",
  title: "Web Developer",
  biopic: "images/my_picture.jpg",
  welcome_message: "If you're good at something, never do it for free.",
  contact_info: {
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
  ]
};

work = {
  job: [
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
      start_date: "September 2013 - January 2015",
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
  ]
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
        {
          degree: "IT - Microsoft Visual Studio.NET"
        },
        {
          degree: "IT - Professional Developer Java Certificate"
        }
      ]
    }
  ],
  onlineCourses: [
    {

      title: "Front End Developer Nanodegree",
      school: "Udactiy",
      date: "January 2016 - Present",
      url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ]
};

projects = [
  {
    title: "Portfolio",
    dates: "January 2016",
    description: "A Udacity project from the Front End Web Developer Nanodegree where we show off the projects that I have done.",
    images: [
      {
        url: "images/portfolio.png"
      }
    ],
    url: "https://mattdharmon.github.io/UdacityP1FrontEndProjectPortfolio/"
  }
];
