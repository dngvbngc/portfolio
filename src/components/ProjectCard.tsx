import {
  Box,
  Card,
  CardBody,
  Heading,
  Link,
  Text,
  Image,
} from "@chakra-ui/react";
import { Project } from "../entities/Project";
import BadgeStack from "./BadgeStack";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
      overflow='hidden'
    >
      <Card variant='outline' bg='rgba(255, 255, 255, 0.6)' borderRadius={0}>
        <Link href={project.live}>
          {project.image && (
            <Link href={project.live}>
              <Image
                padding={1}
                src={`projects/${project.image}`}
                objectFit='cover'
              />
            </Link>
          )}
        </Link>
        <CardBody>
          <Heading fontSize='2xl' marginBottom={2} color='brand.500'>
            <Link href={project.live}>{project.name}</Link>
          </Heading>
          <Text as='i' color='black'>
            {project.description}
          </Text>
          <BadgeStack stack={project.stack} github={project.github} />
        </CardBody>
      </Card>
    </Box>
  );
};

export default ProjectCard;
