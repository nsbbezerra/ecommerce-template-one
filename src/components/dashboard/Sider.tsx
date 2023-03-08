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

import SiderContent from "./SiderContent";

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
  return (
    <Fragment>
      <Box
        w="250px"
        bg={defaultColors.primary["900"]}
        h="full"
        maxH={"full"}
        overflow="auto"
        shadow={"0 0 10px rgba(0,0,0,.5)"}
        display={["none", "none", "block", "block", "block"]}
      >
        <SiderContent page={page} />
      </Box>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent bg="transparent" overflow="hidden" maxW={"250px"}>
          <DrawerCloseButton color={"white"} />
          <Box
            w="250px"
            bg={defaultColors.primary["900"]}
            h="full"
            maxH={"full"}
            overflow="auto"
          >
            <SiderContent page={page} />
          </Box>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
}
