import { Box, Flex, Image, Text } from "@chakra-ui/react";
import {
  useColorMode,
  useColorModeValue,
} from "../../components/ui/color-mode";
import { Button } from "../ui/button";
import { GoArrowRight } from "react-icons/go";

const HomeHero = () => {
  const textMain = useColorModeValue("secondary.800", "secondary.100");
  const textSecondary = useColorModeValue("secondary.600", "secondary.300");
  const textPrimaryRev = useColorModeValue("secondary.600", "secondary.700");
  const {colorMode} = useColorMode()

  const bg1 = useColorModeValue("fancy.300", "fancy.400");
  return (
    <Box
      maxW={"100%"}
      p={0}
      m={0}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      bgGradient="to-b"
      gradientFrom={colorMode === 'light'? "secondary.100" : "secondary.700"}
      gradientTo={colorMode === 'light'? "secondary.300" : "secondary.900"}
    >
      <Flex
        w={"100%"}
        p={{ base: "2", sm: "6", md: "8" }}
        direction={{ base: "column", md: "row" }}
        minH={"100vh"}
        alignItems={"center"}
        justifyContent={{ base: "center", md: "space-between" }}
      >
        <Box
          display={"flex"}
          gap={8}
          ml={{ base: "0", md: "8" }}
          textAlign={"center"}
          mt={24}
          maxW={{ base: "100%", md: "50%" }}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text
            fontSize={"5xl"}
            fontWeight={"extrabold"}
            lineHeight={1}
            color={textMain}
          >
            Shaping Future Champions Through Community and Play
          </Text>
          <Text fontSize={"2xl"} fontWeight={"light"} color={textSecondary}>
            Elite Academy is a community-driven football program dedicated to
            nurturing children aged 6-12. With the support of local churches and
            generous donors, we create a safe, fun environment where kids can
            grow, learn teamwork, and develop their soccer skills.
          </Text>
          <Flex w={"full"} alignItems={"center"} justifyContent={"center"}>
            <Button bg={bg1} _hover={{ bg: bg1 }}>
              <Text
                fontSize={"3xl"}
                fontWeight={"semibold"}
                color={textPrimaryRev}
              >
                Donate
                <Box ml={2} display={"inline-flex"} as={"span"}><GoArrowRight fontSize={"4xl"}/></Box>
              </Text>
            </Button>
          </Flex>
        </Box>
        <Flex
          direction={{ base: "column" }}
          mt={12}
          alignItems={"center"}
          mr={{ base: "2", md: "8" }}
          justifyContent={"center"}
        >
          <Image
            src="/images/home/childrenPlaying.webp"
            alt="childrenPlaying"
            maxH={"400px"}
            rounded={"lg"}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default HomeHero;
