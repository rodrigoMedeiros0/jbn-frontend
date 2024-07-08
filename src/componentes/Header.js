import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  useColorModeValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";

import logo from "../assets/LogoJBN.svg";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();

  const [mouseScroll, setMouseScroll] = useState(false);

  const changeNone = () => {
    if (window.scrollY > 0) {
      setMouseScroll(true);
    } else {
      setMouseScroll(false);
    }
  };

  window.addEventListener("scroll", changeNone);
  return (
    <Box
      bg="white"
      height="95px"
      borderBottom={1}
      borderStyle="solid"
      borderColor="gray.200"
      pt={4}
      width="full"
      position="fixed"
      zIndex={100}
      top={{base: 0, md:`${mouseScroll ? 0 : '50'}`}}
      mt={{base: 0, md: `${mouseScroll ? 0 : '4'}`}}
    >
      <Flex
        maxWidth="1300px"
        justify="space-between"
        mx="auto"
        alignItems="center"
      >
        <Flex pl={3} display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={6} h={6} /> : <HamburgerIcon w={6} h={7} />
            }
            variant={"ghost"}
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Link to="/">
          <Image src={logo} alt="logo da JBN Construções" boxSize="75px" />
        </Link>
        <Flex display={{ base: "none", md: "flex" }}>
          <DesktopNav />
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                color="#051C34"
                fontSize="lg"
                p={2}
                _hover={{
                  fontWeight: "bold",
                }}
              >
                <NavLink
                  to={navItem.href ?? "#"}
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                    };
                  }}
                >
                  {navItem.label}
                </NavLink>
              </Box>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue("white", "gray.800")} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack onClick={children && onToggle}  >
      <Box
        py={30}
        p={4}
        as="a"
        href={href ?? "#"}
        justifyContent="center"
        alignItems="center"
        _hover={{
          bg: "gray.300",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>
    </Stack>
  );
};
const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Empreendimentos",
    href: "/empreendimentos",
  },
  {
    label: "Quem somos",
    href: "/quem-somos",
  },
  {
    label: "Fale Conosco",
    href: "/fale-conosco",
  },
];
