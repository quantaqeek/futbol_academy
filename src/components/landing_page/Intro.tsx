import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useColorMode, useColorModeValue } from "../ui/color-mode";
import { highlights } from "../../data/home";

const Intro = () => {
  const { colorMode } = useColorMode();
  
  return (
    <Container
      maxW={"100%"}
      p={0}
      m={0}
      bgGradient="to-b"
      gradientTo={colorMode === "light" ? "secondary.100" : "secondary.700"}
      gradientFrom={colorMode === "light" ? "secondary.300" : "secondary.900"}
    >
      <Flex
        w={"full"}
        minH={"100vh"}
        direction={"column"}
        alignItems={"center"}
      >
        <Box display={"flex"} w={"full"} flexDirection={"column"} mt={12}>
          <VStack
            w={"full"}
            gap={8}
            p={{ base: "4", md: "6" }}
            alignItems={"center"}
            textAlign={"center"}
            justifyContent={"center"}
          >
            <Text fontSize={"3xl"} fontWeight={"semibold"}>
              Support Us to Keep Young Dreams Alive [Donate Now!]
            </Text>
            <Text>****************________________****************</Text>
          </VStack>

          <Flex w="full" alignItems={"center"} justifyContent={"center"}>
            <Image src="/images/home/ball.png" alt="football" maxH={"48"} />
          </Flex>
        </Box>
        <Grid
          w={"full"}
          gap={6}
          p={6}
          templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" }}
        >
          {highlights.map((play, index) => {
            return (
              <GridItem
                key={index}
                bgImage={`url(${play.image})`}
                backgroundPosition={"center"}
                backgroundSize={"cover"}
                backgroundRepeat={"no-repeat"}
                position={"relative"}
                h={{sm:"96", md:"500px"}}
                rounded={"md"}
              >
                <Box display={"flex"} flexDirection={"column"} w="full" position={"absolute"} left={0}>
                    <Text fontSize={"2xl"} fontWeight={"semibold"}>
                        {play.name}
                    </Text>

                </Box>
              </GridItem>
            );
          })}
        </Grid>
      </Flex>
    </Container>
  );
};

export default Intro;
