import { extendTheme, theme, defineStyleConfig } from "@chakra-ui/react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const FormLabel = defineStyleConfig({
  baseStyle: {
    mb: 0,
    fontSize: "sm",
  },
});

const IconButton = defineStyleConfig({
  baseStyle: {
    rounded: "full",
  },
});

const customTheme = extendTheme({
  ...theme,
  styles: {
    global: {
      body: {
        bg: "gray.50",
      },
    },
  },
  fonts: {
    body: roboto.style.fontFamily,
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
