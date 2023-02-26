import { defaultConfigs } from "@/configs";
import { defaultColors } from "@/styles/customTheme";
import {
  Box,
  Flex,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import Image from "next/image";
import { Fragment } from "react";
import { StyledMenuItem } from "./styles/sider-style";
import {
  Home,
  Tags,
  User,
  Tag,
  Users,
  ShoppingCart,
  ImageIcon,
  Cog,
} from "lucide-react";
import { useRouter } from "next/router";

interface Props {
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
  isOpen: boolean;
  onClose: () => void;
}

export default function DashboardSider({ page, isOpen, onClose }: Props) {
  const { push } = useRouter();

  const SiderContent = () => (
    <>
      <Flex w="full" justify={"center"} px={5} py={10}>
        <Box
          w={"40%"}
          h={"40%"}
          rounded="full"
          bg="white"
          p={4}
          boxShadow="outline"
        >
          <Image
            src={"/img/icone.svg"}
            width={300}
            height={300}
            alt={`${defaultConfigs.companyName} icone`}
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Flex>

      <Flex direction={"column"} w="full">
        <StyledMenuItem
          active={page === "index"}
          onClick={() => push("/painel/dashboard")}
        >
          <Home size={17} />
          DASHBOARD
        </StyledMenuItem>
        <StyledMenuItem
          active={page === "clients"}
          onClick={() => push("/painel/dashboard/clientes")}
        >
          <Users size={17} />
          CLIENTES
        </StyledMenuItem>
        <StyledMenuItem active={page === "categories"}>
          <Tags size={17} />
          CATEGORIAS
        </StyledMenuItem>
        <StyledMenuItem active={page === "collection"}>
          <Tags size={17} />
          SUB-CATEGORIAS
        </StyledMenuItem>
        <StyledMenuItem active={page === "products"}>
          <Tag size={17} />
          PRODUTOS
        </StyledMenuItem>
        <StyledMenuItem active={page === "master_user"}>
          <User size={17} />
          USUÁRIOS MASTER
        </StyledMenuItem>
        <StyledMenuItem active={page === "orders"}>
          <ShoppingCart size={17} />
          VENDAS
        </StyledMenuItem>
        <StyledMenuItem active={page === "banners"}>
          <ImageIcon size={17} />
          BANNERS
        </StyledMenuItem>
        <StyledMenuItem active={page === "configs"}>
          <Cog size={17} />
          CONFIGURAÇÕES
        </StyledMenuItem>
      </Flex>
    </>
  );

  return (
    <Fragment>
      <Box
        w="280px"
        bg={defaultColors.primary["500"]}
        h="full"
        maxH={"full"}
        overflow="auto"
        shadow={"0 0 10px rgba(0,0,0,.6)"}
        display={["none", "none", "block", "block", "block"]}
      >
        <SiderContent />
      </Box>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent bg="transparent" overflow="hidden" maxW={"280px"}>
          <DrawerCloseButton color={"white"} />
          <Box
            w="280px"
            bg={defaultColors.primary["500"]}
            h="full"
            maxH={"full"}
            overflow="auto"
          >
            <SiderContent />
          </Box>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
}
