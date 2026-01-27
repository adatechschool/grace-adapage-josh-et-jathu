import { Link, useMatch, useResolvedPath } from "react-router-dom"

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
   const resolvedPath = useResolvedPath(to)
   const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
    <li className={isActive ? "active" : ""}>
      <Link to={to}>{children}
      </Link>
    </li>
  );
}




