import {
  Box,
  useColorModeValue,
  Center,
  Flex,
} from "@chakra-ui/react";

function Resume() {
  const bgColor = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("black", "cyan");


  //front end skills
  const frontEnd = ["HTML", "CSS", "JavaScript", "Web APIs", "OOP", "React",];

  // back end skills
  const backEnd = ["Express", "SQL", "ORM", "MVC", "NoSQL", "PWA"];

  return(
    <Box
      backgroundImage="./public/images/metalbackground.png"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundAttachment="fixed"
      minHeight="100vh"
      padding={8}
    >
    <Box
      maxWidth="600px"
      margin="auto"
      mt={10}
      bg={bgColor}
      borderWidth="1px"
      borderColor={borderColor}
      boxShadow={useColorModeValue("10px 10px 0 #323535", "10px 10px 0 cyan")}
      borderRadius="sm"
      overflow="hidden"
    >
      <Center py={4}>
        <Flex>
          <div>
            <h1>Resume</h1>

          <div>
            <h2>Front-End Skills</h2>
            <ul> {/* Pull Front end skills into a list */}
              {frontEnd.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Back-End Skills</h2>
            <ul>{/* Pull back end skills into a list */}
              {backEnd.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Resume Section Here */}
          <div> 
        <a href="/images/resume.png" download>
          <p>Click here to view my downloadable Resume!</p>
        </a>
            
          </div>
          </div>
        </Flex>
      </Center>
      
    </Box>
    </Box>
    
  )
}

export default Resume;