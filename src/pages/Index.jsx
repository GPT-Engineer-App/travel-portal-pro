import React from "react";
import { Box, Container, Heading, Input, Stack, InputGroup, InputLeftElement, Button, SimpleGrid, Text, Image, Flex, IconButton } from "@chakra-ui/react";
import { FaSearch, FaPlane, FaHotel, FaCarAlt } from "react-icons/fa";

const travelDestinations = [
  { name: "Paris", country: "France" },
  { name: "Tokyo", country: "Japan" },
  { name: "New York", country: "USA" },
  { name: "Sydney", country: "Australia" },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex justify="space-between" align="center" mb={6}>
        <Heading as="h1" size="lg">
          TravelBook
        </Heading>
        <Stack direction="row" spacing={4}>
          <IconButton aria-label="Flights" icon={<FaPlane />} />
          <IconButton aria-label="Hotels" icon={<FaHotel />} />
          <IconButton aria-label="Car Rental" icon={<FaCarAlt />} />
        </Stack>
      </Flex>

      {/* Search Form */}
      <Box mb={10}>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
          <Input type="text" placeholder="Search destinations" />
          <Button ml={2} colorScheme="blue">
            Search
          </Button>
        </InputGroup>
      </Box>

      {/* Travel Destinations */}
      <Heading as="h2" size="md" mb={4}>
        Popular Destinations
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
        {travelDestinations.map((destination, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px">
            <Image src={`https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwlMjQlN0JkZXN0aW5hdGlvbi5uYW1lJTdEJTIwY2l0eXNjYXBlfGVufDB8fHx8MTcwOTA3MjU1N3ww&ixlib=rb-4.0.3&q=80&w=1080`} alt={`${destination.name} image`} borderRadius={5} mb={4} />
            <Text fontWeight="bold" fontSize="lg">
              {destination.name}
            </Text>
            <Text color="gray.500">{destination.country}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;