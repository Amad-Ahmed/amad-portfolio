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
];
export default function handler(req, res) {
  res.status(200).json(recommendationCard);
}
