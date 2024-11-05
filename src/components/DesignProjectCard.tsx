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
      overflow='hidden'
    >
      <Card variant='outline' bg='rgba(255, 255, 255, 0.6)' borderRadius={0}>
        <Link href={project.figma}>
          <Image
            padding={1}
            src={`projects/${project.image}`}
            objectFit='cover'
          />
        </Link>
        <CardBody>
          <Heading fontSize='2xl' marginBottom={2} color='brand.500'>
            <Link href={project.figma}>{project.name}</Link>
          </Heading>
          <Text as='i' color='black'>
            {project.description}
          </Text>
          <HStack justifyContent='flex-end' paddingTop={5}>
            {project.desktop_prototype && (
              <Link href={project.desktop_prototype}>
                <Badge
                  bg='purple'
                  color='white'
                  variant='subtle'
                  paddingX={2}
                  paddingY={1}
                  borderRadius='4px'
                  fontSize='small'
                >
                  <Text>desktop</Text>
                </Badge>
              </Link>
            )}
            {project.tablet_prototype && (
              <Link href={project.tablet_prototype}>
                <Badge
                  bg='purple'
                  color='white'
                  variant='subtle'
                  paddingX={2}
                  paddingY={1}
                  borderRadius='4px'
                  fontSize='small'
                >
                  <Text>tablet</Text>
                </Badge>
              </Link>
            )}
            {project.mobile_prototype && (
              <Link href={project.mobile_prototype}>
                <Badge
                  bg='purple'
                  color='white'
                  variant='subtle'
                  paddingX={2}
                  paddingY={1}
                  borderRadius='4px'
                  fontSize='small'
                >
                  <Text>mobile</Text>
                </Badge>
              </Link>
            )}
            <Link href={project.figma}>
              <Badge
                bg='red'
                color='white'
                variant='subtle'
                paddingX={2}
                paddingY={1}
                borderRadius='4px'
                fontSize='small'
              >
                <Text>figma</Text>
              </Badge>
            </Link>
          </HStack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default DesignProjectCard;
