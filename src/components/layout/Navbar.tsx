import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-3">

      <ul className="flex flex-1 gap-6 justify-center">
        <CustomLink to= "/">Acceuil</CustomLink>
        <CustomLink to= "/Features">Caractéristiques</CustomLink>
        <CustomLink to="/Timeline">Chronologie</CustomLink>
        <CustomLink to="/Testimonial">Témoignages</CustomLink>
      </ul>
    </nav>  
  );
}


function CustomLink({ to, children }: { to: string; children: React.ReactNode }) {
   const resolvedPath = useResolvedPath(to)
   const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
    <li className={isActive ? "active" : ""}>
      <Link to={to}>{children}
      </Link>
    </li>
  );
}




