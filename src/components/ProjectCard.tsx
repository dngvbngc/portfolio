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

interface Project {
  name: string;
  description: string;
  image: string;
  stack: string[];
  github: string;
  live: string;
}

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
      borderRadius={10}
      overflow='hidden'
    >
      <Card variant='outline' bg='rgba(255, 255, 255, 0.8)' borderRadius='20px'>
        <Link href={project.live}>
          <Image
            src={`projects/${project.image}`}
            width='100%'
            objectFit='cover'
            borderRadius='20px 20px 0 0'
          />
        </Link>
        <CardBody>
          <Heading
            fontSize='2xl'
            marginBottom={2}
            textAlign='left'
            color='#297dda'
          >
            <Link href={project.live}>{project.name}</Link>
          </Heading>
          <Text as='i' color='black' alignSelf='center'>
            {project.description}
          </Text>
          <HStack justifyContent='flex-end' paddingTop={5}>
            {project.stack.map((s) => (
              <Badge
                bg='cornflowerblue'
                colorScheme='black'
                variant='subtle'
                fontSize='14px'
                paddingX={2}
                paddingY={1}
                borderRadius='4px'
              >
                <Text>{s}</Text>
              </Badge>
            ))}
            <Link href={project.github}>
              <Badge
                bg='#C3B1E1'
                colorScheme='black'
                variant='subtle'
                fontSize='14px'
                paddingX={2}
                paddingY={1}
                borderRadius='4px'
              >
                <Text>Github</Text>
              </Badge>
            </Link>
          </HStack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default ProjectCard;
