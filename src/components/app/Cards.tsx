import {
  Box,
  Button,
  Center,
  Grid,
  IconButton,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { Fragment } from "react";
import { Card, CardBody } from "@chakra-ui/react";
import Image from "next/image";
import { defaultConfigs } from "@/configs";
import Link from "next/link";
import { defaultColors } from "@/styles/customTheme";
import { Search, ShoppingCart } from "lucide-react";
import { CardButtons, CardImageContainer } from "./styled/styles";

export default function Cards() {
  return (
    <Fragment>
      <Grid
        templateColumns={[
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
          "repeat(4, 1fr)",
          "repeat(4, 1fr)",
        ]}
        gap={[2, 2, 3, 4, 4]}
      >
        <Link href={"/"}>
          <Card overflow={"hidden"}>
            <CardImageContainer w="full" position="relative">
              <Image
                src={
                  "https://img.freepik.com/psd-gratuitas/modelo-de-cartao-de-visita-profissional-moderno-e-limpo_501970-93.jpg"
                }
                width={300}
                height={300}
                alt={`${defaultConfigs.companyName} - Cartão de visita`}
                style={{ objectFit: "cover", width: "100%" }}
              />
              <CardButtons className="cards-actions-button">
                <Tooltip label="Adicionar ao carrinho" hasArrow>
                  <IconButton
                    aria-label="shopping"
                    icon={<ShoppingCart size={16} />}
                    colorScheme={defaultColors.primaryName}
                  />
                </Tooltip>
                <Tooltip label="Visualizar Produto" hasArrow>
                  <IconButton
                    aria-label="shopping"
                    icon={<Search size={16} />}
                    colorScheme={defaultColors.primaryName}
                    variant="outline"
                  />
                </Tooltip>
              </CardButtons>
            </CardImageContainer>
            <CardBody p={3}>
              <Text
                fontWeight={"bold"}
                _hover={{ color: defaultColors.primary["500"] }}
                color="gray.700"
                fontSize={["sm", "sm", "md", "md", "md"]}
              >
                Cartão de visita
              </Text>

              <Text color="gray.600" fontSize={["sm", "sm", "md", "md", "md"]}>
                R$ 40,00
              </Text>
            </CardBody>
          </Card>
        </Link>
        <Link href={"/"}>
          <Card overflow={"hidden"}>
            <CardImageContainer w="full" position="relative">
              <Image
                src={
                  "https://img.freepik.com/psd-gratuitas/modelo-de-cartao-de-visita-profissional-moderno-e-limpo_501970-93.jpg"
                }
                width={300}
                height={300}
                alt={`${defaultConfigs.companyName} - Cartão de visita`}
                style={{ objectFit: "cover", width: "100%" }}
              />
              <CardButtons className="cards-actions-button">
                <Tooltip label="Adicionar ao carrinho" hasArrow>
                  <IconButton
                    aria-label="shopping"
                    icon={<ShoppingCart size={16} />}
                    colorScheme={defaultColors.primaryName}
                  />
                </Tooltip>
                <Tooltip label="Visualizar Produto" hasArrow>
                  <IconButton
                    aria-label="shopping"
                    icon={<Search size={16} />}
                    colorScheme={defaultColors.primaryName}
                    variant="outline"
                  />
                </Tooltip>
              </CardButtons>
            </CardImageContainer>
            <CardBody p={3}>
              <Text
                fontWeight={"bold"}
                _hover={{ color: defaultColors.primary["500"] }}
                color="gray.700"
                fontSize={["sm", "sm", "md", "md", "md"]}
              >
                Cartão de visita
              </Text>

              <Text color="gray.600" fontSize={["sm", "sm", "md", "md", "md"]}>
                R$ 40,00
              </Text>
            </CardBody>
          </Card>
        </Link>
        <Link href={"/"}>
          <Card overflow={"hidden"}>
            <CardImageContainer w="full" position="relative">
              <Image
                src={
                  "https://img.freepik.com/psd-gratuitas/modelo-de-cartao-de-visita-profissional-moderno-e-limpo_501970-93.jpg"
                }
                width={300}
                height={300}
                alt={`${defaultConfigs.companyName} - Cartão de visita`}
                style={{ objectFit: "cover", width: "100%" }}
              />
              <CardButtons className="cards-actions-button">
                <Tooltip label="Adicionar ao carrinho" hasArrow>
                  <IconButton
                    aria-label="shopping"
                    icon={<ShoppingCart size={16} />}
                    colorScheme={defaultColors.primaryName}
                  />
                </Tooltip>
                <Tooltip label="Visualizar Produto" hasArrow>
                  <IconButton
                    aria-label="shopping"
                    icon={<Search size={16} />}
                    colorScheme={defaultColors.primaryName}
                    variant="outline"
                  />
                </Tooltip>
              </CardButtons>
            </CardImageContainer>
            <CardBody p={3}>
              <Text
                fontWeight={"bold"}
                _hover={{ color: defaultColors.primary["500"] }}
                color="gray.700"
                fontSize={["sm", "sm", "md", "md", "md"]}
              >
                Cartão de visita
              </Text>

              <Text color="gray.600" fontSize={["sm", "sm", "md", "md", "md"]}>
                R$ 40,00
              </Text>
            </CardBody>
          </Card>
        </Link>
        <Link href={"/"}>
          <Card overflow={"hidden"}>
            <CardImageContainer w="full" position="relative">
              <Image
                src={
                  "https://img.freepik.com/psd-gratuitas/modelo-de-cartao-de-visita-profissional-moderno-e-limpo_501970-93.jpg"
                }
                width={300}
                height={300}
                alt={`${defaultConfigs.companyName} - Cartão de visita`}
                style={{ objectFit: "cover", width: "100%" }}
              />
              <CardButtons className="cards-actions-button">
                <Tooltip label="Adicionar ao carrinho" hasArrow>
                  <IconButton
                    aria-label="shopping"
                    icon={<ShoppingCart size={16} />}
                    colorScheme={defaultColors.primaryName}
                  />
                </Tooltip>
                <Tooltip label="Visualizar Produto" hasArrow>
                  <IconButton
                    aria-label="shopping"
                    icon={<Search size={16} />}
                    colorScheme={defaultColors.primaryName}
                    variant="outline"
                  />
                </Tooltip>
              </CardButtons>
            </CardImageContainer>
            <CardBody p={3}>
              <Text
                fontWeight={"bold"}
                _hover={{ color: defaultColors.primary["500"] }}
                color="gray.700"
                fontSize={["sm", "sm", "md", "md", "md"]}
              >
                Cartão de visita
              </Text>

              <Text color="gray.600" fontSize={["sm", "sm", "md", "md", "md"]}>
                R$ 40,00
              </Text>
            </CardBody>
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
