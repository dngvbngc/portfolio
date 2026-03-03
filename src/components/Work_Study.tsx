import { Text, Image, Stack } from "@chakra-ui/react";
import graduation from "../assets/graduation.jpg";
import cursor from "../assets/cursor.gif";

const Work_Study = () => {
  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      gap={{ base: 0, md: 5 }}
      alignItems={"center"}
    >
      <Text
        paddingX={{ base: 10, md: 20 }}
        paddingY={20}
        fontSize={{ base: 15, md: 18 }}
        color="brand.500"
        margin={{ base: 0, md: 20 }}
      >
        <Text>
          After graduating from Yale-NUS College with a Bachelor of Science with
          Honours in <b>Mathematical, Computational and Statistical Sciences</b>
          , I am currently a full-stack AI developer at <b>Integrum Global</b>,
          a start up in Singapore specialising in AI transformation!
        </Text>
        <Text marginTop={5}>
          I am excited to continue learning and growing in the field of software
          & AI. Recently, I have acquired the{" "}
          <b>AWS Certified Cloud Practitioner </b>
          Certification, and I am eagerly preparing for my next professional
          milestone. Stay tuned!
        </Text>
      </Text>

      <Stack
        direction={"column"}
        alignItems={"center"}
        gap={5}
        paddingBottom={{ base: 5, lg: 20 }}
      >
        <Image
          padding={{ base: 10, md: 150, lg: 20 }}
          marginTop={{ base: -20, md: -150, lg: 0 }}
          marginLeft={{ base: 0, lg: -20 }}
          src={graduation}
          borderRadius={500}
          objectFit="cover"
        />
        <Image
          src={cursor}
          boxSize={10}
          display={{ base: "none", lg: "block" }}
          marginTop={{ base: 0, lg: -40 }}
          marginLeft={{ base: 0, lg: 39 }}
        />
      </Stack>
    </Stack>
  );
};

export default Work_Study;
