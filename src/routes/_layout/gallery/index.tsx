import { Container, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { createFileRoute } from '@tanstack/react-router'
import { useColorMode, useColorModeValue } from '../../../components/ui/color-mode'

export const Route = createFileRoute('/_layout/gallery/')({
  component: RouteComponent,
})

function RouteComponent() {

  const {colorMode} = useColorMode()
  const textMain = useColorModeValue("tertiary.800", "tertiary.100")
  const textPrimary = useColorModeValue("tertiary.700", "tertiary.200")
  const texttertiary = useColorModeValue("tertiary.600", "tertiary.300")
  const textTertiary = useColorModeValue("tertiary.500", "tertiary.400")
  return (
    <Container maxW={"100%"} p={0} m={0} bg={colorMode === 'light' ? "tertiary.50" : "tertiary.900"}>
      <Flex direction={"column"} minH={"100vh"} w={"100%"} alignItems={"center"} justifyContent={"center"}>
        <Heading fontSize={"8xl"} fontWeight={"extrabold"} color={textMain}>Making Dreams Come True</Heading>
        <VStack mt={8}>
        <Text color={textPrimary} fontSize={"4xl"}>Invest in your child</Text>
        <Text color={textTertiary}>TNT is a dream destination for children around Tenwek Community</Text>
        <Text color={texttertiary} fontWeight={"semibold"} fontSize={"3xl"}>Explore More</Text>
        </VStack>
        
      </Flex>

  </Container>
  )
  
}

