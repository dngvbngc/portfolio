import { Box, SimpleGrid } from "@chakra-ui/react";
import { Project } from "../entities/Project";
import ProjectCard from "./ProjectCard";

interface Props {
  projects: Project[];
}

const ProjectGrid = ({ projects }: Props) => {
  return (
    <SimpleGrid
      paddingX={{ base: 5, md: 20 }}
      paddingY={10}
      columns={{ base: 1, md: 1 }}
      spacing={{ base: 5, lg: 10 }}
    >
      {projects.map((p) => (
        <Box key={p.name}>
          <ProjectCard project={p} />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default ProjectGrid;
