import {
  Badge,
  Box,
  Center,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import profile from "../assets/profile.jpg";
import name from "../assets/name.svg";
import background from "../assets/background.png";

const Introduction = () => {
  return (
    <Box>
      <SimpleGrid
        height='93vh'
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
        }}
        columns={{ base: 1, lg: 2 }}
        paddingX={{ base: 5, lg: 20 }}
      >
        <Center display={{ base: "none", lg: "flex" }}>
          <Image
            marginTop={-20}
            padding={{ base: 0, lg: 100 }}
            src={profile}
            borderRadius='full'
            alt='Profile Photo'
          />
        </Center>
        <Center>
          <VStack paddingRight={{ base: 0, lg: 100 }}>
            <Image src={name} alt='Ari Dang' marginTop={-20} />
            <Stack
              direction={{ base: "column", lg: "row" }}
              spacing={5}
              textAlign='center'
            >
              <Badge
                bg={{ base: "brand.900", lg: "cornflowerblue" }}
                color='white'
                variant='subtle'
                fontSize='15px'
                paddingX={2}
                paddingY={1}
                borderRadius='4px'
              >
                <Text>Computer Science</Text>
              </Badge>
              <Badge
                bg={{ base: "brand.900", lg: "cornflowerblue" }}
                color='white'
                variant='subtle'
                fontSize='15px'
                paddingX={2}
                paddingY={1}
                borderRadius='4px'
              >
                <Text>Yale-NUS College</Text>
              </Badge>
              <Badge
                bg={{ base: "brand.900", lg: "cornflowerblue" }}
                color='white'
                variant='subtle'
                fontSize='15px'
                paddingX={2}
                paddingY={1}
                borderRadius='4px'
              >
                <Text>Singapore & Saigon</Text>
              </Badge>
            </Stack>
          </VStack>
        </Center>
      </SimpleGrid>
    </Box>
  );
};

export default Introduction;
