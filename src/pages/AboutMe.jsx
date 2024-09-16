import {
  Box,
  Image,
  Text,
  VStack,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

export default function AboutPage(){
  const bgColor = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("black", "cyan");

  return (
    <Box
      backgroundImage="/images/metalbackground.png"
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
      <Image
        src="/images/ME.jpg"
        alt="Picture of me"
        objectFit="cover"
        w="100%"
        h="650px"
      />
      <VStack spacing={4} p={6} align="stretch">
        <Heading as="h1" size="xl" >
          About Me
        </Heading>
        <Text>
          Hello, My name is Justin Herrera. I am currently taking the UCI/EDEX 24 week coding bootcamp. My love for technology is what pushed me to learn to code. I hope to keep honing in my skills as a developer so that I may work on big projects in the future.
        </Text>
      </VStack>
    </Box>
    </Box>
  );
}


