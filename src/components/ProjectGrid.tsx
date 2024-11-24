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
      paddingY={20}
      spacing={{ base: 5, lg: 10 }}
      columns={{ base: 1, md: 2, lg: 3 }}
    >
      {designs.map((p) => (
        <Box key={p.name} marginTop={50}>
          <DesignProjectCard project={p} />
        </Box>
      ))}
      {projects.map((p) => (
        <Box key={p.name} marginTop={50}>
          <ProjectCard project={p} />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default ProjectGrid;
