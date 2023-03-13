import { defaultConfigs } from "@/configs";
import { defaultColors } from "@/styles/customTheme";
import {
  Badge,
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Select,
  Text,
  Tooltip,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  VStack,
  StackDivider,
  Avatar,
} from "@chakra-ui/react";
import {
  Facebook,
  Home,
  Instagram,
  Landmark,
  Linkedin,
  LogIn,
  Mail,
  Menu,
  Phone,
  Search,
  ShoppingCart,
  Tags,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Input from "./form/Input";
import { CategoriesButton, HeaderLink, HeaderMenuItems } from "./styled/styles";

export default function Header() {
  return (
    <Box bg={"white"} shadow={"md"}>
      <Box borderBottomWidth={"1px"} py={[2, 3, 3, 3, 3]}>
        <Container maxW={"6xl"} h="full">
          <Flex align={"center"} justify="space-between">
            <HStack
              spacing={5}
              display={["none", "none", "flex", "flex", "flex"]}
            >
              <HeaderLink href={"/"}>
                <Phone size={17} color={defaultColors.primary["500"]} />
                <Text fontSize={"sm"}>(63) 99971-1716</Text>
              </HeaderLink>
              <HeaderLink href={"/"}>
                <Mail size={17} color={defaultColors.primary["500"]} />
                <Text fontSize={"sm"}>contato.nk.info@gmail.com</Text>
              </HeaderLink>
            </HStack>
            <HStack spacing={5}>
              <HeaderLink href={"/"}>
                <User size={17} color={defaultColors.primary["500"]} />
                <Text fontSize={"sm"}>Minha conta</Text>
              </HeaderLink>
              <HeaderLink href={"/"}>
                <LogIn size={17} color={defaultColors.primary["500"]} />
                <Text fontSize={"sm"}>Login</Text>
              </HeaderLink>
            </HStack>
          </Flex>
        </Container>
      </Box>
      <Container maxW={"6xl"} h="full" py={5}>
        <Flex
          h="full"
          align={"center"}
          justify="space-between"
          gap={[0, 10, 10, 10, 10]}
        >
          <HStack flexShrink={0}>
            <Box h="fit">
              <Image
                src={"/img/logo.svg"}
                width={214}
                height={140}
                alt={`${defaultConfigs.companyName} - logo`}
              />
            </Box>
          </HStack>
          <Flex display={["none", "none", "flex", "flex", "flex"]}>
            <Select
              focusBorderColor={defaultColors.primary["500"]}
              size="lg"
              w="32"
              roundedRight={"none"}
              placeholder="Selecione"
            >
              <option>Selecione</option>
              <option>Categorias</option>
              <option>Produtos</option>
            </Select>
            <Input
              size={"lg"}
              rounded="none"
              placeholder="Digite para buscar"
            />
            <IconButton
              aria-label="Search"
              icon={<Search />}
              size="lg"
              colorScheme={defaultColors.primaryName}
              roundedLeft="none"
            />
          </Flex>
          <HStack spacing={[2, 5, 5, 5, 5]}>
            <Tooltip label="Minha conta" hasArrow>
              <IconButton
                aria-label="Account"
                icon={<User />}
                colorScheme={defaultColors.primaryName}
                variant="outline"
                size="lg"
              />
            </Tooltip>
            <Tooltip label="Meu carrinho" hasArrow>
              <Box pos="relative">
                <IconButton
                  aria-label="Account"
                  icon={<ShoppingCart />}
                  colorScheme={defaultColors.primaryName}
                  size="lg"
                />
                <Badge
                  colorScheme={"red"}
                  fontSize="lg"
                  rounded={"full"}
                  pos="absolute"
                  top={-3}
                  right={-3}
                  px={2}
                >
                  0
                </Badge>
              </Box>
            </Tooltip>
          </HStack>
        </Flex>
      </Container>

      <Box bg={defaultColors.primary["500"]} h="14">
        <Container maxW={"6xl"} h="full">
          <Flex justify={"space-between"} align="center">
            <HStack spacing={0}>
              <IconButton
                icon={<Menu size={28} />}
                aria-label="Show Menu"
                variant={"link"}
                display={["flex", "flex", "none", "none", "none"]}
                color="white"
              />

              <Popover>
                <PopoverTrigger>
                  <CategoriesButton>
                    <Tags size={18} /> CATEGORIAS
                  </CategoriesButton>
                </PopoverTrigger>
                <PopoverContent _focus={{ boxShadow: "none" }}>
                  <PopoverArrow />
                  <PopoverBody maxH={"65vh"} overflow="auto" shadow="xl">
                    <VStack divider={<StackDivider />} spacing={2} w="full">
                      <Link href={"/"} style={{ width: "100%" }}>
                        <Flex
                          w={"full"}
                          justify="start"
                          align={"center"}
                          gap={2}
                          _hover={{ textDecor: "underline" }}
                        >
                          <Avatar size={"sm"} />
                          <Text fontSize={"sm"}>TODAS AS CATEGORIAS</Text>
                        </Flex>
                      </Link>
                      <Link href={"/"} style={{ width: "100%" }}>
                        <Flex
                          w={"full"}
                          justify="start"
                          align={"center"}
                          gap={2}
                          _hover={{ textDecor: "underline" }}
                        >
                          <Avatar size={"sm"} />
                          <Text fontSize={"sm"}>TODAS AS CATEGORIAS</Text>
                        </Flex>
                      </Link>
                      <Link href={"/"} style={{ width: "100%" }}>
                        <Flex
                          w={"full"}
                          justify="start"
                          align={"center"}
                          gap={2}
                          _hover={{ textDecor: "underline" }}
                        >
                          <Avatar size={"sm"} />
                          <Text fontSize={"sm"}>TODAS AS CATEGORIAS</Text>
                        </Flex>
                      </Link>
                      <Link href={"/"} style={{ width: "100%" }}>
                        <Flex
                          w={"full"}
                          justify="start"
                          align={"center"}
                          gap={2}
                          _hover={{ textDecor: "underline" }}
                        >
                          <Avatar size={"sm"} />
                          <Text fontSize={"sm"}>TODAS AS CATEGORIAS</Text>
                        </Flex>
                      </Link>
                      <Link href={"/"} style={{ width: "100%" }}>
                        <Flex
                          w={"full"}
                          justify="start"
                          align={"center"}
                          gap={2}
                          _hover={{ textDecor: "underline" }}
                        >
                          <Avatar size={"sm"} />
                          <Text fontSize={"sm"}>TODAS AS CATEGORIAS</Text>
                        </Flex>
                      </Link>
                      <Link href={"/"} style={{ width: "100%" }}>
                        <Flex
                          w={"full"}
                          justify="start"
                          align={"center"}
                          gap={2}
                          _hover={{ textDecor: "underline" }}
                        >
                          <Avatar size={"sm"} />
                          <Text fontSize={"sm"}>TODAS AS CATEGORIAS</Text>
                        </Flex>
                      </Link>
                      <Link href={"/"} style={{ width: "100%" }}>
                        <Flex
                          w={"full"}
                          justify="start"
                          align={"center"}
                          gap={2}
                          _hover={{ textDecor: "underline" }}
                        >
                          <Avatar size={"sm"} />
                          <Text fontSize={"sm"}>TODAS AS CATEGORIAS</Text>
                        </Flex>
                      </Link>
                      <Link href={"/"} style={{ width: "100%" }}>
                        <Flex
                          w={"full"}
                          justify="start"
                          align={"center"}
                          gap={2}
                          _hover={{ textDecor: "underline" }}
                        >
                          <Avatar size={"sm"} />
                          <Text fontSize={"sm"}>TODAS AS CATEGORIAS</Text>
                        </Flex>
                      </Link>
                      <Link href={"/"} style={{ width: "100%" }}>
                        <Flex
                          w={"full"}
                          justify="start"
                          align={"center"}
                          gap={2}
                          _hover={{ textDecor: "underline" }}
                        >
                          <Avatar size={"sm"} />
                          <Text fontSize={"sm"}>TODAS AS CATEGORIAS</Text>
                        </Flex>
                      </Link>
                      <Link href={"/"} style={{ width: "100%" }}>
                        <Flex
                          w={"full"}
                          justify="start"
                          align={"center"}
                          gap={2}
                          _hover={{ textDecor: "underline" }}
                        >
                          <Avatar size={"sm"} />
                          <Text fontSize={"sm"}>TODAS AS CATEGORIAS</Text>
                        </Flex>
                      </Link>
                    </VStack>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              <HStack ml={3} display={["none", "none", "flex", "flex", "flex"]}>
                <HeaderMenuItems href={"/"}>
                  <Home size={15} /> INÍCIO
                </HeaderMenuItems>
                <HeaderMenuItems href={"/"}>
                  <Landmark size={15} /> QUEM SOMOS
                </HeaderMenuItems>
                <HeaderMenuItems href={"/"}>
                  <Phone size={15} /> CONTATO
                </HeaderMenuItems>
              </HStack>
            </HStack>

            <HStack display={["none", "flex", "flex", "flex", "flex"]}>
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
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
