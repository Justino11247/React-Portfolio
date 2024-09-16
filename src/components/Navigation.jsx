import { NavLink } from "react-router-dom";
import { Center, Flex, Box } from "@chakra-ui/react";

// Navigation items with their corresponding paths and labels
const navigationItems = [
  { path: "/Portfolio", label: "Portfolio" },
  { path: "/About", label: "About Me" },
  { path: "/Contact", label: "Contact" },
  { path: "/Resume", label: "Resume" },
];

// Navigation component
function Navigation() {
  return (
    <Box width="100%" borderBottom="8px solid black">
      <Center width="100%" py={4}>
        <Flex as="nav" justifyContent="center">
          {navigationItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              style={({ isActive }) => ({
                padding: '8px 16px',
                margin: '0 8px',
                textDecoration: 'none',
                color: isActive ? 'grey' : 'black',
                borderBottom: isActive ? '2px solid grey' : 'none',
              })}
            >
              {label}
            </NavLink>
          ))}
        </Flex>
      </Center>
    </Box>
  );
}

export default Navigation;