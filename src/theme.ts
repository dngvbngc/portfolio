import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import "@fontsource-variable/merriweather";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Merriweather Variable', sans-serif`,
    body: `'Merriweather Variable', sans-serif`,
  },
  colors: {
    brand: {
      100: "#C8C6C2",
      200: "#967261",
      300: "#6f72e8",
      400: "#735957",
      500: "#2E2831",
    },
  },
});

export default theme;
