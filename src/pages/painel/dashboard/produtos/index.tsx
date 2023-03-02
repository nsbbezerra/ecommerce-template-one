import Input from "@/components/app/form/Input";
import Uploader from "@/components/app/form/uploader";
import { BoxContainer } from "@/components/app/styled/styles";
import DashboardLayout from "@/components/dashboard/Layout";
import Tiptap from "@/components/Tiptap";
import { defaultConfigs } from "@/configs";
import { defaultColors } from "@/styles/customTheme";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Stack,
  TableContainer,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  HStack,
  Text,
  IconButton,
  Avatar,
  Tooltip,
  Switch,
  InputGroup,
  InputRightAddon,
  Textarea,
} from "@chakra-ui/react";
import { Edit, ImagePlus, Save, Search } from "lucide-react";
import { Fragment } from "react";

export default function DashboardProducts() {
  return (
    <Fragment>
      <DashboardLayout
        page="products"
        pageTitle={`${defaultConfigs.companyName} - Produtos`}
      >
        <BoxContainer shadow={"md"} bg="white" p={3} rounded="md" mb={5}>
          <Grid
            templateColumns={[
              "1fr",
              "1fr",
              "280px 1fr",
              "280px 1fr",
              "280px 1fr",
            ]}
            justifyItems="center"
            gap={3}
          >
            <Box w="280px">
              <Uploader width={"280px"} height="280px" />
            </Box>

            <Flex
              h="full"
              w="full"
              direction={"column"}
              justify="space-between"
              gap={3}
            >
              <Grid templateColumns={"1fr"} gap={3}>
                <Grid templateColumns={"1fr 1fr 1fr"} gap={3}>
                  <FormControl>
                    <FormLabel>Nome</FormLabel>
                    <Input />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Slug</FormLabel>
                    <Input />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Preço</FormLabel>
                    <InputGroup>
                      <Input roundedRight={0} />
                      <InputRightAddon>R$</InputRightAddon>
                    </InputGroup>
                  </FormControl>
                </Grid>

                <FormControl>
                  <FormLabel>Descrição curta</FormLabel>
                  <Textarea rows={2} resize="none" />
                </FormControl>

                <FormControl>
                  <FormLabel>Descrição detalhada</FormLabel>

                  <Tiptap />
                </FormControl>
              </Grid>

              <Flex justify={"end"}>
                <Button
                  colorScheme={defaultColors.primaryName}
                  leftIcon={<Save size={18} />}
                >
                  Salvar
                </Button>
              </Flex>
            </Flex>
          </Grid>
        </BoxContainer>

        <Box shadow={"md"} bg="white" p={3} rounded="md">
          <Flex
            align={"center"}
            justify="space-between"
            mb={3}
            pb={3}
            borderBottomWidth="1px"
            gap={3}
          >
            <Text fontWeight={"bold"} color="gray.600" fontSize={"sm"}>
              Mostrando 5 itens
            </Text>

            <HStack>
              <Input placeholder="Digite para buscar" />
              <IconButton
                aria-label="Buscar categoria"
                icon={<Search size={18} />}
                colorScheme={defaultColors.primaryName}
              />
            </HStack>
          </Flex>
          <TableContainer>
            <Table variant={"striped"} size="sm">
              <Thead>
                <Tr>
                  <Th w="16" textAlign={"center"}>
                    thumb
                  </Th>
                  <Th w="16" textAlign={"center"}>
                    Ativo?
                  </Th>
                  <Th minW={"56"}>Nome</Th>
                  <Th minW={"44"}>Slug</Th>
                  <Th w="36" textAlign={"center"}>
                    Ações
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td textAlign={"center"}>
                    <Avatar size={"sm"} />
                  </Td>
                  <Td textAlign={"center"}>
                    <Flex justify={"center"}>
                      <Switch colorScheme={defaultColors.primaryName} />
                    </Flex>
                  </Td>
                  <Td>Natanael dos Santos Bezerra</Td>
                  <Td>(63) 99971-1716</Td>
                  <Td textAlign={"center"}>
                    <HStack justify={"center"} spacing={1}>
                      <Tooltip label="Alterar Imagem" hasArrow>
                        <IconButton
                          aria-label="Editar"
                          icon={<ImagePlus size={16} />}
                          size="sm"
                          colorScheme={defaultColors.primaryName}
                          variant="ghost"
                        />
                      </Tooltip>
                      <Tooltip label="Editar" hasArrow>
                        <IconButton
                          aria-label="Editar"
                          icon={<Edit size={16} />}
                          size="sm"
                          colorScheme={defaultColors.primaryName}
                          variant="ghost"
                        />
                      </Tooltip>
                    </HStack>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>

          <Flex borderTopWidth={"1px"} mt={3} justify="center" pt={3}>
            <Button
              colorScheme={defaultColors.primaryName}
              size="sm"
              variant={"ghost"}
            >
              MOSTRAR MAIS
            </Button>
          </Flex>
        </Box>
      </DashboardLayout>
    </Fragment>
  );
}
