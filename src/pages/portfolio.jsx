import Project from "../components/pROJECTS.JSX";


// Data for each project in the portfolio
const projectData = [
  {
    title: "GameChaser",
    image: "./public/images/gamechaser.png",
    projectLink: "https://gamechaser-wlza.onrender.com/",
    githubLink: "https://github.com/haartmuhn/GameChaser",
  },
  {
    title: "Brew Finder",
    image: "./public/images/brewfinder.png",
    projectLink:"https://jordangwiz.github.io/My-Brew-Finder/",
    githubLink:"https://github.com/JordanGWiz/My-Brew-Finder",
  },
  {
    title: "Weather Tracker",
    image: "./public/images/WeatherTracker.png",
    projectLink:"https://justino11247.github.io/Weather-Tracker/",
    githubLink:"https://github.com/Justino11247/Weather-Tracker",
  },
  {
    title: "Dear Diary",
    image: "./public/images/deardiary.png",
    projectLink:"https://justino11247.github.io/Challenge4-Dear-Diary/",
    githubLink:"https://github.com/Justino11247/Challenge4-Dear-Diary",
  },
  {
    title: "",
    image: "",
    projectLink:"",
    githubLink:"",
  },
  {
    title: "",
    image: "",
    projectLink:"",
    githubLink:"",
  },
];

const Portfolio = () => {
  return (
    <div className="">
      <h1 className="">Portfolio</h1>
      <div className="">
        {projectData.map((project, index) => (
          <Project key={index} title={project.title} image={project.image} projectLink={project.projectLink} githubLink={project.githubLink}/>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;