import { defaultConfigs } from "@/configs";
import { Box, Flex } from "@chakra-ui/react";
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
  Cog,
  ImagePlus,
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
}

export default function SiderContent({ page }: Props) {
  const { push } = useRouter();

  return (
    <Fragment>
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
          active={page === "index" || false}
          onClick={() => push("/painel/dashboard")}
        >
          <Home size={17} />
          DASHBOARD
        </StyledMenuItem>
        <StyledMenuItem
          active={page === "clients" || false}
          onClick={() => push("/painel/dashboard/clientes")}
        >
          <Users size={17} />
          CLIENTES
        </StyledMenuItem>
        <StyledMenuItem
          active={page === "categories" || false}
          onClick={() => push("/painel/dashboard/categorias")}
        >
          <Tags size={17} />
          CATEGORIAS
        </StyledMenuItem>
        <StyledMenuItem
          active={page === "collection" || false}
          onClick={() => push("/painel/dashboard/sub-categorias")}
        >
          <Tags size={17} />
          SUB-CATEGORIAS
        </StyledMenuItem>
        <StyledMenuItem
          active={page === "products" || false}
          onClick={() => push("/painel/dashboard/produtos")}
        >
          <Tag size={17} />
          PRODUTOS
        </StyledMenuItem>
        <StyledMenuItem
          active={page === "master_user" || false}
          onClick={() => push("/painel/dashboard/usuarios-master")}
        >
          <User size={17} />
          USUÁRIOS MASTER
        </StyledMenuItem>
        <StyledMenuItem active={page === "orders" || false}>
          <ShoppingCart size={17} />
          VENDAS
        </StyledMenuItem>
        <StyledMenuItem active={page === "banners" || false}>
          <ImagePlus size={17} />
          BANNERS
        </StyledMenuItem>
        <StyledMenuItem active={page === "configs" || false}>
          <Cog size={17} />
          CONFIGURAÇÕES
        </StyledMenuItem>
      </Flex>
    </Fragment>
  );
}
