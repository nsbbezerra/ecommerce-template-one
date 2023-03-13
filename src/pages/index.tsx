import Cards from "@/components/app/Cards";
import Caroussel from "@/components/app/Carousel";
import CategoryCards from "@/components/app/CategoryCards";
import Footer from "@/components/app/Footer";
import HeadApp from "@/components/app/Head";
import Header from "@/components/app/Header";
import { defaultColors } from "@/styles/customTheme";
import { Box, Container, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { Lock, Medal, Truck } from "lucide-react";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <HeadApp />
      <Header />
      <Caroussel />

      <Container maxW={"6xl"} py={14}>
        <Flex justify={"center"} direction="column" align={"center"} mb={10}>
          <Heading fontWeight={800} textAlign="center">
            Os mais vendidos
          </Heading>
          <Box
            w="24"
            borderBottomWidth={"3px"}
            borderColor={defaultColors.primary["500"]}
          />
        </Flex>
        <Cards />
      </Container>

      <Box w="full" bg={"gray.200"} py={12}>
        <Container maxW={"4xl"}>
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(3, 1fr)",
              "repeat(3, 1fr)",
            ]}
            gap={5}
          >
            <Flex gap={3} align="center">
              <Truck
                size={60}
                color={defaultColors.primary["500"]}
                style={{ flexShrink: 0 }}
              />
              <Box>
                <Text fontWeight={"bold"} color={"gray.700"}>
                  ENTREGA RÁPIDA E FACILITADA
                </Text>
              </Box>
            </Flex>
            <Flex gap={3} align="center">
              <Lock
                size={60}
                color={defaultColors.primary["500"]}
                style={{ flexShrink: 0 }}
              />
              <Box>
                <Text fontWeight={"bold"} color={"gray.700"}>
                  GARANTIMOS UMA COMPRA 100% SEGURA
                </Text>
              </Box>
            </Flex>
            <Flex gap={3} align="center">
              <Medal
                size={60}
                color={defaultColors.primary["500"]}
                style={{ flexShrink: 0 }}
              />
              <Box>
                <Text fontWeight={"bold"} color={"gray.700"}>
                  GARANTIMOS A QUALIDADE DE NOSSOS PRODUTOS
                </Text>
              </Box>
            </Flex>
          </Grid>
        </Container>
      </Box>

      <Container maxW={"6xl"} py={14}>
        <Flex justify={"center"} direction="column" align={"center"} mb={10}>
          <Heading fontWeight={800} textAlign="center">
            Compre por categorias
          </Heading>
          <Box
            w="24"
            borderBottomWidth={"3px"}
            borderColor={defaultColors.primary["500"]}
          />
        </Flex>
        <CategoryCards />
      </Container>

      <Footer />
    </Fragment>
  );
}
