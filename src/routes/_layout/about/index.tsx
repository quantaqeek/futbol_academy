import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import {
  useColorMode,
  useColorModeValue,
} from "../../../components/ui/color-mode";

export const Route = createFileRoute("/_layout/about/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { colorMode } = useColorMode();
  const textMain = useColorModeValue("secondary.800", "secondary.100");
  const textPrimary = useColorModeValue("secondary.700", "secondary.200");
  const textSecondary = useColorModeValue("secondary.600", "secondary.300");
  const textTertiary = useColorModeValue("secondary.500", "secondary.400");
  const textPrimaryRev = useColorModeValue("secondary.600", "secondary.700");

  const bg1 = useColorModeValue("fancy.300","fancy.400")
  const bg2 = useColorModeValue("fancy.200","fancy.300")
  const bg3 = useColorModeValue("fancy.100","fancy.300")
  return (
    <Container
      maxW={"100%"}
      p={0}
      m={0}
      bg={colorMode === "light" ? "secondary.50" : "secondary.900"}
    >
      <Flex
        direction={"column"}
        minH={"100vh"}
        textAlign={"center"}
        w={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box w={"full"} maxW={{ base: "100%", md: "80%" }}>
          <Text
            fontSize={"8xl"}
            lineHeight={1}
            fontWeight={"extrabold"}
            color={textMain}
          >
            Making Dreams Come True
          </Text>
        </Box>
        <VStack mt={8}>
          <Text color={textPrimary} fontSize={"4xl"}>
            Invest in your child
          </Text>
          <Text color={textTertiary}>
            TNT is a dream destination for children around Tenwek Community
          </Text>
          <Text color={textSecondary} fontWeight={"semibold"} fontSize={"3xl"}>
            Explore More
          </Text>
        </VStack>
        <Box boxSize={"11/12"} bg={bg1}>
        <Text fontSize={"3xl"} color={textPrimaryRev}>DONATE</Text>

        </Box>
      </Flex>
    </Container>
  );
}
