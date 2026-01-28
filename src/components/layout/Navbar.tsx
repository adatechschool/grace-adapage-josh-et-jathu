import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-neutral-900 text-neutral-300 py-3">

      <ul className="flex flex-1 gap-6 justify-center">
        <CustomLink to= "/">Home</CustomLink>
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




