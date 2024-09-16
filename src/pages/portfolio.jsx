import Projects from "../components/Projects.jsx";
import { Box, SimpleGrid, Heading, } from "@chakra-ui/react";


// Data for each project in the portfolio
const projectData = [
  {
    title: "GameChaser",
    image: "./public/images/gamechaser.png",
    projectLink: "https://gamechaser-wlza.onrender.com/",
    githubLink: "https://github.com/haartmuhn/GameChaser",
    projectType: "Group Project"
  },
  {
    title: "Brew Finder",
    image: "./public/images/brewfinder.png",
    projectLink:"https://jordangwiz.github.io/My-Brew-Finder/",
    githubLink:"https://github.com/JordanGWiz/My-Brew-Finder",
    projectType: "Group Project"
  },
  {
    title: "Weather Tracker",
    image: "./public/images/WeatherTracker.png",
    projectLink:"https://justino11247.github.io/Weather-Tracker/",
    githubLink:"https://github.com/Justino11247/Weather-Tracker",
    projectType: "Solo Project"
  },
  {
    title: "Dear Diary",
    image: "./public/images/deardiary.png",
    projectLink:"https://justino11247.github.io/Challenge4-Dear-Diary/",
    githubLink:"https://github.com/Justino11247/Challenge4-Dear-Diary",
    projectType: "Solo Project"
  },
  {
    title: "Express Note Taker",
    image: "./public/images/notetaker.png",
    projectLink:"https://express-note-taker-ze7i.onrender.com/",
    githubLink:"https://github.com/Justino11247/Express-Note-Taker",
    projectType: "Solo Project"
  },
  {
    title: "My Employee Payroll Tracker",
    image: "./public/images/Payroll-tracker-application.png",
    projectLink:"https://justino11247.github.io/Challenge3-My-employee-payroll-tracker/",
    githubLink:"https://github.com/Justino11247/Challenge3-My-employee-payroll-tracker",
    projectType: "Solo Project"
  },
];

const Portfolio = () => {
  return (
    <Box
      backgroundImage="./public/images/metalbackground.png"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundAttachment="fixed"
      minHeight="100vh"
      padding={8}
    >
        <Heading as="h1" mb={8} textAlign="center" >
          Portfolio
        </Heading>
        <SimpleGrid columns={[1, null, 2]} spacing={10}>
          {projectData.map((project, index) => (
            <Projects
              key={index}
              title={project.title}
              image={project.image}
              projectLink={project.projectLink}
              githubLink={project.githubLink}
              projectType={project.projectType}
            />
          ))}
        </SimpleGrid>
    </Box>
  );
};

export default Portfolio;