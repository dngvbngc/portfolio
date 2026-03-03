import { Box, SimpleGrid } from "@chakra-ui/react";
import { Project } from "../entities/Project";
import { DesignProject } from "../entities/DesignProject";
import ProjectCard from "./ProjectCard";
import DesignProjectCard from "./DesignProjectCard";

interface Props {
  projects: Project[];
  designs: DesignProject[];
}

const ProjectGrid = ({ projects, designs }: Props) => {
  return (
    <SimpleGrid
      paddingX={{ base: 10, md: 20 }}
      paddingY={{ base: 5, lg: 10 }}
      spacing={{ base: 2, lg: 5 }}
      columns={{ base: 1, md: 2, lg: 3 }}
    >
      {projects.map((p) => (
        <Box key={p.name} marginTop={10}>
          <ProjectCard project={p} />
        </Box>
      ))}
      {designs.map((p) => (
        <Box key={p.name} marginTop={10}>
          <DesignProjectCard project={p} />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default ProjectGrid;
