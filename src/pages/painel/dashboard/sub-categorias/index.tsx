import Input from "@/components/app/form/Input";
import { BoxContainer } from "@/components/app/styled/styles";
import DashboardLayout from "@/components/dashboard/Layout";
import { defaultConfigs } from "@/configs";
import { api } from "@/configs/api";
import { CategoriesEntity } from "@/dto/categories";
import { FormTypeProps } from "@/dto/form-type";
import {
  CollectionsDto,
  CollectionsWithRelationshipEntity,
} from "@/dto/sub-categories";
import getErrorMessage from "@/helpers/get-error-message";
import { defaultColors } from "@/styles/customTheme";
import scrollToTop from "@/utils/scroll-to-top";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
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
  Tooltip,
  Switch,
  Select,
  Spinner,
  Tag,
  TagLabel,
  TagCloseButton,
} from "@chakra-ui/react";
import { Edit, PackageOpen, Save } from "lucide-react";
import { FormEvent, Fragment, useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function DashboardSubCategories() {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [collectionId, setCollectionId] = useState<string>("");

  const [categories, setCategories] = useState<CategoriesEntity[]>([]);
  const [collections, setCollections] = useState<
    CollectionsWithRelationshipEntity[]
  >([]);
  const [typeForm, setTypeForm] = useState<FormTypeProps>({
    type: "save",
  });

  const [formCollections, setFormCollections] = useState<CollectionsDto>({
    active: true,
    category_id: "",
    name: "",
    slug: "",
  });

  const [search, setSearch] = useState<string>("");

  const filteredCollecions = search.length
    ? collections.filter((obj) =>
        obj.name.toLowerCase().includes(search.toLowerCase())
      )
    : collections;

  function reset() {
    setFormCollections({
      active: true,
      category_id: "",
      name: "",
      slug: "",
    });
    setTypeForm({ type: "save" });
  }

  function getCategories() {
    api
      .get("/categories/get-all")
      .then((response) => {
        const { data } = response;
        setCategories(data);
        setIsFetching(false);
      })
      .catch((error) => {
        getErrorMessage({ error });
        setIsFetching(false);
      });
  }

  function getCollections() {
    setIsFetching(true);
    api
      .get("/collections/get-all")
      .then((response) => {
        setCollections(response.data);
        setIsFetching(false);
      })
      .catch((error) => {
        getErrorMessage({ error });
        setIsFetching(false);
      });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!formCollections.category_id.length) {
      Swal.fire({
        title: "Atenção",
        text: "Selecione uma categoria",
        icon: "warning",
        confirmButtonColor: defaultColors.primary["500"],
      });
      return;
    }
    if (!formCollections.name.length) {
      Swal.fire({
        title: "Atenção",
        text: "Insira um nome para a sub-categoria",
        icon: "warning",
        confirmButtonColor: defaultColors.primary["500"],
      });
      return;
    }

    if (typeForm.type === "save") {
      setIsLoading(true);

      api
        .post("/collections/save", {
          collection: {
            name: formCollections.name,
            category_id: formCollections.category_id,
            slug: formCollections.name
              .normalize("NFD")
              .replaceAll(/[^\w\s]/gi, "")
              .replaceAll(" ", "-")
              .toLowerCase(),
            active: formCollections.active,
          },
        })
        .then((response) => {
          Swal.fire({
            title: "Sucesso",
            text: response.data.message,
            icon: "success",
            confirmButtonColor: defaultColors.primary["500"],
          });
          setIsLoading(false);
          reset();
          getCollections();
        })
        .catch((error) => {
          getErrorMessage({ error });
          setIsLoading(false);
        });
    } else {
      setIsLoading(true);

      api
        .put("/collections/update", {
          collection: {
            id: collectionId,
            name: formCollections.name,
            category_id: formCollections.category_id,
            slug: formCollections.name
              .normalize("NFD")
              .replaceAll(/[^\w\s]/gi, "")
              .replaceAll(" ", "-")
              .toLowerCase(),
            active: formCollections.active,
          },
        })
        .then((response) => {
          Swal.fire({
            title: "Sucesso",
            text: response.data.message,
            icon: "success",
            confirmButtonColor: defaultColors.primary["500"],
          });
          setIsLoading(false);
          reset();
          getCollections();
        })
        .catch((error) => {
          getErrorMessage({ error });
          setIsLoading(false);
        });
    }
  }

  function handleEdit(id: string) {
    const result = collections.find((obj) => obj.id === id);
    if (result) {
      setFormCollections({
        active: result.active,
        category_id: result.category_id,
        name: result.name,
        slug: result.slug,
      });
      setTypeForm({ type: "edit" });
      setCollectionId(result.id);
      scrollToTop();
    }
  }

  function handleActive(id: string, active: boolean) {
    setIsFetching(true);
    api
      .put("/collections/update", {
        collection: {
          id,
          active,
        },
      })
      .then((response) => {
        Swal.fire({
          title: "Sucesso",
          text: response.data.message,
          icon: "success",
          confirmButtonColor: defaultColors.primary["500"],
        });
        setIsFetching(false);
        reset();
        getCollections();
      })
      .catch((error) => {
        getErrorMessage({ error });
        setIsFetching(false);
      });
  }

  useEffect(() => {
    getCategories();
    getCollections();
  }, []);

  return (
    <Fragment>
      <DashboardLayout
        page="collection"
        pageTitle={`${defaultConfigs.companyName} - Sub-categorias`}
      >
        <BoxContainer shadow={"md"} bg="white" p={3} rounded="md" mb={5}>
          <form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <Grid
              templateColumns={[
                "1fr",
                "1fr 1fr",
                "1fr 1fr",
                "1fr 1fr 150px",
                "1fr 1fr 150px",
              ]}
              alignItems="end"
              gap={3}
            >
              <FormControl>
                <FormLabel mb={1}>
                  <HStack>
                    <Text>Selecione uma categoria</Text>{" "}
                    {typeForm.type === "save" ? (
                      <Tag colorScheme={"green"}>Criação</Tag>
                    ) : (
                      <Tag colorScheme={"blue"}>
                        <TagLabel>Edição</TagLabel>
                        <TagCloseButton onClick={() => reset()} />
                      </Tag>
                    )}
                  </HStack>
                </FormLabel>
                <Select
                  focusBorderColor={defaultColors.primary["500"]}
                  value={formCollections.category_id}
                  onChange={(e) =>
                    setFormCollections({
                      ...formCollections,
                      category_id: e.target.value,
                    })
                  }
                >
                  <option value={""}>Selecione uma opção</option>
                  {categories.map((category) => (
                    <option value={category.id} key={category.id}>
                      {category.name}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel mb={1}>Nome</FormLabel>
                <Input
                  value={formCollections.name}
                  onChange={(e) =>
                    setFormCollections({
                      ...formCollections,
                      name: e.target.value,
                    })
                  }
                />
              </FormControl>
              <Button
                colorScheme={defaultColors.primaryName}
                leftIcon={<Save size={18} />}
                w="full"
                isLoading={isLoading}
                type="submit"
              >
                Salvar
              </Button>
            </Grid>
          </form>
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
              Mostrando {filteredCollecions.length} itens
            </Text>

            <HStack>
              <Input
                placeholder="Digite para buscar"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </HStack>
          </Flex>
          {isFetching ? (
            <Flex
              justify={"center"}
              align="center"
              p={10}
              direction="column"
              gap={5}
            >
              <Spinner size={"xl"} />
              <Text>Carregando...</Text>
            </Flex>
          ) : (
            <>
              {filteredCollecions.length === 0 ? (
                <Flex
                  justify={"center"}
                  align="center"
                  p={10}
                  direction="column"
                  gap={5}
                >
                  <PackageOpen size={40} />
                  <Text>Nenhum item para mostrar</Text>
                </Flex>
              ) : (
                <TableContainer>
                  <Table variant={"striped"} size="sm">
                    <Thead>
                      <Tr>
                        <Th w="16" textAlign={"center"}>
                          Ativo?
                        </Th>
                        <Th minW={"56"}>Nome</Th>
                        <Th minW={"44"}>Slug</Th>
                        <Th minW={"44"}>Categoria</Th>
                        <Th w="36" textAlign={"center"}>
                          Ações
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {filteredCollecions.map((collection) => (
                        <Tr key={collection.id}>
                          <Td textAlign={"center"}>
                            <Flex justify={"center"}>
                              <Switch
                                colorScheme={defaultColors.primaryName}
                                isChecked={collection.active}
                                onChange={(e) =>
                                  handleActive(collection.id, e.target.checked)
                                }
                              />
                            </Flex>
                          </Td>
                          <Td>{collection.name}</Td>
                          <Td>{collection.slug}</Td>
                          <Td>{collection.category.name}</Td>
                          <Td textAlign={"center"}>
                            <HStack justify={"center"} spacing={1}>
                              <Tooltip label="Editar" hasArrow>
                                <IconButton
                                  aria-label="Editar"
                                  icon={<Edit size={16} />}
                                  size="sm"
                                  colorScheme={defaultColors.primaryName}
                                  variant="ghost"
                                  onClick={() => handleEdit(collection.id)}
                                />
                              </Tooltip>
                            </HStack>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              )}
            </>
          )}
        </Box>
      </DashboardLayout>
    </Fragment>
  );
}
