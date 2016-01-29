/**
 * This will simulate the data returned from an API endpoint.
 * @TODO: This should be stored in a database and have an API service wrapped around it.
 * @type {Array}
 */
exports.profile = {
  id: 1,
  first_name: "Matthew",
  last_name: "Harmon",
  title: "Web Developer",
  location: {
    city: "Cottage Grove",
    state: "Wisconsin"
  },
  biopic: "images/my_picture.jpg",
  welcome_message: "If you're good at something, never do it for free.",
  contact_info: [
    {
      id: 1,
      type: "Mobile",
      detail: "555-555-5346"
    },
    {
      id: 2,
      type: "Email",
      detail: "email@mailinator.com"
    }
  ],
  skills: [
    {
      id: 1,
      skill: "Web Development",
    },
    {
      id: 2,
      skill: "Android Development",
    },
    {
      id: 3,
      skill: "PHP",
    },
    {
      id: 4,
      skill: "ASP.NET",
    },
    {
      id: 5,
      skill: "Java",
    },
    {
      id: 6,
      skill: "Linux",
    },
  ]
};
exports.experience = [
  {
    id: 1,
    company: "Hardin Design and Development",
    title: "Web Developer",
    start_date: new Date(2015, 10).toDateString(),
    end_date: "Present",
    location: {
      city: "Madison",
      state: "Wisconsin"
    },
    street: "150 East Gilman Street",
    website: "http://hardindd.com",
    responsibilities: [
      {
        id: 1,
        responsibility: "Development, maintain and implement enterprise software written in PHP and JavaScript"
      },
      {
        id: 2,
        responsibility: "Build and code custom software/applications using various programming languages across multiple platforms and operating systems"
      },
      {
        id: 3,
        responsibility: "Provide support and expertise in front and back end software development for management and clients"
      },
      {
        id: 4,
        responsibility: "Configure, build and develop custom modules to fit the needs of existing applications"
      },
      {
        id: 5,
        responsibility: "Migrate and maintain a MySQL database."
      },
      {
        id: 6,
        responsibility: "Conduct in-house application testing before final implementation for clients"
      },
      {
        id: 7,
        responsibility: "Gather technical and business requirements"
      }
    ]
  },
  {
    id: 2,
    company: "InfoSec Institute",
    title: "Web Developer",
    start_date: new Date(2015, 1).toDateString(),
    end_date: new Date(2015, 9).toDateString(),
    location: {
      city: "Madison",
      state: "Wisconsin"
    },
    street: "",
    website: "http://www.infosecinstitute.com/",
    responsibilities: [
      {
        id: 8,
        responsibility: "Responsible for the development and maintenance of company's primary web application"
      },
      {
        id: 9,
        responsibility: "Served as the Architect Developer on multiple software projects to create, design and develod technical master plans for the creation of web applications utilizing raw data to analyze/forecast trends and assemble technical requirements for multiple teams (Software and Business)"
      },
      {
        id: 10,
        responsibility: "Evaluated and analyzed different design specifications with the software development team"
      },
      {
        id: 11,
        responsibility: "Designed applications using the \"top down view\" method with project managers and developers"
      },
      {
        id: 12,
        responsibility: "Provided support in system administration within Linux and managed various servers"
      },
      {
        id: 13,
        responsibility: "Developed test readiness applications"
      },
      {
        id: 14,
        responsibility: "Worked in an Agile Development Methodology with SCRUM, daily meetings, sprints"
      },
      {
        id: 15,
        responsibility: "Use PHP and the CakePHP framework to create the site as well as APIs"
      }
    ]
  },
  {
    id: 3,
    company: "Johnson Health Tech",
    title: "Web Developer",
    start_date: new Date(2013, 2).toDateString(),
    location: {
      city: "Cottage Grove",
      state: "Wisconsin"
    },
    end_date: new Date(2015, 1).toDateString(),
    street: "",
    website: "https://www.johnsonfit.com/",
    responsibilities: [
      {
        id: 16,
        responsibility: "Written software using various programming languages- PHP, Python, and JavaScript"
      },
      {
        id: 17,
        responsibility: "Used frameworks Symfony2, Django Rest, Express, Angular, and a custom built framework"
      },
      {
        id: 18,
        responsibility: "Used testing frameworks PHPUnit, Django-unittest, Mocha (with Karma)"
      },
      {
        id: 19,
        responsibility: "Helped develop applications using NodeJS and Express, one of which to parse binary messages produced by exercising equipment"
      },
      {
        id: 20,
        responsibility: "Created and developed a central API for the company’s e-commerce site using Python"
      },
      {
        id: 21,
        responsibility: "Used both SQL databases (MySQL, PostgreSQL) and NoSQL databases (MongoDB, Redis) to support our sites."
      },
      {
        id: 22,
        responsibility: "Trained junior developers and cross-trained developers in various programming languages, primarily in PHP"
      },
      {
        id: 23,
        responsibility: "Wrote technical documentation for other developers and non developers"
      }
    ]
  }
];
