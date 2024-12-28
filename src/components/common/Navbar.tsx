import React from "react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LuMenu } from "react-icons/lu";
import {
  ColorModeButton,
  useColorMode,
  useColorModeValue,
} from "../../components/ui/color-mode";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "../../components/ui/drawer";

import NavItems from "./NavItems";
import { Button } from "../../components/ui/button";
import SideBar from "./SideBar";
import { useScroll, AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const bgActive = useColorModeValue("#8A85BC", "#0093AF");
  const bgColor = useColorModeValue("#E0FBFC", "#293241");
  const textColor = useColorModeValue("#181C14", "#FFFFFF");
  const {colorMode} = useColorMode()

  const handleLinkClick = () => {
    setIsOpen(false); // Close the drawer when a link is clicked
  };

  const drawerVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.8, ease: "easeIn" },
    },
  };
  const toggleMenu = () => setIsOpen(!isOpen);
  const isDesktop = useBreakpointValue({ base: false, md: true });

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 100);
    });

    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    if (isDesktop && isOpen) {
      setIsOpen(false); // Close mobile menu on switching to desktop
    }
  }, [isDesktop, open]);

  return (
    <Flex as="nav" direction="column">
      {/* Mobile View */}
      <Flex
        top={0}
        left={0}
        bg={isScrolled ? bgColor : "none"}
        color={textColor}
        align={"center"}
        zIndex={"50"}
        w="100%"
        px={4}
        display={{ base: "flex", md: "none" }}
        position={"fixed"}
      >
        <Flex w="100%" direction={"column"}>
          <HStack  w="100%"  p={4} justify={"space-between"}>
            <Link to={"/"}>
              <Text fontSize={"2xl"} fontWeight={"extrabold"}>
                SIL STUDIO
              </Text>
            </Link>
            <ColorModeButton
              color={textColor}
              _hover={{ bg: "none", color: bgActive }}
            />
            <Button onClick={toggleMenu}>
              {isOpen ? (
                <IoCloseOutline size={48} />
              ) : (
                <HiOutlineMenuAlt2 size={48} />
              )}
            </Button>
          </HStack>

          <Flex w="100%">
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={drawerVariants}
                  style={{
                    height: "100vh",
                    width: "100%",
                    backgroundColor: "transparent",
                    position:"relative",
                    opacity: "0.5"
                  }}
                >
                  <Box position={"absolute"} inset={0} top={0} bottom={0} bg={colorMode === 'light' ? "#f5f5f5" : "black"} opacity={0.8}/>
                  <VStack position={"relative"} >
                    <SideBar onLinkClick={handleLinkClick} />
                  </VStack>
                </motion.div>
              )}
            </AnimatePresence>
          </Flex>
        </Flex>
      </Flex>

      {/* Desktop View */}
      <Box
        w={"100%"}
        zIndex={"50"}
        bg={isScrolled ? bgColor : "none"}
        color={textColor}
        display={{ base: "none", md: "flex" }}
        top={0}
        position={"fixed"}
      >
        <Flex w="100%" p={4} justify={"space-between"}>
          <Box>
            <Link to={"/"}>
              <Text fontSize={"2xl"} fontWeight={"extrabold"}>
                TENWEK ACADEMY
              </Text>
            </Link>
          </Box>
          <NavItems />
          <Box display={"flex"} alignItems={"center"} gap={4}>
            <ColorModeButton
              color={textColor}
              _hover={{ bg: "none", color: bgActive }}
            />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;
