import { extendTheme, theme, defineStyleConfig } from "@chakra-ui/react";
import { Karla } from "next/font/google";
import { IconButton } from "./IconButton";

const roboto = Karla({
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"],
});

const FormLabel = defineStyleConfig({
  baseStyle: {
    mb: 0,
    fontSize: "sm",
  },
});

const customTheme = extendTheme({
  ...theme,
  initialColorMode: "light",
  useSystemColorMode: false,
  styles: {
    global: {
      body: {
        bg: "gray.50",
      },
    },
  },
  fonts: {
    body: roboto.style.fontFamily,
    heading: roboto.style.fontFamily,
  },
  components: {
    FormLabel,
    IconButton,
  },
});

const defaultColors = {
  primary: theme.colors.blue,
  secondary: theme.colors.linkedin,
  alternative: theme.colors.cyan,
  primaryName: "blue",
  secondaryName: "linkedin",
  alternativeName: "cyan",
};

export { customTheme, defaultColors };
