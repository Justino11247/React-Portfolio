import { Center, Box, Image } from "@chakra-ui/react";

function Header() {
  return (
    <Box as="header" width="100%" py={4}>
      <Center>
        <Image 
          src="/images/Justin Herrera name Logo metalic gradient.png"
          alt="Justin Herrera Logo"
          maxWidth="600px"  // Adjust this value as needed
          width="100%"
        />
      </Center>
    </Box>
  );
}

export default Header;