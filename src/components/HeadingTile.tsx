import { Center, Heading } from "@chakra-ui/react";

interface Props {
  text: string;
}

const HeadingTile = ({ text }: Props) => {
  return (
    <Center padding={10} backgroundColor='brand.500'>
      <Heading letterSpacing={1} color='white'>
        {text}
      </Heading>
    </Center>
  );
};

export default HeadingTile;
