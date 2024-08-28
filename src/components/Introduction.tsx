import {
  Box,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import "@fontsource/dm-serif-text";
import profile from "../assets/profile.jpg";

const Introduction = () => {
  return (
    <Box>
      <SimpleGrid height='93vh' color='brand.400' columns={{ base: 1, lg: 2 }}>
        <Center
          paddingLeft={{ base: 0, lg: 150 }}
          display={{ base: "none", lg: "flex" }}
        >
          <Image
            marginTop={-20}
            padding={{ lg: 30, xl: 100 }}
            borderRadius='full'
            src={profile}
            alt='Profile Photo'
          />
        </Center>
        <Center padding={{ base: 10, lg: 0 }} paddingRight={{ lg: 150 }}>
          <Heading marginTop={-20} width={500} fontSize={40} fontWeight='thin'>
            hi, i am...{" "}
            <Text fontSize={70} color='brand.500'>
              Ari Dang
            </Text>{" "}
            and i'm a final year computer science student at yale-nus college,
            singapore.
          </Heading>
        </Center>
      </SimpleGrid>
    </Box>
  );
};

export default Introduction;
