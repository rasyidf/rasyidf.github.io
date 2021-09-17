import Head from "next/head";
import {
  Box,
  Container,
  Heading,
  Divider,
  SlideFade,
  Button,
  Stack,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaGithubAlt, FaGlobe } from "react-icons/fa";
import Paragraph from "../components/Paragraph";
import BookmarkCard from "../components/BookmarkCard";
import Message from "../components/Message";
import WebMeta from "../components/WebMeta";

const Bookmarks = ({ bookmarksData }) => {
  const category = [
    {
      name: "website",
      icon: <FaGlobe />,
    },
    {
      name: "repository",
      icon: <FaGithubAlt />,
    },
  ];

  const [bookmarks, setBookmarks] = useState([]);

  const [activeCategory, setActiveCategory] = useState("website");

  useEffect(() => {
    bookmarksData = bookmarksData ?? [];
    let filteredBookmark = bookmarksData.filter(
      (item: { fields: { type: string; }; }) => item.fields.type === activeCategory
    );
    setBookmarks(filteredBookmark);
  }, [activeCategory]);
  return (
    <div>
      <Head>
        <title>Bookmarks | Muhammad Fahmi Rasyid</title>
       
        <WebMeta/>
      </Head>
      <main>
        <Container maxW="container.lg" mt={10}>
          <SlideFade in={true} offsetY={80}>
            <Box>
              <Heading
                as="h1"
                fontSize={{ base: "24px", md: "30px", lg: "36px" }}
                mb={4}
              >
                Bookmarks
              </Heading>
              <Paragraph fontSize="xl" lineHeight={1.6}>
                A list of my favorite articles & websites and tools, updated
                weekly.
              </Paragraph>
            </Box>
            <Divider my={10} />
          </SlideFade>
          <SlideFade in={true} offsetY={80} delay={0.2}>
            <Stack direction={["column", "row"]} spacing={3} align="left">
              {category.map((item) => (
                <Button
                  key={item.name}
                  textTransform="capitalize"
                  isActive={activeCategory === item.name}
                  onClick={(e) => setActiveCategory(item.name)}
                  _active={{
                    bg: "blue.500",
                  }}
                  leftIcon={item.icon}
                >
                  {item.name}
                </Button>
              ))}
            </Stack>
            {bookmarks?.length === 0 ? (
              <Message />
            ) : (
              <Box
                w="100%"
                mt={10}
                mx="auto"
                sx={{ columnCount: [1, 2, 3], columnGap: "20px" }}
              >
                {bookmarks?.map((item) => (
                  <BookmarkCard
                    bookmark={item.fields}
                    key={item.fields.title}
                  />
                ))}
              </Box>
            )}
          </SlideFade>
        </Container>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  let sortQuery = "sort[0][field]=title&sort[0][direction]=asc";

  let data = { error: false, records: [] };

  if (data.error) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      bookmarksData: data?.records,
    },
    revalidate: 5,
  };
}

export default Bookmarks;
