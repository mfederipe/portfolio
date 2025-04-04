import "./Footer.scss";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import githubIcon from "../../assets/icons/github.svg";
import emailIcon from "../../assets/icons/email.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
        <a
          href="https://www.linkedin.com/in/mfederipe/"
          target="_blank"
          className="footer__link"
        >
          <img src={linkedinIcon} alt="linkedin icon" />
        </a>
        <a
          href="https://github.com/mfederipe"
          target="_blank"
          className="footer__link"
        >
          <img src={githubIcon} alt="github icon" />
        </a>
        <a href="mailto:marisonfdrp@gmail.com" className="footer__link">
          <img src={emailIcon} alt="email icon" />
        </a>
      </div>
      <p className="footer__text">© 2025 All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
