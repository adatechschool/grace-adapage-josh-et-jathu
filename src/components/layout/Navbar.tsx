import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-3">

      <ul className="flex flex-1 gap-6 justify-center">
<<<<<<< HEAD
        <CustomLink to= "/">Home</CustomLink>
        <CustomLink to= "/Features">Features</CustomLink>
        <CustomLink to="/Timeline">Timeline</CustomLink>
        <CustomLink to="/Testimonial">Testimonial</CustomLink>
        
        

=======
        <CustomLink to= "/">Acceuil</CustomLink>
        <CustomLink to= "/Features">Caractéristiques</CustomLink>
        <CustomLink to="/Timeline">Chronologie</CustomLink>
        <CustomLink to="/Testimonial">Témoignages</CustomLink>
>>>>>>> e4d789588c5f9c07be2f5bf4eef2c4380304966e
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




