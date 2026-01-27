import { NavLink } from "react-router-dom";

export default  function Navbar() {
  return (
    <nav className="navBar">
      <NavLink to="/" end>
        Home
      </NavLink>

      <NavLink to="/features">
        Features
      </NavLink>

      <NavLink to="/timeline">
        Timeline
      </NavLink>

      <NavLink to="/testimonials">
        Testimonials
      </NavLink>
    </nav>
  );
};


