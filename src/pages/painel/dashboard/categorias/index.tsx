import Input from "@/components/app/form/Input";
import Uploader from "@/components/app/form/uploader";
import { BoxContainer } from "@/components/app/styled/styles";
import DashboardLayout from "@/components/dashboard/Layout";
import { defaultConfigs } from "@/configs";
import { api } from "@/configs/api";
import { CategoriesDto, CategoriesEntity } from "@/dto/categories";
import { FormTypeProps } from "@/dto/form-type";
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
  Avatar,
  Tooltip,
  Switch,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Spinner,
  Tag,
  TagLabel,
  TagCloseButton,
} from "@chakra-ui/react";
import { Edit, ImagePlus, PackageOpen, Save } from "lucide-react";
import { FormEvent, Fragment, useEffect, useState } from "react";
import Swal from "sweetalert2";

interface ThumbnailProps {
  url: string | null;
  id: string | null;
}

export default function DashboardCategories() {
  const [modalThumbnail, setModalThumbnail] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categoryId, setCategoryId] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<ThumbnailProps>({
    id: null,
    url: null,
  });

  const [formType, setFormType] = useState<FormTypeProps>({ type: "save" });

  const [categories, setCategories] = useState<CategoriesEntity[]>([]);

  const [formCategories, setFormCategories] = useState<CategoriesDto>({
    active: true,
    name: "",
    slug: "",
  });

  const [search, setSearch] = useState<string>("");

  const filteredCategories = search.length
    ? categories.filter((obj) =>
        obj.name.toLowerCase().includes(search.toLowerCase())
      )
    : categories;

  function reset() {
    setFormCategories({
      active: true,
      name: "",
      slug: "",
    });
    setFormType({ type: "save" });
    setThumbnail({ id: null, url: null });
  }

  function getInitialData() {
    setIsFetching(true);
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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formCategories.name.length) {
      Swal.fire({
        title: "Atenção",
        text: "Insira um nome para a categoria",
        icon: "warning",
        confirmButtonColor: defaultColors.primary["500"],
      });
      return;
    }

    if (formType.type === "save") {
      setIsLoading(true);
      api
        .post("/categories/save", {
          category: {
            name: formCategories.name,
            active: formCategories.active,
            slug: formCategories.name
              .normalize("NFD")
              .replaceAll(/[^\w\s]/gi, "")
              .replaceAll(" ", "-")
              .toLowerCase(),
          },
        })
        .then((response) => {
          const { data } = response;
          Swal.fire({
            title: "Sucesso",
            text: response.data.message,
            icon: "success",
            confirmButtonColor: defaultColors.primary["500"],
          });
          setIsLoading(false);
          setCategoryId(data.categoryId);
          reset();
          getInitialData();
          setModalThumbnail(true);
        })
        .catch((error) => {
          setIsLoading(false);
          getErrorMessage({ error });
        });
    } else {
      setIsLoading(true);
      api
        .put("/categories/update", {
          category: {
            id: categoryId,
            name: formCategories.name,
            slug: formCategories.name
              .normalize("NFD")
              .replaceAll(/[^\w\s]/gi, "")
              .replaceAll(" ", "-")
              .toLowerCase(),
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
          getInitialData();
        })
        .catch((error) => {
          setIsLoading(false);
          getErrorMessage({ error });
        });
    }
  }

  function handleEdit(id: string) {
    const result = categories.find((obj) => obj.id === id);
    if (result) {
      setFormCategories({
        active: result.active,
        name: result.name,
        slug: result.slug,
      });
      setCategoryId(result.id);
      scrollToTop();
      setFormType({ type: "edit" });
    } else {
      Swal.fire({
        title: "Atenção",
        text: "Categoria não encontrada",
        icon: "warning",
        confirmButtonColor: defaultColors.primary["500"],
      });
    }
  }

  function handleThumbnail(id: string) {
    const result = categories.find((obj) => obj.id === id);
    setThumbnail({
      id: result?.thumbnail_id || null,
      url: result?.thumbnail || null,
    });
    setCategoryId(result?.id || "");
    setModalThumbnail(true);
  }

  function handleFinishImage() {
    setModalThumbnail(false);
    reset();
    getInitialData();
  }

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <Fragment>
      <DashboardLayout
        page="categories"
        pageTitle={`${defaultConfigs.companyName} - Categorias`}
      >
        <BoxContainer
          shadow={"md"}
          bg="white"
          p={3}
          rounded="md"
          mb={5}
          id="edit"
        >
          <Grid templateColumns={"1fr"} justifyItems="center" gap={3}>
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <Flex
                h="full"
                w="full"
                direction={"column"}
                justify="space-between"
                gap={5}
              >
                <FormControl>
                  <FormLabel mb={1}>
                    <HStack>
                      <Text>Nome</Text>{" "}
                      {formType.type === "save" ? (
                        <Tag colorScheme={"green"}>Criação</Tag>
                      ) : (
                        <Tag colorScheme={"blue"}>
                          <TagLabel>Edição</TagLabel>
                          <TagCloseButton onClick={() => reset()} />
                        </Tag>
                      )}
                    </HStack>
                  </FormLabel>
                  <Input
                    value={formCategories.name}
                    onChange={(e) =>
                      setFormCategories({
                        ...formCategories,
                        name: e.target.value,
                      })
                    }
                  />
                </FormControl>

                <Flex justify={"end"}>
                  <Button
                    colorScheme={defaultColors.primaryName}
                    leftIcon={<Save size={18} />}
                    size="lg"
                    isLoading={isLoading}
                    type="submit"
                  >
                    Salvar
                  </Button>
                </Flex>
              </Flex>
            </form>
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
              Mostrando {categories.length} itens
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
              {filteredCategories.length === 0 ? (
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
                      {filteredCategories.map((category) => (
                        <Tr key={category.id}>
                          <Td textAlign={"center"}>
                            <Avatar
                              size={"sm"}
                              src={category.thumbnail || ""}
                            />
                          </Td>
                          <Td textAlign={"center"}>
                            <Flex justify={"center"}>
                              <Switch
                                colorScheme={defaultColors.primaryName}
                                isChecked={category.active}
                              />
                            </Flex>
                          </Td>
                          <Td>{category.name}</Td>
                          <Td>{category.slug}</Td>
                          <Td textAlign={"center"}>
                            <HStack justify={"center"} spacing={1}>
                              <Tooltip label="Alterar Imagem" hasArrow>
                                <IconButton
                                  aria-label="Editar"
                                  icon={<ImagePlus size={16} />}
                                  size="sm"
                                  colorScheme={defaultColors.primaryName}
                                  variant="ghost"
                                  onClick={() => handleThumbnail(category.id)}
                                />
                              </Tooltip>
                              <Tooltip label="Editar" hasArrow>
                                <IconButton
                                  aria-label="Editar"
                                  icon={<Edit size={16} />}
                                  size="sm"
                                  colorScheme={defaultColors.primaryName}
                                  variant="ghost"
                                  onClick={() => handleEdit(category.id)}
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

      <Modal
        isOpen={modalThumbnail}
        onClose={() => setModalThumbnail(false)}
        size={"xs"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Imagem</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={5}>
            <Flex align={"center"}>
              {modalThumbnail && (
                <Uploader
                  height={"275px"}
                  width={"275px"}
                  to="category"
                  thumbnail={thumbnail}
                  destinationId={categoryId}
                  handleClose={handleFinishImage}
                  handleDelete={() => getInitialData()}
                />
              )}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Fragment>
  );
}
