import {
  Box,
  Stack,
  Text,
  Container,
  ButtonGroup,
  IconButton,
  Link,
  Divider,
} from "@chakra-ui/react";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import Logo from "../Logo";

const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    maxW="7xl"
    py="12"
    px={{ base: "4", md: "8" }}
  >
    <Container maxW={{ base: "100vw", xs: "container.xs", sm: "container.sm", md: "container.md", lg: "container.lg", xl: "container.xl" }}>
      <Stack
        direction="row"
        spacing="4"
        align="center"
        justify="space-between"
        pb={5}
      >
        <Logo />
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="https://www.twitter.com/rasyidf_"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="20px" />}
          />
          <IconButton
            as="a"
            href="https://www.instagram.com/rasyidfam/"
            aria-label="instagram"
            icon={<FaInstagram fontSize="20px" />}
          />
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/rasyidufa/"
            aria-label="Linkedin"
            icon={<FaLinkedin fontSize="20px" />}
          />
          <IconButton
            as="a"
            href="https://www.github.com/rasyidf"
            aria-label="Github"
            icon={<FaGithub fontSize="20px" />}
          />
        </ButtonGroup>
      </Stack>
      <Divider pt={2} />
      <Stack direction="row" align="center" justify="space-between" pt={5}>
        <Text fontSize="md">
          &copy; {new Date().getFullYear()} Muhammad Fahmi Rasyid{" "}
        </Text>
        <IconButton
          as={Link}
          rounded="md"
          aria-label="Github Repo"
          rel="noopener"
          href="https://github.com/rasyidf/rasyid.dev/"
          isExternal
          icon={<FaGithub fontSize="18px" />}
        />
      </Stack>
    </Container>
  </Box>
);

export default Footer;
