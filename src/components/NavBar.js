import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Police Portal</div>
      <div className="navbar-links">
        <Link to="/">Dashboard</Link>
        <Link to="/news">News</Link>
        <Link to="/stats">Stats</Link>
        <Link to="/cases">Cases</Link>
        <Link to="/alerts">Alerts</Link>
        <Link to="/user">User Dashboard</Link>
        <Link to="/report">Report Incident</Link>
      </div>
    </nav>
  );
}

export default NavBar;
