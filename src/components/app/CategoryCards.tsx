import { Button, Center, Grid, Stack, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import { Card, CardBody } from "@chakra-ui/react";
import Image from "next/image";
import { defaultConfigs } from "@/configs";
import Link from "next/link";
import { defaultColors } from "@/styles/customTheme";
import { CardImageContainer } from "./styled/styles";

export default function CategoryCards() {
  return (
    <Fragment>
      <Grid
        templateColumns={[
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
          "repeat(5, 1fr)",
          "repeat(5, 1fr)",
        ]}
        gap={[2, 2, 3, 4, 4]}
      >
        <Link href={"/"}>
          <Card overflow={"hidden"}>
            <CardImageContainer position="relative">
              <Image
                src={
                  "https://img.freepik.com/psd-gratuitas/modelo-de-cartao-de-visita-profissional-moderno-e-limpo_501970-93.jpg"
                }
                width={300}
                height={300}
                alt={`${defaultConfigs.companyName} - Cartão de visita`}
                style={{ objectFit: "cover", width: "100%" }}
              />
            </CardImageContainer>
            <Stack>
              <CardBody p={2}>
                <Text
                  fontWeight={"bold"}
                  _hover={{ color: defaultColors.primary["500"] }}
                  color="gray.700"
                  fontSize={["sm", "sm", "md", "md", "md"]}
                >
                  Cartão de visita
                </Text>
              </CardBody>
            </Stack>
          </Card>
        </Link>
        <Link href={"/"}>
          <Card overflow={"hidden"}>
            <CardImageContainer position="relative">
              <Image
                src={
                  "https://img.freepik.com/psd-gratuitas/modelo-de-cartao-de-visita-profissional-moderno-e-limpo_501970-93.jpg"
                }
                width={300}
                height={300}
                alt={`${defaultConfigs.companyName} - Cartão de visita`}
                style={{ objectFit: "cover", width: "100%" }}
              />
            </CardImageContainer>
            <Stack>
              <CardBody p={2}>
                <Text
                  fontWeight={"bold"}
                  _hover={{ color: defaultColors.primary["500"] }}
                  color="gray.700"
                  fontSize={["sm", "sm", "md", "md", "md"]}
                >
                  Cartão de visita
                </Text>
              </CardBody>
            </Stack>
          </Card>
        </Link>
        <Link href={"/"}>
          <Card overflow={"hidden"}>
            <CardImageContainer position="relative">
              <Image
                src={
                  "https://img.freepik.com/psd-gratuitas/modelo-de-cartao-de-visita-profissional-moderno-e-limpo_501970-93.jpg"
                }
                width={300}
                height={300}
                alt={`${defaultConfigs.companyName} - Cartão de visita`}
                style={{ objectFit: "cover", width: "100%" }}
              />
            </CardImageContainer>
            <Stack>
              <CardBody p={2}>
                <Text
                  fontWeight={"bold"}
                  _hover={{ color: defaultColors.primary["500"] }}
                  color="gray.700"
                  fontSize={["sm", "sm", "md", "md", "md"]}
                >
                  Cartão de visita
                </Text>
              </CardBody>
            </Stack>
          </Card>
        </Link>
        <Link href={"/"}>
          <Card overflow={"hidden"}>
            <CardImageContainer position="relative">
              <Image
                src={
                  "https://img.freepik.com/psd-gratuitas/modelo-de-cartao-de-visita-profissional-moderno-e-limpo_501970-93.jpg"
                }
                width={300}
                height={300}
                alt={`${defaultConfigs.companyName} - Cartão de visita`}
                style={{ objectFit: "cover", width: "100%" }}
              />
            </CardImageContainer>
            <Stack>
              <CardBody p={2}>
                <Text
                  fontWeight={"bold"}
                  _hover={{ color: defaultColors.primary["500"] }}
                  color="gray.700"
                  fontSize={["sm", "sm", "md", "md", "md"]}
                >
                  Cartão de visita
                </Text>
              </CardBody>
            </Stack>
          </Card>
        </Link>
        <Link href={"/"}>
          <Card overflow={"hidden"}>
            <CardImageContainer position="relative">
              <Image
                src={
                  "https://img.freepik.com/psd-gratuitas/modelo-de-cartao-de-visita-profissional-moderno-e-limpo_501970-93.jpg"
                }
                width={300}
                height={300}
                alt={`${defaultConfigs.companyName} - Cartão de visita`}
                style={{ objectFit: "cover", width: "100%" }}
              />
            </CardImageContainer>
            <Stack>
              <CardBody p={2}>
                <Text
                  fontWeight={"bold"}
                  _hover={{ color: defaultColors.primary["500"] }}
                  color="gray.700"
                  fontSize={["sm", "sm", "md", "md", "md"]}
                >
                  Cartão de visita
                </Text>
              </CardBody>
            </Stack>
          </Card>
        </Link>
        <Link href={"/"}>
          <Card overflow={"hidden"}>
            <CardImageContainer position="relative">
              <Image
                src={
                  "https://img.freepik.com/psd-gratuitas/modelo-de-cartao-de-visita-profissional-moderno-e-limpo_501970-93.jpg"
                }
                width={300}
                height={300}
                alt={`${defaultConfigs.companyName} - Cartão de visita`}
                style={{ objectFit: "cover", width: "100%" }}
              />
            </CardImageContainer>
            <Stack>
              <CardBody p={2}>
                <Text
                  fontWeight={"bold"}
                  _hover={{ color: defaultColors.primary["500"] }}
                  color="gray.700"
                  fontSize={["sm", "sm", "md", "md", "md"]}
                >
                  Cartão de visita
                </Text>
              </CardBody>
            </Stack>
          </Card>
        </Link>
      </Grid>

      <Center>
        <Button
          variant={"ghost"}
          mt={5}
          colorScheme={defaultColors.primaryName}
        >
          Veja mais
        </Button>
      </Center>
    </Fragment>
  );
}
