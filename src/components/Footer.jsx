import { MdEmail } from "react-icons/md";
import { FaGithub, FaTwitter, FaStackOverflow } from "react-icons/fa";
import { Box, Flex, Link } from "@chakra-ui/react";


const Footer = () => {
  return (
    <Box as="footer" width="100%" py={8} bg="gray.100" borderTop="8px solid black">
      <Flex 
        direction="column" 
        alignItems="center" 
        maxWidth="1200px" 
        margin="0 auto"
        px={4}
      >
        <Flex justifyContent="center" alignItems="center" mb={4}>
          {/* GitHub logo */}
          <Link href="https://github.com/Justino11247" isExternal mx={4}>
            <FaGithub size={50} />
          </Link>
          
          {/* Email Logo */}
          <Link href="mailto:herrerajustin11@gmail.com" isExternal mx={4}>
            <MdEmail size={50} />
          </Link>
          
          {/* Twitter logo */}
          <Link href="https://twitter.com" isExternal mx={4}>
            <FaTwitter size={50} color="#1DA1F2" />
          </Link>
          
          {/* Stack Overflow logo */}
          <Link href="https://stackoverflow.com" isExternal mx={4}>
            <FaStackOverflow size={50} color="#F48024" />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;