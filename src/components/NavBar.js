import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Police Portal</div>
      
      <button className="menu-button" onClick={toggleMenu}>
        Menu
      </button>
      
      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="user" onClick={() => setMenuOpen(false)}>User Dashboard</Link>
        <Link to="/news" onClick={() => setMenuOpen(false)}>News</Link>
        <Link to="/police" onClick={() => setMenuOpen(false)}>Police Dashboard</Link>
        <Link to="/fir" onClick={() => setMenuOpen(false)}>FIR</Link>
        <Link to="/discord" onClick={() => setMenuOpen(false)}>Discord</Link>
        <Link to="/stats" onClick={() => setMenuOpen(false)}>Stats</Link>
        <Link to="/cases" onClick={() => setMenuOpen(false)}>Cases</Link>
      </div>
    </nav>
  );
}

export default NavBar;