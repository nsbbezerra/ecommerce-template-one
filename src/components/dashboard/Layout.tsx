import { defaultColors } from "@/styles/customTheme";
import {
  Avatar,
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Cog,
  Home,
  ImageIcon,
  LogOut,
  Menu,
  ShoppingCart,
  Tag,
  Tags,
  User,
  Users,
} from "lucide-react";
import { Fragment, ReactNode } from "react";
import HeadApp from "../app/Head";
import DashboardSider from "./Sider";

interface Props {
  pageTitle: string;
  children: ReactNode | ReactNode[];
  page:
    | "index"
    | "categories"
    | "collection"
    | "clients"
    | "products"
    | "configs"
    | "master_user"
    | "orders"
    | "banners";
}

export default function DashboardLayout({ pageTitle, children, page }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Fragment>
      <HeadApp title={pageTitle} />
      <Flex w="100vw" h="100vh">
        <DashboardSider page={page} isOpen={isOpen} onClose={onClose} />
        <Box w={"full"} overflow="auto" maxH={"full"} id="scroller">
          <Flex
            h={"16"}
            bg={"white"}
            shadow={"md"}
            w="full"
            position={"sticky"}
            top={0}
            align="center"
            px={7}
            justify="space-between"
            gap={3}
            zIndex={10}
          >
            <HStack spacing={3}>
              <IconButton
                icon={<Menu />}
                aria-label="Menu Button"
                variant={"ghost"}
                display={["flex", "flex", "none", "none", "none"]}
                onClick={onOpen}
              />
              <Box>
                {page === "index" && (
                  <HStack color={defaultColors.primary["500"]}>
                    <Home size={17} />
                    <Text fontWeight={"bold"}>DASHBOARD</Text>
                  </HStack>
                )}
                {page === "clients" && (
                  <HStack color={defaultColors.primary["500"]}>
                    <Users size={17} />
                    <Text fontWeight={"bold"}>CLIENTES</Text>
                  </HStack>
                )}
                {page === "categories" && (
                  <HStack color={defaultColors.primary["500"]}>
                    <Tags size={17} />
                    <Text fontWeight={"bold"}>CATEGORIAS</Text>
                  </HStack>
                )}
                {page === "collection" && (
                  <HStack color={defaultColors.primary["500"]}>
                    <Tags size={17} />
                    <Text fontWeight={"bold"}>SUB-CATEGORIAS</Text>
                  </HStack>
                )}
                {page === "products" && (
                  <HStack color={defaultColors.primary["500"]}>
                    <Tag size={17} />
                    <Text fontWeight={"bold"}>PRODUTOS</Text>
                  </HStack>
                )}
                {page === "master_user" && (
                  <HStack color={defaultColors.primary["500"]}>
                    <User size={17} />
                    <Text fontWeight={"bold"}>USUÁRIO MÁSTER</Text>
                  </HStack>
                )}
                {page === "orders" && (
                  <HStack color={defaultColors.primary["500"]}>
                    <ShoppingCart size={17} />
                    <Text fontWeight={"bold"}>VENDAS</Text>
                  </HStack>
                )}
                {page === "banners" && (
                  <HStack color={defaultColors.primary["500"]}>
                    <ImageIcon size={17} />
                    <Text fontWeight={"bold"}>BANNERS</Text>
                  </HStack>
                )}
                {page === "configs" && (
                  <HStack color={defaultColors.primary["500"]}>
                    <Cog size={17} />
                    <Text fontWeight={"bold"}>CONFIGURAÇÕES</Text>
                  </HStack>
                )}
              </Box>
            </HStack>
            <HStack spacing={3}>
              <Flex
                align={"center"}
                gap={2}
                display={["none", "flex", "flex", "flex", "flex"]}
                w={"48"}
              >
                <Avatar icon={<User size={17} />} size="sm" />
                <Text fontWeight={"bold"}>Natanael</Text>
              </Flex>

              <Tooltip label="Ir para a loja" hasArrow>
                <IconButton
                  icon={<LogOut />}
                  aria-label="Logout-button"
                  colorScheme={defaultColors.primaryName}
                />
              </Tooltip>
            </HStack>
          </Flex>
          <Container p={7} maxW="8xl">
            {children}
          </Container>
        </Box>
      </Flex>
    </Fragment>
  );
}
