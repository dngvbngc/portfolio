import {
  Box,
  Card,
  CardBody,
  Heading,
  Link,
  Text,
  Image,
  HStack,
  Badge,
} from "@chakra-ui/react";
import { DesignProject } from "../entities/DesignProject";

interface Props {
  project: DesignProject;
}

const DesignProjectCard = ({ project }: Props) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
      overflow="hidden"
    >
      <Card variant="outline" bg="rgba(255, 255, 255, 0.6)" borderRadius={10}>
        {project.image && (
          <Link href={project.figma}>
            <Image
              padding={1}
              src={`projects/${project.image}`}
              objectFit="cover"
            />
          </Link>
        )}

        <CardBody>
          <Heading fontSize="2xl" marginBottom={2} color="brand.500">
            <Link href={project.figma}>{project.name}</Link>
          </Heading>
          <Text>{project.description}</Text>
          <HStack justifyContent="flex-end" paddingTop={5}>
            {project.desktop_prototype && (
              <Link href={project.desktop_prototype}>
                <Badge
                  bg="brand.300"
                  color="white"
                  variant="subtle"
                  paddingX={2}
                  paddingY={1}
                  borderRadius="4px"
                  fontSize="small"
                >
                  <Text fontFamily={`monospace`}>desktop</Text>
                </Badge>
              </Link>
            )}
            {project.tablet_prototype && (
              <Link href={project.tablet_prototype}>
                <Badge
                  bg="brand.300"
                  color="white"
                  variant="subtle"
                  paddingX={2}
                  paddingY={1}
                  borderRadius="4px"
                  fontSize="small"
                >
                  <Text fontFamily={`monospace`}>tablet</Text>
                </Badge>
              </Link>
            )}
            {project.mobile_prototype && (
              <Link href={project.mobile_prototype}>
                <Badge
                  bg="brand.300"
                  color="white"
                  variant="subtle"
                  paddingX={2}
                  paddingY={1}
                  borderRadius="4px"
                  fontSize="small"
                >
                  <Text fontFamily={`monospace`}>mobile</Text>
                </Badge>
              </Link>
            )}
            <Link href={project.figma}>
              <Badge
                bg="#e08836"
                color="white"
                variant="subtle"
                paddingX={2}
                paddingY={1}
                borderRadius="4px"
                fontSize="small"
              >
                <Text fontFamily={`monospace`}>figma</Text>
              </Badge>
            </Link>
          </HStack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default DesignProjectCard;
