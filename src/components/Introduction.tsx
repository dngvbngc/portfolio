import { Center, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import background from "../assets/background.png";
import profile from "../assets/profile.jpg";
import name from "../assets/name.svg";

const Introduction = () => {
  return (
    <Center
      height='93vh'
      style={{
        backgroundImage: `url(${background})`,
        backgroundColor: "rgba(209, 194, 217, 0.5)",
        backgroundBlendMode: "lighten",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid
        templateAreas={{
          base: `"photo" "name"`,
          lg: `"photo name"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "40vw 45vw",
        }}
      >
        <GridItem area='photo'>
          <Image
            padding={{ base: 30, md: 100, lg: "" }}
            marginTop={{ base: -20, lg: -20 }}
            borderRadius='full'
            src={profile}
            alt='Profile Photo'
          />
        </GridItem>
        <GridItem area='name' marginX={{ base: 10, lg: "" }}>
          <Image
            marginTop={{ base: -5, lg: 0 }}
            paddingTop={{ base: 0, lg: 20 }}
            src={name}
          />
          <Text
            as='h2'
            color='brand.900'
            fontSize={{ base: 15, lg: 20 }}
            fontWeight='bold'
            marginTop={{ base: -4, lg: -5 }}
            textAlign='center'
          >
            <center>
              Final year Computer Science student at Yale-NUS College. Check out
              my side quests below!
            </center>
          </Text>
        </GridItem>
      </Grid>
    </Center>
  );
};

export default Introduction;
