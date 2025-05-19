const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "NUST",
        degree: "BS, Computer Science",
        detail:
          "Bachelor's Degree in Computer Science from SEECS, NUST Islamabad",
        year: "2020-2024",
      },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: "Sila Insights",
        role: "Python Developer",
        url: "https://www.silainsights.com/our-team/",
        desc: "As a Python developer, I am responsible for developing custom web crawlers, data pipelines, and data processing scripts to extract, transform, and load data from various sources into our database.",
        year: "02/2024 - Present",
        location: "Dubai, UAE",
      },
      {
        id: 2,
        title: "Cognitive HealthCare International",
        role: "Full Stack Developer",
        url: "https://www.cognitivehealthintl.com/",
        desc: "As a Full Stack Developer, I contributed to the development and maintenance of a Remote Patient Monitoring (RPM) system, improving healthcare service efficiency. I built scalable backend APIs using Nest.js and Prisma, and leveraged Python for automation, data processing, and generating PDF reports—cutting manual work by 80%.",
        year: "06/2023 - 02/2024",
        location: "Islamabad, Pakistan",
      },
      {
        id: 3,
        title: "MiTech",
        role: "Full Stack App Developer",
        url: "no website",
        desc: "As a Full Stack Developer, I built web and mobile applications for international and local clients, focusing on performance, scalability, and intuitive user experiences. I developed responsive UIs with React, cross-platform mobile apps with Flutter, and robust backend services using Nest.js with efficient API integrations.",
        year: "11/2022 - 04/2023",
        location: "Islamabad, Pakistan",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
