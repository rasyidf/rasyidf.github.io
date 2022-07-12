import {
  Box,
  Heading,
  SlideFade,
  Grid,
  LightMode,
  Button,
  ButtonGroup,
  Flex,
  GridItem,
  SkeletonCircle,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Paragraph from "../../Paragraph";
import SvgMascot from "../../SvgMascot";

const Profile = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  useEffect(() => {
    setIsLoading(false);
  });

  return (
    <SlideFade in={true} offsetY={80}>
      <Grid
        templateColumns={{ base: "1", md: "repeat(2, 1fr)" }}
        gap={{ base: 0, md: 2 }}
      >
        <GridItem gridRow={{ base: "0", md: "1" }}>
          <Flex justifyContent="center" alignContent="center">
            <SkeletonCircle width="25em" height="25em" isLoaded={!isLoading}>
              <SvgMascot />
            </SkeletonCircle>
          </Flex>
        </GridItem>
        <GridItem>
          <Heading
            as="h1"
            fontSize={{ base: "2em", md: "2.6em", lg: "3.0em" }}
            mb={3}
          >
            Hey , I’m
            <wbr /> Muhammad Fahmi Rasyid
          </Heading>
          <Paragraph fontSize="2xl" lineHeight={1.6}>
            Web/Desktop developer - UI / UX Designer, focused on C#, TypeScript, and
            Python. I work as a Frontend developer. You’ve found my personal
            website on the internet.
          </Paragraph>
          <Box mt={10}>
            <LightMode>
              <ButtonGroup>
                <Button
                  colorScheme="blue"
                  bg="blue.500"
                  rel="noopener"
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
      </Grid>
    </SlideFade>
  );
};

export default Profile;
