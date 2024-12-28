import { Container } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import HomeHero from "../../components/landing_page/hero"
import { useColorMode } from "../../components/ui/color-mode";

export const Route = createFileRoute("/_layout/")({
  component: Dashboard,
});

function Dashboard() {
  const {colorMode} = useColorMode()
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
       <HomeHero/>
      </Container>
    </>
  );
}
