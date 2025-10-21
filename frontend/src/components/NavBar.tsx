import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="">
      <div className="">
        <Link to="/">Movie App</Link>
      </div>
      <div className="">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </nav>
  );
}

export default NavBar;
