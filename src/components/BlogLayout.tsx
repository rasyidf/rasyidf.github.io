import Head from "next/head";
import { Box, Container, Heading, SlideFade, Divider } from "@chakra-ui/react";

const BlogLayout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Blog Title | Muhammad Fahmi Rasyid</title>
        <meta
          name="description"
          content="Muhammad Fahmi Rasyid | Backend developer - UI / UX Designer"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rasyid.dev/" />
        <meta
          property="og:title"
          content="Muhammad Fahmi Rasyid | Backend developer - UI / UX Designer"
        />
        <meta property="og:image" content="/meta-image.jpg" />
      </Head>
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
        </SlideFade>
        <SlideFade in={true} offsetY={80}>
          <main>{children}</main>
        </SlideFade>
      </Container>
    </>
  );
};

export default BlogLayout;
