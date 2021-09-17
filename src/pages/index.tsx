import Head from "next/head";
import { Container, Divider } from "@chakra-ui/react";

import WebMeta from "../components/WebMeta";
import { Stack, Timeline, Profile } from "../components/pages/index";
const Index = () => (
  <div>
    <Head>
      <title>Rasyid | Personal Blog</title>

      <WebMeta />
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
