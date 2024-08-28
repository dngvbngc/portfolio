import { Heading, HStack, Link } from "@chakra-ui/react";
import socials from "../data/socials";

const SocialBar = () => {
  return (
    <HStack
      backgroundColor='brand.500'
      height='7vh'
      paddingX={5}
      justify='flex-end'
    >
      {socials.map((s) => (
        <Link key={s.name} href={s.link}>
          <Heading color='white' fontSize={20}>
            {s.name.toLowerCase()}
          </Heading>
        </Link>
      ))}
    </HStack>
  );
};

export default SocialBar;
