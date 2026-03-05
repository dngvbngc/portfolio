import {
  Box,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import profile from "../assets/styled_profile_v5.png";

const Introduction = () => {
  return (
    <Box>
      <SimpleGrid height="93vh" color="brand.400" columns={{ base: 1, lg: 2 }}>
        {/* For large screens */}
        <Center display={{ base: "none", lg: "flex" }} paddingLeft={100}>
          <Image
            marginTop={-20}
            padding={{ lg: 30, xl: 100 }}
            src={profile}
            alt="Profile Photo"
          />
        </Center>
        <Center
          display={{ base: "none", lg: "flex" }}
          marginLeft={{ base: 0, md: "20vw", lg: "-10vw", xl: "-20vw" }}
        >
          <Heading
            marginTop={-20}
            width={500}
            fontSize={20}
            fontWeight="semibold"
          >
            Hi, I am...{" "}
            <Text fontSize={80} color="brand.500">
              Ari
            </Text>{" "}
            <VStack alignItems="flex-start" gap={2} marginTop={2}>
              <span>
                <span style={{ marginRight: "10px" }}>&#x2615;</span> AI &
                Software Development
              </span>

              <span>
                <span style={{ marginRight: "10px", marginTop: "2px" }}>
                  &#9728;
                </span>{" "}
                Yale-NUS College, Class of 2025
              </span>
            </VStack>
          </Heading>
        </Center>
        {/* For small to medium screens */}
        <Box display={{ base: "flex", lg: "none" }} justifyContent="center">
          <Image
            alignSelf="center"
            boxSize="70vw"
            src={profile}
            alt="Profile Photo"
          />
        </Box>
        <Box
          textAlign="center"
          display={{ base: "flex", lg: "none" }}
          justifyContent="center"
          marginTop={-10}
        >
          <Heading
            fontSize={{ base: 15, sm: 18 }}
            fontWeight="normal"
            maxWidth="60vw"
          >
            Hi, I am...{" "}
            <Text
              fontSize={{ base: 50, sm: 70 }}
              color="brand.500"
              fontWeight={"semibold"}
            >
              Ari Dang
            </Text>{" "}
            <VStack gap={1} marginTop={1}>
              <span>
                <span style={{ marginRight: "2px" }}>&#x2615;</span> AI &
                Software Development
                <br></br>
              </span>
              <span>
                <span style={{ marginRight: "2px", marginTop: "2px" }}>
                  &#9728;
                </span>{" "}
                Yale-NUS College '25
                <br></br>
              </span>
            </VStack>
          </Heading>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Introduction;
