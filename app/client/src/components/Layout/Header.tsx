import { NavLink } from "react-router-dom";

type IsActiveType = { isActive: boolean };

const isActive = ({ isActive }: IsActiveType) =>
  isActive ? "nav-link disabled" : "nav-link";

const Header = () => (
  <header>
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container">
        <span className="navbar-brand">Posts App</span>
        <div className="navbar-nav ms-auto">
          <NavLink to="/" className={isActive}>
            Inicio
          </NavLink>
          <NavLink to="/sobre-nosotros" className={isActive}>
            Sobre Nosotros
          </NavLink>
        </div>
      </div>
    </nav>
  </header>
);

export { Header };
