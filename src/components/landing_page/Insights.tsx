import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  ListRoot,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useColorModeValue } from "../ui/color-mode";
import { FaArrowTrendUp } from "react-icons/fa6";

const Insights = () => {
  const textMain = useColorModeValue("secondary.800", "secondary.100");
  const textPrimary = useColorModeValue("secondary.700", "secondary.200");
  const textSecondary = useColorModeValue("secondary.600", "secondary.300");
  const textTertiary = useColorModeValue("secondary.500", "secondary.400");
  const textPrimaryRev = useColorModeValue("secondary.600", "secondary.700");
  const bg1 = useColorModeValue("fancy.300", "fancy.400");
  return (
    <Container w="100%" p={0} m={0}>
      <Box
        w={"full"}
        minH={"100vh"}
        display={"flex"}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Flex
          w={"full"}
          direction={{ base: "column", md: "row" }}
          bgImage={"url(/images/home/line.png)"}
          backgroundPosition={"center"}
          backgroundSize={"contain"}
          backgroundRepeat={"no-repeat"}
          justifyContent={"space-between"}
          p={4}
        >
          <VStack w={"full"}>
            <Box
              w={"full"}
              display={"flex"}
              direction={"column"}
              gap={2}
              borderTop={"8px solid"}
              maxW={"max-content"}
            >
              <HStack color={textPrimary} fontSize={"3xl"}>
                METHOD & SERVICES
              </HStack>
            </Box>
            <VStack display={"flex"} flexDirection={"column"} fontSize={"6xl"} mt={6} textAlign={"start"} justifyContent={"flex-start"} alignItems={"flex-start"} lineHeight={1} gap={0} maxW={"md"} fontWeight={"semibold"} color={textMain}>
                <Text>INSIGHT</Text>
                <Text ml={{base:2, sm:4, md:6, lg:8}}>THROUGH</Text>
                <Text>ENQUIRY</Text>
            
            </VStack>
          </VStack>
          <Box display={"flex"} gap={24} w="full" flexDirection={"column"} mt={8}>
            <Text fontSize={"xl"} fontWeight={"light"} color={textSecondary}>
              My highly intensive, Insight Through Enquiry coaching & mentoring
              method involves comprehensive data-mining on The Self. Within its
              individually customized tests and assessments, we gather
              information, assemble answers, and learn to follow how you
              operate.
            </Text>
            <HStack
              display={"flex"}
              w="full"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <VStack fontSize={"2xl"}>
                <Text>Learn more about the </Text>
                <Text fontWeight={"bold"} color={textTertiary}>
                  insight through enquiry method
                </Text>
              </VStack>
              <Box
                w={32}
                bg={bg1}
                color={textPrimaryRev}
                rounded={"full"}
                h={32}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <FaArrowTrendUp size={48} />
              </Box>
            </HStack>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default Insights;
