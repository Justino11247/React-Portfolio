import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

// Navigation items with their corresponding paths and labels
const navigationItems = [
  { path: "/Portfolio", label: "Portfolio" },
  { path: "/About", label: "About Me" },
  { path: "/Contact", label: "Contact" },
];

// Navigation component
function Navigation() {
  return (
    <Nav variant="tabs" defaultActiveKey="/">
      {navigationItems.map(({ path, label }) => (
        <NavLink key={path} to={path} className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}>
          {label}
        </NavLink>
      ))}
    </Nav>
  );
}

export default Navigation;