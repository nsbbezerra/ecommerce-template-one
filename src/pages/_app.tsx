import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "@/styles/customTheme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
