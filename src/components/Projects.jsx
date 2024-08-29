import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// component for project card
const Project = ({ title, image, projectLink, githubLink }) => (
  <div className="">
    <Card className="" style={{ width: "18rem", margin: "20px 0" }}>
      <Card.Img className="" variant="top" src={image} alt={title}/>
      <Card.Body>

        <Card.Title className="">{title}</Card.Title>
        <CardLink href={projectLink} icon={FaExternalLinkAlt} text="Project Link"/>
        <CardLink href={githubLink} icon={FaGithub} text="GitHub" />

      </Card.Body>
    </Card>
  </div>
);

// prop type checking 
Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};

// component for a clickable link in the card
const CardLink = ({ href, icon: Icon, text }) => (
  <Card.Link className="" href={href} target="_blank" rel="noopener noreferrer">
    <Icon /> {text}
  </Card.Link>
);

// prop type checking
CardLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
};

export default Project;