// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: "Muhammad Asim",
    image: "images/asim-bhai.jpg",
    designation: "Team Lead Marketing at Hack Club, NUST",
    view: "Amad is a student with innovative ideas & have a thirst for knowledge that will help him achieve his milestones. I have always found him determined & dedicated towards his field. I wish him best of luck for the future 🚀",
    linkednURL: "https://www.linkedin.com/in/asim-khaskheli/",
  },
  {
    id: 1,
    name: "Muhammad Faraz Khan",
    image: "images/fraz-bhai.jpg",
    designation: "Software Engineer at Cognitive HealthCare International",
    view: "I had the opportunity to work with Amad Siddiqui at CHI-Technologies, where he quickly proved himself as a capable and eager backend developer. Amad was always open to feedback, asked the right questions, and showed genuine curiosity to learn and grow. It was rewarding to see his progress, and I’m confident he’ll continue to thrive in any technical team he joins",
    linkednURL: "https://www.linkedin.com/in/farazkhan455/",
  },
];
export default function handler(req, res) {
  res.status(200).json(recommendationCard);
}
