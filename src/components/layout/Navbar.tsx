import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="home-placeholder">Home</Link>

      <ul className="flex items-center gap-x-2 p-1 font-medium">
        <CustomLink to= "/Features">Features</CustomLink>
        <CustomLink to="/Timeline">Timeline</CustomLink>
        <CustomLink to="/Testimonial">Testimonial</CustomLink>
      </ul>
    </nav>
  );
}


function CustomLink({ to, children }) {
    const path = window.location.pathname
  
    return (
    <li className={path === to ? "active" : ""}>
      <Link to={to}>{children}
      </Link>
    </li>
  );
}



