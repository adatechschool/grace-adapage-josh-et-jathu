

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="home-placeholder">Home</a>

      <ul className="flex items-center gap-x-2 p-1 font-medium">
        <CustomLink href= "/Features">Features</CustomLink>
        <CustomLink href="/Timeline">Timeline</CustomLink>
        <CustomLink href="/Testimonial">Testimonial</CustomLink>
      </ul>
    </nav>
  );
}


function CustomLink({ href, children }) {
    const path = window.location.pathname
  
    return (
    <li className={path === href ? "active" : ""}>
      <a href={href}>{children}</a>
    </li>
  );
}



