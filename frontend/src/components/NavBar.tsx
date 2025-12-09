import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function NavBar() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="navbar navbar-expand-lg" id="main-nav">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          Movie App
        </Link>
      </div>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/favorites">
              Favorites
            </Link>
          </li>
          <li className="nav-item">
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="btn btn-secondary"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
