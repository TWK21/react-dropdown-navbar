import "./Footer.css";
import { Link } from "react-router-dom";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="footer-note">Welcome to my repository.</p>
      <div className="footer-icons">
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <AiOutlineLinkedin size={30} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <AiOutlineInstagram size={30} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <AiOutlineFacebook size={30} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <AiOutlineTwitter size={30} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <AiOutlineYoutube size={30} />
        </a>
      </div>

      <div className="footer-legal">
        <text>© 2021 React Dropdown Menu Inc.</text> <text>|</text>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-of-use">Terms of Use</Link>
      </div>
    </div>
  );
};

export default Footer;
