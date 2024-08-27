import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";



const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-content">
          <a href="mailto:herrerajustin11@gmail.com">
            <MdEmail />
          </a>
          <a href="https://github.com/Justino11247" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;