import { Box, SimpleGrid } from "@chakra-ui/react";
import { Project } from "../entities/Project";
import ProjectCard from "./ProjectCard";

interface Props {
  projects: Project[];
}

const ProjectGrid = ({ projects }: Props) => {
  return (
    <SimpleGrid
      paddingX={{ base: 10, md: 20 }}
      paddingY={20}
      spacing={{ base: 5, lg: 10 }}
      columns={{ base: 1, md: 2 }}
    >
      {projects.map((p) => (
        <Box key={p.name} marginTop={50}>
          <ProjectCard project={p} />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default ProjectGrid;
