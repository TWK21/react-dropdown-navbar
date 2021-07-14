import { NavLink, Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" exact activeClassName="">
        <img
          src=""
          alt="Logo"
          height={100}
        />
      </NavLink>
      <div className="tabs">
        <div className="dropdown-tab">
          <NavLink to="/page1" activeClassName="active">
            dropdown1
          </NavLink>
          <div className="dropdown">
            <Link to="/page1" activeClassName="active">
              page1
            </Link>
            <Link to="/page2" activeClassName="active">
              page2
            </Link>
          </div>
        </div>
        <div className="dropdown-tab">
          <NavLink to={"/page3"} activeClassName="active">
            dropdown2
          </NavLink>
          <div className="dropdown">
            <Link to="/page3">page3</Link>
            <Link to="/page4">page4</Link>
            <Link to="/page5">page5</Link>
            <Link to="/page6">page6</Link>
            <Link to="page7">page7</Link>
          </div>
        </div>
        <NavLink to="/tab1" activeClassName="active">
          tab1
        </NavLink>
        <NavLink to="/tab2" activeClassName="active">
          tab2
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
