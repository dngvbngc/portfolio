import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      100: "#eeb1b1",
      200: "#297dda",
      300: "#d1c2d9",
      500: "#ed77c1",
      900: "#515389",
    },
  },
});

export default theme;
