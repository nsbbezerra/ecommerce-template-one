import { defaultColors } from "@/styles/customTheme";
import {
  Box,
  Container,
  Flex,
  Grid,
  HStack,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  Book,
  Contact,
  Facebook,
  Instagram,
  Landmark,
  Link2,
  Linkedin,
  Mail,
  Phone,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export default function Footer() {
  return (
    <Fragment>
      <Box bg={"gray.900"} py={12}>
        <Container maxW={"6xl"}>
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(3, 1fr)",
              "repeat(3, 1fr)",
            ]}
            gap={3}
            borderBottomWidth="1px"
            paddingBottom={10}
            borderColor="gray.700"
          >
            <Box>
              <Flex color={defaultColors.primary["400"]} gap={3} align="center">
                <Contact style={{ flexShrink: 0 }} size={18} />
                <Text fontSize={"lg"} fontWeight="bold">
                  CANAIS DE ATENDIMENTO
                </Text>
              </Flex>

              <Stack mt={5}>
                <Link href={"/"}>
                  <Flex
                    align={"center"}
                    gap={3}
                    color="white"
                    _hover={{ textDecor: "underline" }}
                  >
                    <Phone size={17} />
                    <Text>(63) 99971-1716</Text>
                  </Flex>
                </Link>
                <Link href={"/"}>
                  <Flex
                    align={"center"}
                    gap={3}
                    color="white"
                    _hover={{ textDecor: "underline" }}
                  >
                    <Mail size={17} />
                    <Text>contato.nk.info@gmail.com</Text>
                  </Flex>
                </Link>
              </Stack>
            </Box>
            <Box>
              <Flex color={defaultColors.primary["400"]} gap={3} align="center">
                <Link2 style={{ flexShrink: 0 }} size={18} />
                <Text fontSize={"lg"} fontWeight="bold">
                  LINKS ÚTEIS
                </Text>
              </Flex>

              <Stack mt={5}>
                <Link href={"/"}>
                  <Flex
                    align={"center"}
                    gap={3}
                    color="white"
                    _hover={{ textDecor: "underline" }}
                  >
                    <Landmark size={17} />
                    <Text>A Empresa</Text>
                  </Flex>
                </Link>
                <Link href={"/"}>
                  <Flex
                    align={"center"}
                    gap={3}
                    color="white"
                    _hover={{ textDecor: "underline" }}
                  >
                    <Book size={17} />
                    <Text>Termos de uso</Text>
                  </Flex>
                </Link>
              </Stack>
            </Box>
            <Box>
              <Flex color={defaultColors.primary["400"]} gap={3} align="center">
                <Smartphone style={{ flexShrink: 0 }} size={18} />
                <Text fontSize={"lg"} fontWeight="bold">
                  SOCIAL
                </Text>
              </Flex>

              <Stack mt={5}>
                <HStack>
                  <IconButton
                    aria-label="Social buttons"
                    icon={<Facebook size={16} />}
                    size="sm"
                    rounded={"full"}
                  />
                  <IconButton
                    aria-label="Social buttons"
                    icon={<Instagram size={16} />}
                    size="sm"
                    rounded={"full"}
                  />
                  <IconButton
                    aria-label="Social buttons"
                    icon={<Linkedin size={16} />}
                    size="sm"
                    rounded={"full"}
                  />
                </HStack>
              </Stack>
            </Box>
          </Grid>

          <Grid
            templateColumns={[
              "1fr",
              "1fr 1fr",
              "1fr 1fr",
              "1fr 2fr",
              "1fr 2fr",
            ]}
            gap={5}
            mt={8}
            alignItems="start"
          >
            <Flex align={"center"}>
              <Box>
                <Image
                  src={"/img/stripe.svg"}
                  width={943}
                  height={225}
                  alt="Stripe"
                />
              </Box>
              <Box>
                <Image
                  src={"/img/melhorenvio.svg"}
                  width={700}
                  height={301}
                  alt="Stripe"
                />
              </Box>
            </Flex>
            <Box color={"white"}>
              <Text fontSize={"sm"}>
                NK Informática e Gráfica - CNPJ: 40.526.622/0001-72 - Rua 34 Qd
                15 Lt 14 Nº 173, Loteamento Canavieiras, CEP: 77.710-000, Pedro
                Afonso - TO.
              </Text>
              <Text fontSize={"sm"}>
                Copyright © 2023 - Todos os direitos reservados
              </Text>
            </Box>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
}
