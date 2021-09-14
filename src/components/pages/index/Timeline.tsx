import {
  Heading,
  SlideFade,
  Button,
  List,
  ListItem,
  ListIcon,
  Link,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const Timeline = () => {
  return (
    <SlideFade in={true} offsetY={80} delay={0.2}>
      <Heading
        as="h1"
        fontSize={{ base: "24px", md: "30px", lg: "36px" }}
        mb={3}
      >
        Timeline
      </Heading>
      <Heading mt={10} mb={5} as="h2" size="md">
        2021
      </Heading>
      <List spacing={18} fontSize="18">
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="blue.500" />
          Working as a Backend developer at Logee Control by Telkom Indonesia
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="blue.500" />
          Working as part-time Software Development Consultant / Lector
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="blue.500" />
          Studying At Universitas Muhammadiyah Yogyakarta
        </ListItem>
      </List>
      <Link href="https://linkedin.com/in/rasyidufa" target="_blank">
        <Button mt={10}>Read More</Button>
      </Link>
    </SlideFade>
  );
};

export default Timeline;
