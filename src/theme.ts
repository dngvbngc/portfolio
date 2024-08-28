import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import "@fontsource/dm-serif-text";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'DM Serif Text', sans-serif`,
  },
  colors: {
    brand: {
      100: "#C8C6C2",
      200: "#967261",
      300: "#68869a",
      400: "#735957",
      500: "#2E2831",
    },
  },
});

export default theme;
