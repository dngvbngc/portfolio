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
      borderRadius={10}
      overflow='hidden'
    >
      <Card
        variant='outline'
        bg='rgba(255, 255, 255, 0.8)'
        borderRadius='20px'
        direction={{ base: "column", md: "row" }}
      >
        <Link href={project.live}>
          <Image
            src={`projects/${project.image}`}
            width={{ base: "100%", md: "350px", lg: "50vw" }}
            height={{ md: "200px", lg: "27vw" }}
            objectFit='cover'
            borderRadius={{ base: "20px 20px 0 0", md: "20px 0 0 20px" }}
          />
        </Link>
        <CardBody>
          <Heading fontSize='2xl' marginBottom={2} color='brand.200'>
            <Link href={project.live}>{project.name}</Link>
          </Heading>
          <Text as='i' color='black'>
            {project.description}
          </Text>
          <HStack
            justifyContent={{ base: "flex-end", lg: "flex-start" }}
            paddingTop={5}
          >
            {project.stack.map((s) => (
              <Badge
                key={s}
                bg='cornflowerblue'
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
                bg='brand.900'
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
