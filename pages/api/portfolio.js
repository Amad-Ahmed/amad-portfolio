const portfolio = [
  {
    id: 0,
    projectName: "Anime-based Art using GAN",
    url: "https://github.com/Amad-Ahmed/Anime-based-Art-using-GAN",
    image: "projects/anime-2.png",
    projectDetail:
      "The problem addressed in this project revolves around generating Anime Faces using a GAN model with the additional capability of selecting hair color",
    technologiesUsed: [
      {
        tech: "Python",
      },
      {
        tech: "TensorFlow",
      },
      {
        tech: "PyQt5",
      },
      {
        tech: "Pandas",
      },
    ],
  },
  {
    id: 1,
    projectName: "AceVision (Final Year Project)",
    url: "#",
    image: "projects/acevision-backend.png",
    projectDetail:
      "A Tennis Analytics System that provides a comprehensive solution for tennis players and coaches. It utilizes advanced CV techniques to analyze player performance, track ball trajectories, and generate insightful statistics. The system is designed to enhance training sessions, improve gameplay strategies, and provide valuable feedback for skill development.",
    technologiesUsed: [
      {
        tech: "Python",
      },
      {
        tech: "TensorFlow",
      },
      {
        tech: "PyQt5",
      },
      {
        tech: "Pandas",
      },
      {
        tech: "PyTorch",
      },
      {
        tech: "OpenCV",
      },
      {
        tech: "FastAPI",
      },
      { tech: "Docker" },
    ],
  },
  {
    id: 2,
    projectName: "AceVision (Website)",
    url: "#",
    image: "projects/acevision-website.png",
    projectDetail:
      "A marketing website for AceVision, a Tennis Analytics System that provides a comprehensive solution for tennis players and coaches. It utilizes advanced CV techniques to analyze player performance, track ball trajectories, and generate insightful statistics. The system is designed to enhance training sessions, improve gameplay strategies, and provide valuable feedback for skill development.",
    technologiesUsed: [
      {
        tech: "Next.js",
      },
      {
        tech: "Tailwind CSS",
      },
      {
        tech: "Vercel",
      },
    ],
  },
  {
    id: 3,
    projectName: "CardioVascular Disease Prediction",
    url: "#",
    image: "projects/Cardio.png",
    projectDetail:
      "A web application that predicts the likelihood of cardiovascular diseases using machine learning algorithms. The application is built using FastAPI and React.js, providing a user-friendly interface for inputting patient data and receiving predictions.",
    technologiesUsed: [
      {
        tech: "Python",
      },
      {
        tech: "Pandas",
      },
      {
        tech: "Scikit-learn",
      },
      {
        tech: "FastAPI",
      },
      {
        tech: "Docker",
      },
      {
        tech: "React.js",
      },
    ],
  },
  {
    id: 4,
    projectName: "FlatBuddy",
    url: "#",
    image: "projects/flatbuddy.png",
    projectDetail:
      "A mobile app developed to allow users to pick rooms, houses and flats based on their personal preferences. The project was developed to cater to the issue of users being unable to find the right place to live in. The app allows users to select their preferences and find the best match for them.",
    technologiesUsed: [
      {
        tech: "Flutter",
      },
      {
        tech: "Firebase",
      },
      {
        tech: "Dart",
      },
    ],
  },
  {
    id: 5,
    projectName: "Votingiva",
    url: "https://github.com/Amad-Ahmed/VOTINGIVA-Sqlite",
    image: "projects/votingiva.png",
    projectDetail:
      "Votingiva is an online poll based social media platform which allows users to create polls and vote on them. The platform was developed in Java and MySQL was used as a backend service.",
    technologiesUsed: [
      {
        tech: "Java",
      },
      {
        tech: "MySQL",
      },
    ],
  },
];
export default function handler(req, res) {
  res.status(200).json(portfolio);
}
