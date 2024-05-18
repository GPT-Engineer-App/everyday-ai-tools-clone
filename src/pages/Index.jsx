import { Container, Box, Text, VStack, HStack, Button, Image, IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaSearch, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Header */}
      <HStack justifyContent="space-between" py={4}>
        <Text fontSize="2xl" fontWeight="bold">
          Everyday AI Tools
        </Text>
        <HStack spacing={4}>
          <IconButton aria-label="Twitter" icon={<FaTwitter />} />
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} />
          <IconButton aria-label="GitHub" icon={<FaGithub />} />
        </HStack>
      </HStack>

      {/* Hero Section */}
      <VStack spacing={8} py={16} textAlign="center">
        <Text fontSize="4xl" fontWeight="bold">
          Discover the Best AI Tools for Everyday Use
        </Text>
        <Text fontSize="lg">Explore a curated list of AI tools that can help you in your daily tasks.</Text>
        <InputGroup size="lg" maxW="md">
          <Input placeholder="Search AI tools..." />
          <InputRightElement>
            <IconButton aria-label="Search" icon={<FaSearch />} />
          </InputRightElement>
        </InputGroup>
      </VStack>

      {/* Tools Section */}
      <VStack spacing={8} py={16}>
        <HStack spacing={8} wrap="wrap" justifyContent="center">
          {Array.from({ length: 40 }, (_, index) => (
            <Box key={index} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={`https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMHRvb2wlMjA${index + 1}fGVufDB8fHx8MTcxNjA1NDUyN3ww&ixlib=rb-4.0.3&q=80&w=1080`} alt={`AI Tool ${index + 1}`} />
              <Box p={6}>
                <Text fontWeight="bold" fontSize="xl">
                  AI Tool {index + 1}
                </Text>
                <Text mt={4}>Description of AI Tool {index + 1}.</Text>
                <Button mt={4} colorScheme="teal">
                  Learn More
                </Button>
              </Box>
            </Box>
          ))}
        </HStack>
      </VStack>

      {/* Footer */}
      <Box py={8} textAlign="center">
        <Text>&copy; 2024 Everyday AI Tools. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;
