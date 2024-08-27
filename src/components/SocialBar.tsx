import { Badge, HStack, Link, Text } from "@chakra-ui/react";
import socials from "../data/socials";

const SocialBar = () => {
  return (
    <HStack height='7vh' paddingX={2} justify='flex-end'>
      {socials.map((s) => (
        <Link key={s.name} href={s.link}>
          <Badge
            bg='brand.900'
            color='white'
            variant='subtle'
            fontSize='14px'
            paddingX={2}
            paddingY={1}
            borderRadius='4px'
          >
            <Text>{s.name}</Text>
          </Badge>
        </Link>
      ))}
    </HStack>
  );
};

export default SocialBar;
