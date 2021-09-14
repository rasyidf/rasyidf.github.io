import NextLink from "next/link";
import { Link as ChakraLink, useColorModeValue } from "@chakra-ui/react";

export default function Link({ children, href, currentPath, ...props }) {
  const linkColor = useColorModeValue("gray.100", "gray.700");
  const isActive = currentPath === href;
  const hoverColor = useColorModeValue("gray.200", "gray.700");

  return (
    <NextLink href={href} passHref>
      <ChakraLink
        bg={isActive && linkColor}
        _hover={{
          textDecoration: "none",
          bg: hoverColor,
        }}
        {...props}
      >
        {children}
      </ChakraLink>
    </NextLink>
  );
}
