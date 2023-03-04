import Input from "@/components/app/form/Input";
import Uploader from "@/components/app/form/uploader";
import { BoxContainer } from "@/components/app/styled/styles";
import DashboardLayout from "@/components/dashboard/Layout";
import Tiptap from "@/components/Tiptap";
import { defaultConfigs } from "@/configs";
import { api } from "@/configs/api";
import { CategoriesEntity } from "@/dto/categories";
import { FormTypeProps } from "@/dto/form-type";
import { ProductsEntityDto } from "@/dto/products";
import { CollectionsWithRelationshipEntity } from "@/dto/sub-categories";
import { ProductsWithRelationshipEntity } from "@/dto/products";
import getErrorMessage from "@/helpers/get-error-message";
import { defaultColors } from "@/styles/customTheme";
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
  InputGroup,
  InputRightAddon,
  Textarea,
  Select,
  Tag,
  TagLabel,
  TagCloseButton,
  Spinner,
} from "@chakra-ui/react";
import { Edit, ImagePlus, PackageOpen, Save, Search } from "lucide-react";
import { FormEvent, Fragment, useEffect, useState } from "react";
import Swal from "sweetalert2";
import formatMoney from "@/utils/format-money";

interface ShippingInfoProps {
  width: string;
  height: string;
  lenght: string;
  weight: string;
}

