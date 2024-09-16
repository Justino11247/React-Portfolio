import { useState } from "react";
import {
  Box,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

function Contact() {
  // State variables for form inputs, validation errors, and submission feedback
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState("");

  // Handles form submission 
  function handleSubmit(e) {
    e.preventDefault();8
    let newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";

    } else if (!validateEmail(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", { name, email, message });
      setName("");
      setEmail("");
      setMessage("");
      setSubmissionMessage("Your message has been successfully submitted!");
    }
  }


  // Updates name state, clears any associated error
  function handleNameChange(e) {

    setName(e.target.value);
    setErrors({ ...errors, name: "" });
  }

  // Updates email state, clears any associated error
  function handleEmailChange(e) {

    setEmail(e.target.value);
    setErrors({ ...errors, email: "" });
  }

  // Updates message state, clears any associated error
  function handleMessageChange(e) {

    setMessage(e.target.value);
    setErrors({ ...errors, message: "" });
  }

  // Validate email format
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const bgColor = useColorModeValue("white", "gray.700");
const borderColor = useColorModeValue("black", "cyan");

// JSX structure for the contact form
return (
  <Box
      backgroundImage="/images/metalbackground.png"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundAttachment="fixed"
      minHeight="100vh"
      padding={8}
    >
  <Box maxWidth="500px" margin="auto" mt={10}>
    <VStack
      spacing={6}
      bg={bgColor}
      borderWidth="1px"
      borderColor={borderColor}
      boxShadow={useColorModeValue("10px 10px 0 #323535", "10px 10px 0 cyan")}
      borderRadius="sm"
      p={6}
    >
      <Heading as="h1" size="xl">
        Contact Me
      </Heading>

      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <VStack spacing={4} align="stretch">
          <FormControl isInvalid={errors.name}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={handleNameChange}
              required
            />
            {errors.name && (
              <Text color="red.500" fontSize="sm">
                {errors.name}
              </Text>
            )}
          </FormControl>

          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {errors.email && (
              <Text color="red.500" fontSize="sm">
                {errors.email}
              </Text>
            )}
          </FormControl>

          <FormControl isInvalid={errors.message}>
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              required
            />
            {errors.message && (
              <Text color="red.500" fontSize="sm">
                {errors.message}
              </Text>
            )}
          </FormControl>

          {Object.keys(errors).length > 0 && (
            <Text color="red.500" fontSize="sm">
              Please complete all required fields.
            </Text>
          )}

          {submissionMessage && (
            <Text color="green.500" fontSize="sm">
              {submissionMessage}
            </Text>
          )}

          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </VStack>
      </form>
    </VStack>
  </Box>
  </Box>
);
}

export default Contact;