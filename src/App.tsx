import { Grid, GridItem, Image, SimpleGrid, Text } from "@chakra-ui/react";
import name from "./assets/name.svg";
import projects from "./data/projects";
import "./App.css";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <Grid
      gap={10}
      padding={10}
      templateAreas={{
        base: `"intro intro"
             "projects projects"`,
        md: `"intro projects"`,
      }}
    >
      <GridItem width={{ sm: "100vw", md: "25vw" }} area={"intro"}>
        <Image src={name} width={{ base: "40vw", md: "20vw" }} />
        <Text
          borderRadius={10}
          bg={{ md: "rgba(255, 255, 0, 0.5)" }}
          color='black'
          padding={{ base: 1, md: 5 }}
        >
          Hi, my name is Ari and I am a final-year Computer Science student at
          Yale-NUS College in Singapore. Check out my side projects/quests!
        </Text>
      </GridItem>
      <GridItem area={"projects"}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
          {projects.map((p) => (
            <ProjectCard project={p} />
          ))}
        </SimpleGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
