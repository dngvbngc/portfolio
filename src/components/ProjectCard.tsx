import {
  Badge,
  Box,
  Card,
  CardBody,
  Heading,
  HStack,
  Link,
  Text,
  Image,
} from "@chakra-ui/react";
import { Project } from "../entities/Project";

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
      <Card variant='outline' bg='rgba(255, 255, 255, 0.8)' borderRadius={0}>
        <Link href={project.live}>
          <Image
            padding={1}
            src={`projects/${project.image}`}
            objectFit='cover'
          />
        </Link>
        <CardBody>
          <Heading fontSize='2xl' marginBottom={2} color='brand.500'>
            <Link href={project.live}>{project.name}</Link>
          </Heading>
          <Text as='i' color='black'>
            {project.description}
          </Text>
          <HStack justifyContent='flex-end' paddingTop={5}>
            {project.stack.map((s) => (
              <Badge
                key={s}
                bg='brand.400'
                color='white'
                variant='subtle'
                paddingX={2}
                paddingY={1}
                borderRadius='4px'
                fontSize={{ base: "medium", md: "small", lg: "medium" }}
              >
                <Text>{s}</Text>
              </Badge>
            ))}
            <Link href={project.github}>
              <Badge
                bg='brand.500'
                color='white'
                variant='subtle'
                fontSize='14px'
                paddingX={2}
                paddingY={1}
                borderRadius='4px'
              >
                <Text>Code</Text>
              </Badge>
            </Link>
          </HStack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default ProjectCard;
