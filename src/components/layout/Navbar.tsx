import { Link } from "react-router-dom"

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


function CustomLink({ to, children }: { to: string; children: React.ReactNode }) {
    const path = window.location.pathname
  
    return (
    <li className={path === to ? "active" : ""}>
      <Link to={to}>{children}</Link>
    </li>
  );
}



