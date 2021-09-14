import {
  Box,
  Heading,
  IconButton,
  LinkOverlay,
  LinkBox,
  useColorModeValue,
} from "@chakra-ui/react";
import Paragraph from "./Paragraph";

export const StackCard = ({ stack }) => {
  return (
    <LinkBox as="article">
      <Box
        w="100%"
        p={4}
        borderColor={useColorModeValue("gray.300", "gray.700")}
        borderRadius={5}
        borderWidth="1px"
        transition=".5s"
        cursor="pointer"
        d="flex"
        role="group"
        _hover={{
          borderColor: "blue.500",
        }}
      >
        <IconButton
          as="a"
          href={stack?.url}
          rel="noopener"
          target="_blank"
          aria-label={stack?.title}
          mr={3}
          _groupHover={{ color: "blue.500" }}
          icon={stack?.icon}
        />
        <Box>
          <LinkOverlay href={stack?.url} rel="noopener" isExternal>
            <Heading as="h2" size="sm">
              {stack?.title}
            </Heading>
            <Paragraph mt={1} fontSize="sm">
              {stack?.stack.join(", ")}
            </Paragraph>
          </LinkOverlay>
        </Box>
      </Box>
    </LinkBox>
  );
};
