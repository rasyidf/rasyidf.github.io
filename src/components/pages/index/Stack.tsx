import { ToolCard } from "../../ToolCard";
import { StackCard } from "../../StackCard";
import { Heading, SlideFade, Grid } from "@chakra-ui/react";
import {
  FaNodeJs,
  FaReact,
  FaJs,
  FaDatabase,
  FaGitAlt,
  FaFigma,
  FaVuejs,
  FaPython,
  FaFlask,
  FaDesktop,
} from "react-icons/fa";

import Paragraph from "../../Paragraph";

const tools = [
  {
    name: "Node.js",
    description: "Sometime I use Node.js to build APIs",
    icon: <FaNodeJs fontSize="20px" />,
    url: "https://www.nodejs.org",
  },
  {
    name: "TypeScript",
    icon: <FaJs fontSize="20px" />,
    description: "Javascript with superpowers.",
    url: "https://www.typescriptlang.org",
  },
  {
    name: "SQL & MongoDb",
    description: "Database's hard to beat.",
    icon: <FaDatabase fontSize="20px" />,
    url: "https://www.mongodb.com/",
  },
  {
    name: "Figma",
    description: "Sometimes i code, sometimes design.",
    icon: <FaFigma fontSize="20px" />,
    url: "https://www.figma.com/",
  },
];

const stacks = [
  {
    icon: <FaNodeJs />,
    title: "Backend",
    stack: ["Node.js", "Express", "Mongoose"],
    url: "https://www.geeksforgeeks.org/mern-stack",
  },
  {
    icon: <FaPython />,
    title: "Python",
    stack: ["Flask", "Django", "Streamlit"],
    url: "https://en.wikipedia.org/wiki/Flask_(web_framework)",
  },
  {
    icon: <FaReact />,
    title: "Frontend",
    stack: ["React", "Redux", "React-Router", "Next.js"],
    url: "https://react-redux.js.org/",
  },
  {
    icon: <FaVuejs />,
    title: "Vue",
    stack: ["Vue", "Nuxt.js", "Vue-Router", "Vue-CLI"],
    url: "https://vuejs.org/",
  },
  {
    icon: <FaDesktop />,
    title: "Desktop WPF",
    stack: ["C#", "WPF", "MVVMToolkit"],
    url: "https://dotnet.microsoft.com/",
  },
  {
    icon: <FaDesktop />,
    title: "Desktop UWP",
    stack: ["C#", "UWP", "WinUI 2.6"],
    url: "https://dotnet.microsoft.com/",
  },
];

const Stack = () => {
  return (
    <SlideFade in={true} offsetY={80} delay={0.2}>
      <Heading
        as="h1"
        fontSize={{ base: "24px", md: "30px", lg: "36px" }}
        mb={3}
      >
        Primary Stack & Technologies
      </Heading>
      <Paragraph fontSize="xl" lineHeight={1.6}>
        As a full-stack web developer there are alot of tools you use in your
        daily bases, these are primary tools that i use & like.
      </Paragraph>
      <Grid
        mt={10}
        templateColumns={["1fr", "1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={5}
      >
        {tools.map((tool) => (
          <ToolCard tool={tool} key={tool?.name} />
        ))}
      </Grid>
      <Heading
        as="h1"
        fontSize={{ base: "24px", md: "30px", lg: "36px" }}
        mb={3}
        mt={5}
      >
        Other Stack & Technologies
      </Heading>
      <Paragraph fontSize="xl" lineHeight={1.6}>
        To make a better developer experience, there are alot of stack that i
        learned, such as
      </Paragraph>
      <Grid
        mt={10}
        templateColumns={["1fr", "1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={5}
      >
        {stacks.map((stack) => (
          <StackCard stack={stack} key={stack?.title} />
        ))}
      </Grid>
    </SlideFade>
  );
};

export default Stack;
