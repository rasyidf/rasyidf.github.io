import Head from "next/head";
import {
  Box,
  Container,
  Heading,
  SlideFade,
  Divider,
  Button,
  Collapse,
  LightMode,
  Tag,
} from "@chakra-ui/react";
import Paragraph from "../components/Paragraph";
import WebMeta from "../components/WebMeta";
import { useState } from "react";

const About = () => {
  const [show, setShow] = useState(false);

  const coolStuff = [
    "Vue",
    "Javascript",
    "Astronomy",
    "Peace",
    "AI",
    "C#, WPF",
    "Books",
    "Movies",
    "Anime",
    "Figma",
    "Coffee",
    "Stackoverflow",
  ];
  const notCoolStuff = [
    "PHP",
    "JQuery",
    "Bootstrap",
    "Politics",
    "Covid-19",
    "Race Condition",
  ];

  const handleToggle = () => setShow(!show);

  return (
    <div>
      <Head>
        <title>Muhammad Fahmi Rasyid | About</title>

        <WebMeta />
      </Head>
      <main>
        <Container maxW="container.lg" mt={10}>
          <SlideFade in={true} offsetY={80}>
            <Box>
              <Heading
                as="h1"
                fontSize={{ base: "28px", md: "32px", lg: "36px" }}
                mb={4}
              >
                About Me
              </Heading>
              <Collapse in={show} startingHeight={100}>
                <Paragraph fontSize="xl" lineHeight={1.6}>
                  I started using a computer when I was 4 years old, I developed
                  interests in making software, so i played with my very first
                  language, VB6. then i started learning C# alongside with some
                  css and html. now i am spending my free time learning new
                  technologies and developing more skills. I am very passionate
                  about programming, i love to create and to be creative. I am a
                  self-taught programmer, i am always learning new things. I
                  always try to learn new things and i always try to improve my
                  skills.
                </Paragraph>
              </Collapse>

              <LightMode>
                <Button
                  size="sm"
                  onClick={handleToggle}
                  mt="1rem"
                  colorScheme="blue"
                  bg="blue.500"
                >
                  Show {show ? "Less" : "More"}
                </Button>
              </LightMode>
            </Box>
            <Divider my={10} />
          </SlideFade>
          <SlideFade in={true} offsetY={80} delay={0.2}>
            <Heading
              as="h1"
              fontSize={{ base: "24px", md: "30px", lg: "36px" }}
              mb={3}
            >
              What I like
            </Heading>
            <Paragraph fontSize="xl" lineHeight={1.6}>
              {coolStuff.map((item) => (
                <Tag
                  size="lg"
                  colorScheme="blue"
                  key={item}
                  marginY={2}
                  marginRight={2}
                >
                  {item}
                </Tag>
              ))}
            </Paragraph>
            <Heading
              as="h1"
              fontSize={{ base: "24px", md: "30px", lg: "36px" }}
              mt={10}
              mb={3}
            >
              I don't really like
            </Heading>
            <Paragraph fontSize="xl" lineHeight={1.6}>
              {notCoolStuff.map((item) => (
                <Tag
                  size="lg"
                  colorScheme="red"
                  key={item}
                  marginY={2}
                  marginRight={2}
                >
                  {item}
                </Tag>
              ))}
            </Paragraph>
          </SlideFade>
        </Container>
      </main>
    </div>
  );
};

export default About;
