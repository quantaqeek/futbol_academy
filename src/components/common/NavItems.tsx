import { Box, ListItem, ListRoot, Text } from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";
import {
  LuAlbum,
  LuBookHeadphones,
  LuCamera,
  LuDatabase,
} from "react-icons/lu";
import { useColorModeValue } from "../ui/color-mode";

const navlist = [
  { icon: LuBookHeadphones, title: "Home", path: "/" },
  { icon: LuDatabase, title: "Dashboard", path: "/users" },
  { icon: LuAlbum, title: "About", path: "/about" },
  { icon: LuCamera, title: "Gallery", path: "/gallery" },
];

const NavItems = () => {
  const textMain = useColorModeValue("secondary.800", "secondary.100");
  const textSecondary = useColorModeValue("secondary.300", "fancy.400");
  const linkHover = useColorModeValue("#c4c7f2", "#344d75");
  const navItems = navlist.map(({ icon: IconType, title, path }) => {
    return (
      <Link to={path}>
        {({ isActive }) => {
          return (
            <>
              <ListItem
                w={{ base: "", sm: "", md: "32", lg: "48" }}
                key={title}
                overflow={"clip"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                clipPath={"polygon(20% 0, 100% 0, 80% 100%, 0 100%)"}
                bg={isActive ? linkHover : textSecondary}
                _hover={{
                  md: { bg: linkHover },
                }}
              >
                <Text
                  display={"flex"}
                  px={{ base: "6", md: "1" }}
                  py={{ base: "6", md: "4" }}
                  fontSize={{ base: "2xl", md: "md" }}
                  color={isActive ? textMain : textMain}
                  gap={2}
                >
                  <Box as={"span"} alignSelf={"center"}>
                    <IconType />
                  </Box>
                  {title}
                </Text>
              </ListItem>
            </>
          );
        }}
      </Link>
    );
  });
  return (
    <ListRoot
      display={"flex"}
      listStyle={"none"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDir={{ base: "column", md: "row" }}
    >
      {navItems}
    </ListRoot>
  );
};

export default NavItems;