export default function DashboardProducts() {
  const [productForm, setProductForm] = useState<ProductsEntityDto>({
    active: true,
    category_id: "",
    collection_id: "",
    description: "",
    slug: "",
    name: "",
    price: "",
    short_description: "",
    freight_priority: "",
  });

  const [shippingInfo, setShippingInfo] = useState<ShippingInfoProps>({
    height: "",
    lenght: "",
    weight: "",
    width: "",
  });

  const [formType, setFormType] = useState<FormTypeProps>({ type: "save" });

  const [productId, setProductId] = useState<string>("");

  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [products, setProducts] = useState<ProductsWithRelationshipEntity[]>(
    []
  );

  const [categories, setCategories] = useState<CategoriesEntity[]>([]);
  const [collections, setCollections] = useState<
    CollectionsWithRelationshipEntity[]
  >([]);

  const [relationCollections, setRelationCollections] = useState<
    CollectionsWithRelationshipEntity[]
  >([]);

  function getCategories() {
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

  function getAllProducts() {
    setIsFetching(true);
    api
      .get("/products/get-all")
      .then((response) => {
        setProducts(response.data);
        setIsFetching(false);
      })
      .catch((error) => {
        getErrorMessage({ error });
        setIsFetching(false);
      });
  }

  function reset() {
    setProductForm({
      active: true,
      category_id: "",
      collection_id: "",
      description: "",
      slug: "",
      name: "",
      price: "",
      short_description: "",
      freight_priority: "",
    });
    setShippingInfo({
      height: "",
      lenght: "",
      weight: "",
      width: "",
    });
    setFormType({ type: "save" });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!productForm.category_id.length) {
      Swal.fire({
        title: "Atenção",
        text: "Selecione uma categoria",
        icon: "warning",
        confirmButtonColor: defaultColors.primary["500"],
      });
      return;
    }
    if (!productForm.collection_id.length) {
      Swal.fire({
        title: "Atenção",
        text: "Selecione uma sub-categoria",
        icon: "warning",
        confirmButtonColor: defaultColors.primary["500"],
      });
      return;
    }
    if (!productForm.name.length) {
      Swal.fire({
        title: "Atenção",
        text: "Insira um nome para o produto",
        icon: "warning",
        confirmButtonColor: defaultColors.primary["500"],
      });
      return;
    }
    if (!productForm.price.length) {
      Swal.fire({
        title: "Atenção",
        text: "Insira um preço para o produto",
        icon: "warning",
        confirmButtonColor: defaultColors.primary["500"],
      });
      return;
    }
    if (!productForm.description.length) {
      Swal.fire({
        title: "Atenção",
        text: "Insira uma descrição detalhada para o produto",
        icon: "warning",
        confirmButtonColor: defaultColors.primary["500"],
      });
      return;
    }
    if (!productForm.freight_priority.length) {
      Swal.fire({
        title: "Atenção",
        text: "Selecione um modo de entrega",
        icon: "warning",
        confirmButtonColor: defaultColors.primary["500"],
      });
      return;
    }
    if (!shippingInfo.width.length) {
      Swal.fire({
        title: "Atenção",
        text: "Insira uma largura para o produto",
        icon: "warning",
        confirmButtonColor: defaultColors.primary["500"],
      });
      return;
    }
    if (!shippingInfo.height.length) {
      Swal.fire({
        title: "Atenção",
        text: "Insira uma altura para o produto",
        icon: "warning",
        confirmButtonColor: defaultColors.primary["500"],
      });
      return;
    }
    if (!shippingInfo.lenght.length) {
      Swal.fire({
        title: "Atenção",
        text: "Insira um comprimento para o produto",
        icon: "warning",
        confirmButtonColor: defaultColors.primary["500"],
      });
      return;
    }
    if (!shippingInfo.weight.length) {
      Swal.fire({
        title: "Atenção",
        text: "Insira um peso para o produto",
        icon: "warning",
        confirmButtonColor: defaultColors.primary["500"],
      });
      return;
    }

    if (formType.type === "save") {
      setIsLoading(true);
      api
        .post("/products/save", {
          product: {
            category_id: productForm.category_id,
            collection_id: productForm.collection_id,
            name: productForm.name,
            active: productForm.active,
            slug: productForm.name
              .normalize("NFD")
              .replaceAll(/[^\w\s]/gi, "")
              .replaceAll(" ", "-")
              .toLowerCase(),
            price: productForm.price,
            short_description: productForm.short_description,
            description: productForm.description,
            freight_priority: productForm.freight_priority,
            shipping_info: JSON.stringify(shippingInfo),
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
        })
        .catch((error) => {
          setIsLoading(false);
          getErrorMessage({ error });
        });
    }
  }

  function handleCategory(id: string) {
    const result = collections.filter((obj) => obj.category_id === id);
    setRelationCollections(result);
    setProductForm({ ...productForm, category_id: id });
  }

  useEffect(() => {
    getCategories();
    getCollections();
    getAllProducts();
  }, []);

  return (
    <Fragment>
      <DashboardLayout
        page="products"
        pageTitle={`${defaultConfigs.companyName} - Produtos`}
      >
        <BoxContainer shadow={"md"} bg="white" p={3} rounded="md" mb={5}>
          <form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <Grid templateColumns={"1fr"} justifyItems="center" gap={3}>
              <Flex
                h="full"
                w="full"
                direction={"column"}
                justify="space-between"
                gap={3}
              >
                <Grid templateColumns={"1fr"} gap={3}>
                  <Grid
                    templateColumns={[
                      "1fr",
                      "1fr",
                      "1fr 1fr",
                      "1fr",
                      "1fr 1fr",
                    ]}
                    gap={3}
                  >
                    <FormControl>
                      <FormLabel mb={1}>
                        <HStack>
                          <Text>Selecione uma cateogoria</Text>{" "}
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
                      <Select
                        focusBorderColor={defaultColors.primary["500"]}
                        value={productForm.category_id}
                        onChange={(e) => handleCategory(e.target.value)}
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
                      <FormLabel mb={1}>Selecione uma sub-categoria</FormLabel>
                      <Select
                        focusBorderColor={defaultColors.primary["500"]}
                        value={productForm.collection_id}
                        onChange={(e) =>
                          setProductForm({
                            ...productForm,
                            collection_id: e.target.value,
                          })
                        }
                      >
                        <option value={""}>Selecione uma opção</option>
                        {relationCollections.map((collection) => (
                          <option value={collection.id} key={collection.id}>
                            {collection.name}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid
                    templateColumns={[
                      "1fr",
                      "1fr",
                      "1fr 1fr",
                      "1fr",
                      "1fr 1fr",
                    ]}
                    gap={3}
                  >
                    <FormControl>
                      <FormLabel>Nome</FormLabel>
                      <Input
                        value={productForm.name}
                        onChange={(e) =>
                          setProductForm({
                            ...productForm,
                            name: e.target.value,
                          })
                        }
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Preço</FormLabel>
                      <InputGroup>
                        <Input
                          roundedRight={0}
                          value={productForm.price}
                          onChange={(e) =>
                            setProductForm({
                              ...productForm,
                              price: e.target.value,
                            })
                          }
                          type="number"
                        />
                        <InputRightAddon>R$</InputRightAddon>
                      </InputGroup>
                    </FormControl>
                  </Grid>

                  <FormControl>
                    <FormLabel>Descrição curta</FormLabel>
                    <Textarea
                      rows={2}
                      resize="none"
                      value={String(productForm.short_description)}
                      onChange={(e) =>
                        setProductForm({
                          ...productForm,
                          short_description: e.target.value,
                        })
                      }
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Descrição detalhada</FormLabel>

                    <Box rounded={"md"} borderWidth="1px" p={2}>
                      <Tiptap
                        onChange={(e) =>
                          setProductForm({ ...productForm, description: e })
                        }
                        value={productForm.description}
                      />
                    </Box>
                  </FormControl>

                  <Grid
                    templateColumns={[
                      "repeat(1, 1fr)",
                      "repeat(2, 1fr)",
                      "repeat(3, 1fr)",
                      "repeat(2, 1fr)",
                      "repeat(5, 1fr)",
                    ]}
                    gap={3}
                  >
                    <FormControl>
                      <FormLabel>Modo de Entrega</FormLabel>
                      <Select
                        focusBorderColor={defaultColors.primary["500"]}
                        value={productForm.freight_priority}
                        onChange={(e) =>
                          setProductForm({
                            ...productForm,
                            freight_priority: e.target.value,
                          })
                        }
                      >
                        <option value={"FAST"}>Entrega rápida</option>
                        <option value={"NORMAL"}>Entrega normal</option>
                      </Select>
                    </FormControl>
                    <FormControl>
                      <FormLabel>Largura</FormLabel>
                      <InputGroup>
                        <Input
                          roundedRight={0}
                          value={shippingInfo.width}
                          onChange={(e) =>
                            setShippingInfo({
                              ...shippingInfo,
                              width: e.target.value,
                            })
                          }
                          type="number"
                        />
                        <InputRightAddon>cm</InputRightAddon>
                      </InputGroup>
                    </FormControl>
                    <FormControl>
                      <FormLabel>Altura</FormLabel>
                      <InputGroup>
                        <Input
                          roundedRight={0}
                          value={shippingInfo.height}
                          onChange={(e) =>
                            setShippingInfo({
                              ...shippingInfo,
                              height: e.target.value,
                            })
                          }
                          type="number"
                        />
                        <InputRightAddon>cm</InputRightAddon>
                      </InputGroup>
                    </FormControl>
                    <FormControl>
                      <FormLabel>Comprimento</FormLabel>
                      <InputGroup>
                        <Input
                          roundedRight={0}
                          value={shippingInfo.lenght}
                          onChange={(e) =>
                            setShippingInfo({
                              ...shippingInfo,
                              lenght: e.target.value,
                            })
                          }
                          type="number"
                        />
                        <InputRightAddon>cm</InputRightAddon>
                      </InputGroup>
                    </FormControl>
                    <FormControl>
                      <FormLabel>Peso</FormLabel>
                      <InputGroup>
                        <Input
                          roundedRight={0}
                          value={shippingInfo.weight}
                          onChange={(e) =>
                            setShippingInfo({
                              ...shippingInfo,
                              weight: e.target.value,
                            })
                          }
                          type="number"
                        />
                        <InputRightAddon>kg</InputRightAddon>
                      </InputGroup>
                    </FormControl>
                  </Grid>
                </Grid>

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
              Mostrando {products.length} itens
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
              {products.length === 0 ? (
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
                        <Th w="16" textAlign={"center"}>
                          Promo?
                        </Th>
                        <Th minW={"56"}>Nome</Th>
                        <Th minW={"44"}>Slug</Th>
                        <Th>Categoria/Sub-categoria</Th>
                        <Th isNumeric>Preço</Th>
                        <Th w="36" textAlign={"center"}>
                          Ações
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {products.map((product) => (
                        <Tr key={product.id}>
                          <Td textAlign={"center"}>
                            <Avatar size={"sm"} src={product.thumbnail || ""} />
                          </Td>
                          <Td textAlign={"center"}>
                            <Flex justify={"center"}>
                              <Switch
                                colorScheme={defaultColors.primaryName}
                                isChecked={product.active}
                              />
                            </Flex>
                          </Td>
                          <Td textAlign={"center"}>
                            <Flex justify={"center"}>
                              <Switch
                                colorScheme={defaultColors.primaryName}
                                isChecked={product.promotional}
                              />
                            </Flex>
                          </Td>
                          <Td>{product.name}</Td>
                          <Td>{product.slug}</Td>
                          <Td>
                            {product.category.name} - {product.collection.name}
                          </Td>
                          <Td isNumeric>{formatMoney(product.price)}</Td>
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
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              )}
            </>
          )}

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
