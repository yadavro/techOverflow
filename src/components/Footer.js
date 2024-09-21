import React from "react";
import { useNavigate } from "react-router-dom";
import tech from "../images/tech.png";
import "../util/Footer.css"; // Make sure to import your CSS file

function Footer() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/home");
  };
  const handleQuestion = () => {
    navigate("/questions");
  };
  const handleHelp = () => {
    navigate("/help");
  };
  const handleChat = () => {
    navigate("/Chat");
  };
  const handleAbout = () => {
    navigate("/about");
  };
  const handleLegal = () => {
    navigate("/legal");
  };
  const handleContact = () => {
    navigate("/contact");
  };

  return (
    <footer className="footer">
      <div className="footer-section">
        <img className="logo" onClick={handleLogoClick} src={tech} alt="logo" />
        <ul className="nav-links">
          <li onClick={handleQuestion}>Questions</li>
          <li onClick={handleHelp}>Help</li>
          <li onClick={handleChat}>Chat</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Company</h4>
        <ul className="nav-links">
          <li onClick={handleAbout}>About</li>
          <li onClick={handleLegal}>Legal</li>
          <li onClick={handleLegal}>Privacy policy</li>
          <li onClick={handleContact}>Contact Us</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Social</h4>
        <div className="social-links">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Facebook
          </a>
          <a
            href="https://x.com/?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
