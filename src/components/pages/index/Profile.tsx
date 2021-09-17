import {
  Box,
  Heading,
  SlideFade,
  Grid,
  LightMode,
  Button,
  ButtonGroup,
  Flex, GridItem
} from "@chakra-ui/react";
import React from "react";

import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Paragraph from "../../Paragraph";
import SvgMascot from "../../mascot";

const Profile = () => {
  return (
    <SlideFade in={true} offsetY={80}>
      <Grid templateColumns="repeat(2, 1fr)" gap={{ base: 0, md: 2 }}>
        <GridItem>
          <Heading
            as="h1"
            fontSize={{ base: "2em", md: "2.6em", lg: "3.0em" }}
            mb={3}
          >
            Hey , I’m<wbr /> Muhammad Fahmi Rasyid
          </Heading>
          <Paragraph fontSize="2xl" lineHeight={1.6}>
            Backend developer - UI / UX Designer, focused on C#, TypeScript, and
            Python. I work as a Backend developer. You’ve found my personal
            website on the internet.
          </Paragraph>
          <Box mt={10}>
            <LightMode>
              <ButtonGroup>
                <Button
                  colorScheme="blue"
                  bg="blue.500"
                  href=" https://linkedin.com/in/rasyidufa"
                  borderRadius={5}
                  p={3}
                  as="a"
                  leftIcon={<FaLinkedin />}
                >
                  LinkedIn
                </Button>
                <Button
                  colorScheme="blue"
                  bg="blue.500"
                  href=" https://www.github.com/rasyidf"
                  borderRadius={5}
                  p={3}
                  as="a"
                  leftIcon={<FaGithub />}
                >
                  Github
                </Button>
                <Button
                  colorScheme="blue"
                  bg="blue.500"
                  href=" https://www.instagram.com/rasyidfam"
                  borderRadius={5}
                  p={3}
                  as="a"
                  leftIcon={<FaInstagram />}
                >
                  Instagram
                </Button>
              </ButtonGroup>
            </LightMode>
          </Box>

        </GridItem>
        <GridItem visibility={{ base: "collapse", md: "visible" }}>
          <Flex justifyContent="center" alignContent="center">
            <SvgMascot />
          </Flex>
        </GridItem>
      </Grid>
    </SlideFade>
  );
};

export default Profile;
