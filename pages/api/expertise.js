const expertise = [
  {
    id: 0,
    title: "Python Developer",
    desc: [
      "Experience in web scraping and ETL pipelines.",
      "Skilled in extracting, transforming, and automating data tasks.",
      "Contributed to large Python codebases with clean, maintainable code.",
      "Familiar with RESTful APIs; built and consumed APIs using FastAPI and Django.",
      "Strong command of libraries like BeautifulSoup, Selenium, and Pandas.",
    ],
  },
  {
    id: 1,
    title: "Scrum and Jira",
    desc: [
      "Proficient in Agile methodologies, particularly Scrum.",
      "Experience in using Jira for project management and issue tracking.",
      "Skilled in sprint planning, daily stand-ups, and retrospectives.",
      "Ability to prioritize tasks and manage backlogs effectively.",
      "Strong communication skills for team collaboration.",
    ],
  },
  {
    id: 2,
    title: "Database Management Systems",
    desc: [
      "Proficient in SQL and NoSQL databases, including PostgreSQL, MySQL, and MongoDB.",
      "Skilled in designing and optimizing database schemas for performance and scalability.",
      "Experience with data modeling, indexing, and query optimization.",
      "Familiar with ORM frameworks like Prisma for efficient database interactions.",
    ],
  },
  {
    id: 3,
    title: "Git and Version Control",
    desc: [
      "Proficient in using Git for version control and collaboration.",
      "Experience with branching, merging, and resolving conflicts.",
      "Familiar with GitHub for code hosting and collaboration.",
      "Skilled in using pull requests and code reviews for quality assurance.",
      "Experience with CI/CD pipelines for automated testing and deployment.",
    ],
  },
  {
    id: 4,
    title: "Backend Development",
    desc: [
      "Experience in building RESTful APIs using Node.js and Express.",
      "Skilled in using Nest.js for scalable and maintainable backend applications.",
      "Familiar with microservices architecture and serverless computing.",
      "Experience with authentication and authorization mechanisms.",
      "Strong understanding of data structures and algorithms.",
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(expertise);
}
