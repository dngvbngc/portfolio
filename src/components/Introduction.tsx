import {
  Box,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import "@fontsource/dm-serif-text";
import profile from "../assets/styled_profile.png";

const Introduction = () => {
  return (
    <Box>
      <SimpleGrid height='93vh' color='brand.400' columns={{ base: 1, lg: 2 }}>
        {/* For large screens */}
        <Center display={{ base: "none", lg: "flex" }} paddingLeft={100}>
          <Image
            marginTop={-20}
            padding={{ lg: 30, xl: 100 }}
            src={profile}
            alt='Profile Photo'
          />
        </Center>
        <Center display={{ base: "none", lg: "flex" }} paddingRight={100}>
          <Heading marginTop={-20} width={500} fontSize={40} fontWeight='thin'>
            hi, i am...{" "}
            <Text fontSize={70} color='brand.500'>
              Ari Dang
            </Text>{" "}
            final year computer science student at yale-nus college, singapore.
          </Heading>
        </Center>
        {/* For small to medium screens */}
        <Box display={{ base: "flex", lg: "none" }} justifyContent='center'>
          <Image
            alignSelf='center'
            boxSize='70vw'
            src={profile}
            alt='Profile Photo'
          />
        </Box>
        <Box
          textAlign='center'
          display={{ base: "flex", lg: "none" }}
          justifyContent='center'
          marginTop={-10}
        >
          <Heading
            fontSize={{ base: 20, sm: 30 }}
            fontWeight='thin'
            maxWidth='60vw'
          >
            hi, i am...{" "}
            <Text fontSize={{ base: 50, sm: 70 }} color='brand.500'>
              Ari Dang
            </Text>{" "}
            final year computer science student at yale-nus college, singapore.
          </Heading>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Introduction;
