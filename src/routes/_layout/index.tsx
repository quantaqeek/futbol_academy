import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { ColorModeButton, useColorMode, useColorModeValue } from "../../components/ui/color-mode";

export const Route = createFileRoute("/_layout/")({
  component: Dashboard,
});

function Dashboard() {
  const {colorMode} = useColorMode()
    const textMain = useColorModeValue("secondary.800", "secondary.100");
    const textPrimary = useColorModeValue("secondary.700", "secondary.200");
    const textSecondary = useColorModeValue("secondary.600", "secondary.300");
    const textTertiary = useColorModeValue("secondary.500", "secondary.400");
    const textPrimaryRev = useColorModeValue("secondary.600", "secondary.700");
  return (
    <>
      <Container
        maxW="full"
        p={0}
        m={0}
        bgGradient="to-b"
        gradientFrom={colorMode === 'light'? "secondary.100" : "secondary.700"}
        gradientTo={colorMode === 'light'? "secondary.300" : "secondary.900"}
        
        // bg={`url("https://img.freepik.com/free-vector/futuristic-city-other-planet-megapolis_1441-2735.jpg?uid=R133883599&ga=GA1.1.1379508871.1718173539&semt=ais_hybrid")`}
        // backgroundPosition={"center"}
        // backgroundSize={"cover"}
        // backgroundRepeat={"no-repeat"}
      >
        <Box pt={24} m={4} minH={"100vh"}>
          <Text fontSize="2xl">Hi, 👋🏼</Text>
          <Text>Welcome back, nice to see you again!</Text>
          <ColorModeButton />
          <Text>Where is this?</Text>
        </Box>
      </Container>
    </>
  );
}
