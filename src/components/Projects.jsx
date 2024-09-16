import PropTypes from "prop-types";
import { Box, Center, Img, Heading, Text, HStack, Flex, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

const Project = ({ title, image, projectLink, githubLink, projectType }) => (
  <Center py={6}>
    <Box
      w={"full"}
      rounded={"sm"}
      my={5}
      mx={[0, 5]}
      overflow={"hidden"}
      bg="white"
      border={"1px"}
      borderColor="black"
      boxShadow={useColorModeValue("10px 10px 0 black", "10px 10px 0 cyan")}
    >
      <Box h={"600px"} borderBottom={"1px"} borderColor="black">
        <Img
          src={image || "https://via.placeholder.com/128x192"}
          roundedTop={"sm"}
          objectFit="cover"
          h="full"
          w="full"
          alt={title}
        />
      </Box>
      <Box p={4}>
        <Box
          bg="black"
          display={"inline-block"}
          px={2}
          py={1}
          color="white"
          mb={2}
        >
          <Text fontSize={"xs"} fontWeight="medium">
            {projectType}
          </Text>
        </Box>
        <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
          {title}
        </Heading>
      </Box>
      <HStack borderTop={"1px"} color="black">
        <Flex
          p={4}
          alignItems="center"
          justifyContent={"space-between"}
          roundedBottom={"sm"}
          cursor="pointer"
          w="66.67%"
          as={Link}
          to={projectLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text fontSize={"md"} fontWeight={"semibold"}>
            View Project
          </Text>
          <BsArrowUpRight />
        </Flex>
        <Flex
          p={4}
          alignItems="center"
          justifyContent={"space-between"}
          roundedBottom={"sm"}
          borderLeft={"1px"}
          cursor="pointer"
          w="33.33%"
          as={Link}
          to={githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text fontSize={"lg"} fontWeight={"semibold"} pt="15px">
            Github
          </Text>
        <BsGithub />
        </Flex>
      </HStack>
    </Box>
  </Center>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  projectType: PropTypes.string.isRequired,
};

export default Project;