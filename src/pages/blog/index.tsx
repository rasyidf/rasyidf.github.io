import Head from "next/head";
import { Box, Container, Heading, SlideFade, Divider } from "@chakra-ui/react";
import Message from "../../components/Message";
import WebMeta from "../../components/WebMeta";
const Blog = () => {
  return (
    <div>
      <Head>
        <title>Blog | Muhammad Fahmi Rasyid</title>
        <WebMeta/>
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
                Blog
              </Heading>
            </Box>
            <Divider my={10} />
            <Message />
          </SlideFade>
        </Container>
      </main>
    </div>
  );
};

export default Blog;
