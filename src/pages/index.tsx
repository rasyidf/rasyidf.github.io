import Head from "next/head";
import { Container, Divider } from "@chakra-ui/react";

import { Stack, Timeline, Profile } from "../components/pages/index";
const Index = () => (
  <div>
    <Head>
      <title>Rasyid | Personal Blog</title>
      <meta
        name="description"
        content="Rasyid FM | Backend developer - UI / UX Designer"
      />
      <meta property="og:type" content="website" />
      <meta name="robots" content="follow, index" />
      <meta property="og:url" content="https://rasyid.dev/" />
      <meta
        property="og:title"
        content="Rasyid FM | Backend developer - UI / UX Designer"
      />
      <meta property="og:image" content="/meta-image.jpg" />
    </Head>
    <main>
      <Container maxW="container.xl" mt={["5", "10"]}>
        <Profile />
        <Divider my={10} />
        <Stack />
        <Divider my={10} />
        <Timeline />
      </Container>
    </main>
  </div>
)

export default Index
