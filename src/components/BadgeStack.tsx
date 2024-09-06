import { Badge, Box, HStack, Link, Stack, Text } from "@chakra-ui/react";

interface Props {
  stack: string[];
  github: string;
}

const RegularStack = ({ stack, github }: Props) => {
  return (
    <HStack justifyContent='flex-end' paddingTop={5} overflow='wrap'>
      {stack.map((s) => (
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
      <Link href={github}>
        <Badge
          bg='brand.500'
          color='white'
          variant='subtle'
          paddingX={2}
          paddingY={1}
          borderRadius='4px'
          fontSize={{ base: "medium", md: "small", lg: "medium" }}
        >
          <Text>Code</Text>
        </Badge>
      </Link>
    </HStack>
  );
};

const DynamicStack = ({ stack, github }: Props) => {
  if (stack.length <= 3) return <RegularStack stack={stack} github={github} />;

  return (
    <Stack>
      <HStack justifyContent='flex-end' paddingTop={5}>
        {stack.slice(0, 3).map((s) => (
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
      </HStack>
      <HStack justifyContent='flex-end'>
        {stack.slice(3).map((s) => (
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
        <Link href={github}>
          <Badge
            bg='brand.500'
            color='white'
            variant='subtle'
            paddingX={2}
            paddingY={1}
            borderRadius='4px'
            fontSize={{ base: "medium", md: "small", lg: "medium" }}
          >
            <Text>Code</Text>
          </Badge>
        </Link>
      </HStack>
    </Stack>
  );
};

export const BadgeStack = ({ stack, github }: Props) => {
  return (
    <>
      <Box display={{ base: "none", lg: "block" }}>
        <RegularStack stack={stack} github={github} />
      </Box>
      <Box display={{ base: "block", lg: "none" }}>
        <DynamicStack stack={stack} github={github} />
      </Box>
    </>
  );
};

export default BadgeStack;
