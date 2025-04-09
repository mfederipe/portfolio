import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <a href="#home" className="header__link">
          Home
        </a>
        <a href="#projects" className="header__link">
          Projects
        </a>
        <a href="#about" className="header__link">
          About Me
        </a>
        <a href="#contact" className="header__link">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
