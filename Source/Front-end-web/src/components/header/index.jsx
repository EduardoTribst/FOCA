import "./header.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/foca.svg";

export default function Header({
  title = "FOCA",
  links = [],
  textButton,
  routeButton,
  showButton = false,
}) {
  const navigate = useNavigate();

  function goTo(route) {
    navigate(route);
  }

  return (
    <header className="header">
      <div className="header-left">
            <img src={logo} alt="Logo" className="header-logo" />
            <h1 className="header-title">{title}</h1>
      </div>


      <div className="header-right">
        {links.map((link, index) => (
          <button
            key={index}
            className="header-link"
            onClick={() => goTo(link.routeButton)}
          >
            {link.textButton}
          </button>
        ))}

        {showButton && (
          <button
            className="header-button"
            onClick={() => goTo(routeButton)}
          >
            {textButton}
          </button>
        )}
      </div>
    </header>
  );
}