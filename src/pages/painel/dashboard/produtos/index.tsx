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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  theme,
} from "@chakra-ui/react";
import {
  Edit,
  ImagePlus,
  PackageOpen,
  RefreshCw,
  Save,
  Search,
  Trash,
} from "lucide-react";
import { FormEvent, Fragment, useEffect, useState } from "react";
import Swal from "sweetalert2";
import formatMoney from "@/utils/format-money";
import scrollToTop from "@/utils/scroll-to-top";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TiptapMenuBar from "@/components/tiptap/MenuBar";
import calcDiscount from "@/utils/calc-percentage";

interface ShippingInfoProps {
  width: string;
  height: string;
  lenght: string;
  weight: string;
}

interface ThumbnailProps {
  url: string | null;
  id: string | null;
}

interface ProductOptionsProps {
  id: string;
  headline: string;
  content: string;
  stock: string | null;
}

const LIMIT_PRODUCTS = 10;

export default function DashboardProducts() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "Insira seu texto aqui",
  });

  const [productForm, setProductForm] = useState<ProductsEntityDto>({
    active: true,
    category_id: "",
    collection_id: "",
    slug: "",
    name: "",
    price: "",
    short_description: "",
    freight_priority: "",
    stock: null,
    stock_type: "",
  });

  const [shippingInfo, setShippingInfo] = useState<ShippingInfoProps>({
    height: "",
    lenght: "",
    weight: "",
    width: "",
  });

  const [productOptionsForm, setProductOptionsForm] =
    useState<ProductOptionsProps>({
      content: "",
      headline: "",
      stock: "",
      id: "",
    });

  const [productsOptions, setProductsOptions] = useState<ProductOptionsProps[]>(
    []
  );

  const [formType, setFormType] = useState<FormTypeProps>({ type: "save" });
  const [productOptFormType, setProductOptFormType] = useState<FormTypeProps>({
    type: "save",
  });

  const [modalThumbnail, setModalThumbnail] = useState<boolean>(false);
  const [thumbnail, setThumbnail] = useState<ThumbnailProps>({
    id: null,
    url: null,
  });

  const [page, setPage] = useState<number>(0);
  const [totalProducts, setTotalProducts] = useState<number>(0);

  const [productId, setProductId] = useState<string>("");

  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isProductOptionLoading, setIsProductOptionLoading] =
    useState<boolean>(false);

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

  const [search, setSearch] = useState<string>("");

  const [typeSearch, setTypeSearch] = useState<string>("all");

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

  function searchProducts() {
    setIsFetching(true);
    api
      .post(`/products/search/${typeSearch}`, {
        name: search,
      })
      .then((response) => {
        setProducts(response.data);
        setIsFetching(false);
      })
      .catch((error) => {
        getErrorMessage({ error });
        setIsFetching(false);
      });
  }

  function getAllProducts(actualPage: number, mode: "handleMore" | "update") {
    if (typeSearch !== "all") {
      searchProducts();
      return;
    }
    setIsFetching(true);
    setPage(actualPage);
    api
      .get(`/products/get-all/${LIMIT_PRODUCTS * actualPage}/${LIMIT_PRODUCTS}`)
      .then((response) => {
        const newProducts = response.data.products;
        if (mode === "update") {
          setProducts(newProducts);
        } else {
          setProducts([...products, ...newProducts]);
        }
        setTotalProducts(response.data.count);
        setIsFetching(false);
      })
      .catch((error) => {
        getErrorMessage({ error });
        setIsFetching(false);
      });
  }

  function handleMore() {
    const more = page + 1;
    getAllProducts(more, "handleMore");
  }

  function reset() {
    setProductForm({
      active: true,
      category_id: "",
      collection_id: "",
      slug: "",
      name: "",
      price: "",
      short_description: "",
      freight_priority: "",
      stock: null,
      stock_type: "",
    });
    setShippingInfo({
      height: "",
      lenght: "",
      weight: "",
      width: "",
    });
    setFormType({ type: "save" });
    editor?.commands.clearContent();
    setProductsOptions([]);
    setProductId("");
  }

  function resetProductOptionsForm() {
    setProductOptionsForm({
      content: "",
      headline: "",
      stock: "",
      id: "",
    });
    setProductOptFormType({ type: "save" });
  }

  function resetMaster() {
    reset();
    resetProductOptionsForm();
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
    if (editor?.getHTML() === "<p>Insira seu texto aqui</p>") {
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
    if (productForm.stock_type === "") {
      Swal.fire({
        title: "Atenção",
        text: "Selecione um tipo de estoque",
        icon: "warning",
        confirmButtonColor: defaultColors.primary["500"],
      });
      return;
    }
    if (productForm.stock_type === "CUSTOM" && !productsOptions.length) {
      Swal.fire({
        title: "Atenção",
        text: "Insira pelo menos uma opção de estoque",
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
            description: editor?.getHTML(),
            freight_priority: productForm.freight_priority,
            shipping_info: JSON.stringify(shippingInfo),
            stock_type: productForm.stock_type,
            stock: Number(productForm.stock),
          },
          productOptions: productsOptions,
        })
        .then((response) => {
          Swal.fire({
            title: "Sucesso",
            text: response.data.message,
            icon: "success",
            confirmButtonColor: defaultColors.primary["500"],
          });
          setIsLoading(false);
          setProductId(response.data.productId);
          setModalThumbnail(true);
        })
        .catch((error) => {
          setIsLoading(false);
          getErrorMessage({ error });
        });
    } else {
      setIsLoading(true);
      api
        .put("/products/update", {
          product: {
            id: productId,
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
            description: editor?.getHTML(),
            freight_priority: productForm.freight_priority,
            shipping_info: JSON.stringify(shippingInfo),
            stock_type: productForm.stock_type,
            stock: Number(productForm.stock),
          },
          productOptions: [],
        })
        .then((response) => {
          Swal.fire({
            title: "Sucesso",
            text: response.data.message,
            icon: "success",
            confirmButtonColor: defaultColors.primary["500"],
          });
          setIsLoading(false);
          getAllProducts(0, "update");
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

  function handleFinishThumbnail() {
    setModalThumbnail(false);
    reset();
    resetProductOptionsForm();
    getAllProducts(0, "update");
  }

  function handleThumbnail(id: string) {
    const result = products.find((obj) => obj.id === id);
    setThumbnail({
      id: result?.thumbnail_id || null,
      url: result?.thumbnail || null,
    });
    setProductId(result?.id || "");
    setModalThumbnail(true);
  }

  function handleEdit(id: string) {
    const result = products.find((obj) => obj.id === id);
    if (result) {
      const parsedShipping = JSON.parse(
        result.shipping_info as unknown as string
      );
      setProductId(result.id);
      setProductForm({
        active: result.active,
        category_id: result.category.id,
        collection_id: result.collection.id,
        freight_priority: result.freight_priority,
        name: result.name,
        price: result.price,
        short_description: result.short_description,
        slug: result.slug,
        stock_type: result.stock_type,
        stock: result.stock,
      });
      setShippingInfo({
        height: parsedShipping.height,
        lenght: parsedShipping.lenght,
        weight: parsedShipping.weight,
        width: parsedShipping.width,
      });
      if (result.stock_type === "CUSTOM") {
        setProductsOptions(result.ProductOptions);
      } else {
        setProductsOptions([]);
      }
      editor?.commands.setContent(result.description);

      scrollToTop();
      setFormType({ type: "edit" });
    }
  }

  function handleProductOptions() {
    const result = productsOptions.find(
      (obj) => obj.headline === productOptionsForm.headline
    );
    if (result) {
      Swal.fire({
        text: "Já existe uma opção nesta ordem!",
        title: "Atenção",
        icon: "warning",
        confirmButtonColor: defaultColors.primary["500"],
      });
      return;
    }
    if (productOptionsForm.headline === "") {
      Swal.fire({
        text: "Insira uma ordem!",
        title: "Atenção",
        icon: "warning",
        confirmButtonColor: defaultColors.primary["500"],
      });
      return;
    }
    if (productOptionsForm.content === "") {
      Swal.fire({
        text: "Insira uma identificação!",
        title: "Atenção",
        icon: "warning",
        confirmButtonColor: defaultColors.primary["500"],
      });
      return;
    }
    if (productOptionsForm.stock === "") {
      Swal.fire({
        text: "Insira um valor para o estoque!",
        title: "Atenção",
        icon: "warning",
        confirmButtonColor: defaultColors.primary["500"],
      });
      return;
    }
    setProductsOptions([
      ...productsOptions,
      {
        content: productOptionsForm.content,
        headline: productOptionsForm.headline,
        stock: productOptionsForm.stock,
        id: productOptionsForm.headline,
      },
    ]);

    resetProductOptionsForm();
  }

  function handleDeleteProductOptions(order: string) {
    const result = productsOptions.filter((obj) => obj.headline !== order);
    setProductsOptions(result);
  }

  function handleEditProductOptions(id: string) {
    setProductOptFormType({ type: "edit" });
    const result = productsOptions.find((obj) => obj.id === id);
    if (result) {
      setProductOptionsForm({
        id: result?.id,
        content: result?.content,
        headline: result?.headline,
        stock: result?.stock,
      });
    }
  }

  function setEditProductOption() {
    if (productOptFormType.type === "edit") {
      setIsProductOptionLoading(true);
      api
        .put("/product-options/update", {
          options: { ...productOptionsForm },
        })
        .then((response) => {
          setIsProductOptionLoading(false);
          const { newProductOptions } = response.data;
          const updated = productsOptions.map((prodOpt) => {
            if (prodOpt.id === newProductOptions.id) {
              return {
                ...prodOpt,
                content: newProductOptions.content,
                headline: newProductOptions.headline,
                stock: newProductOptions.stock,
              };
            }
            return prodOpt;
          });
          setProductsOptions(updated);
          Swal.fire({
            title: "Sucesso",
            text: response.data.message,
            icon: "success",
            confirmButtonColor: defaultColors.primary["500"],
          });
          resetProductOptionsForm();
          getAllProducts(0, "update");
        })
        .catch((error) => {
          setIsProductOptionLoading(false);
          getErrorMessage({ error });
        });
    } else {
      setIsProductOptionLoading(true);
      api
        .post("/product-options/save", {
          options: {
            headline: productOptionsForm.headline,
            content: productOptionsForm.content,
            stock: productOptionsForm.stock,
            product_id: productId,
          },
        })
        .then((response) => {
          const newOptions = response.data.productOptions;
          Swal.fire({
            title: "Sucesso",
            text: response.data.message,
            icon: "success",
            confirmButtonColor: defaultColors.primary["500"],
          });
          setProductsOptions([
            ...productsOptions,
            {
              content: newOptions.content,
              headline: newOptions.headline,
              id: newOptions.id,
              stock: newOptions.stock,
            },
          ]);
          setIsProductOptionLoading(false);
          getAllProducts(0, "update");
          resetProductOptionsForm();
        })
        .catch((error) => {
          setIsProductOptionLoading(false);
          getErrorMessage({ error });
        });
    }
  }

  function deleteProductOption(id: string) {
    Swal.fire({
      title: "Confirmação!",
      text: "Deseja excluir esta informação?",
      icon: "question",
      showCancelButton: true,
      cancelButtonColor: theme.colors.red["600"],
      showConfirmButton: true,
      confirmButtonColor: defaultColors.primary["500"],
      cancelButtonText: "Não",
      confirmButtonText: "Sim",
      showLoaderOnConfirm: true,
    }).then((result) => {
      if (result.isConfirmed) {
        api
          .delete(`/product-options/delete/${id}`)
          .then((response) => {
            Swal.fire({
              title: "Sucesso",
              text: response.data.message,
              icon: "success",
              confirmButtonColor: defaultColors.primary["500"],
            });
            const updated = productsOptions.filter((obj) => obj.id !== id);
            setProductsOptions(updated);
            getAllProducts(0, "update");
          })
          .catch((error) => {
            getErrorMessage({ error });
          });
      }
    });
  }

  function handleActiveProduct(id: string, active: boolean) {
    api
      .put("/products/update", {
        product: {
          id,
          active: active,
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
        getAllProducts(0, "update");
      })
      .catch((error) => {
        setIsLoading(false);
        getErrorMessage({ error });
      });
  }

  function handlePromoProduct(id: string, active: boolean, rate: number) {
    Swal.fire({
      text: `Deseja ${
        active ? "adicionar" : "retirar"
      } este produto dos promocionais?`,
      title: "Confirmação!",
      icon: "question",
      showCancelButton: true,
      cancelButtonColor: theme.colors.red["600"],
      showConfirmButton: true,
      confirmButtonColor: defaultColors.primary["500"],
      cancelButtonText: "Não",
      confirmButtonText: "Sim",
      showLoaderOnConfirm: true,
      input: "number",
      inputLabel: "Porcentagem do desconto",
      inputValue: rate,
    }).then((result) => {
      if (result.isConfirmed) {
        api
          .put("/products/update", {
            product: {
              id,
              active: active,
              promotional: active,
              promo_rate: Number(result.value),
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
            getAllProducts(0, "update");
          })
          .catch((error) => {
            setIsLoading(false);
            getErrorMessage({ error });
          });
      }
    });
  }

  useEffect(() => {
    getCategories();
    getCollections();
    getAllProducts(0, "update");
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
                      "1fr 1fr 1fr 1fr",
                      "2fr 1fr 1fr 1fr",
                    ]}
                    gap={3}
                  >
                    <FormControl>
                      <FormLabel>
                        Nome{" "}
                        {formType.type === "save" ? (
                          <Tag colorScheme={"green"}>Criação</Tag>
                        ) : (
                          <Tag colorScheme={"blue"}>
                            <TagLabel>Edição</TagLabel>
                            <TagCloseButton onClick={() => resetMaster()} />
                          </Tag>
                        )}
                      </FormLabel>
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
                      <FormLabel>
                        <HStack>
                          <Text>Cateogoria</Text>{" "}
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
                      <FormLabel>Sub-categoria</FormLabel>
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

                    <Box
                      rounded={"md"}
                      borderWidth={"1px"}
                      p={2}
                      boxShadow={
                        editor?.isFocused
                          ? `0px 0px 0px 2px ${defaultColors.primary["500"]}`
                          : ""
                      }
                      transition="all .1s"
                    >
                      <TiptapMenuBar editor={editor} />
                      <Tiptap editor={editor} />
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
                        <option value={""}>Selecione uma opção</option>
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

                  <Grid
                    templateColumns={[
                      "repeat(1, 1fr)",
                      "repeat(2, 1fr)",
                      "repeat(2, 1fr)",
                      "repeat(2, 1fr)",
                      "repeat(2, 1fr)",
                    ]}
                    gap={3}
                  >
                    <FormControl>
                      <FormLabel>Tipo de Estoque</FormLabel>
                      <Select
                        focusBorderColor={defaultColors.primary["500"]}
                        value={productForm.stock_type}
                        onChange={(e) =>
                          setProductForm({
                            ...productForm,
                            stock_type: e.target.value,
                          })
                        }
                      >
                        <option value={""}>Selecione uma opção</option>
                        <option value={"OFF"}>Sem Estoque</option>
                        <option value={"UNITY"}>Unitário</option>
                        <option value={"CUSTOM"}>Personalizado</option>
                      </Select>
                    </FormControl>
                    <FormControl>
                      <FormLabel>Quantidade em estoque</FormLabel>
                      <Input
                        value={productForm.stock || ""}
                        onChange={(e) =>
                          setProductForm({
                            ...productForm,
                            stock: e.target.value,
                          })
                        }
                        isDisabled={productForm.stock_type !== "UNITY"}
                      />
                    </FormControl>
                  </Grid>

                  {productForm.stock_type === "CUSTOM" && (
                    <>
                      <Grid
                        templateColumns={[
                          "1fr 1fr",
                          "80px 1fr 1fr 150px",
                          "80px 1fr 1fr 150px",
                          "80px 1fr 1fr 150px",
                          "80px 1fr 1fr 150px",
                        ]}
                        gap={3}
                        alignItems="end"
                      >
                        <FormControl>
                          <FormLabel>Ordem</FormLabel>
                          <Input
                            value={productOptionsForm.headline}
                            onChange={(e) =>
                              setProductOptionsForm({
                                ...productOptionsForm,
                                headline: e.target.value,
                              })
                            }
                            isReadOnly={productOptFormType.type === "edit"}
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Identificação</FormLabel>
                          <Input
                            value={productOptionsForm.content}
                            onChange={(e) =>
                              setProductOptionsForm({
                                ...productOptionsForm,
                                content: e.target.value,
                              })
                            }
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Estoque</FormLabel>
                          <Input
                            value={productOptionsForm.stock || ""}
                            onChange={(e) =>
                              setProductOptionsForm({
                                ...productOptionsForm,
                                stock: e.target.value,
                              })
                            }
                          />
                        </FormControl>
                        {formType.type === "save" ? (
                          <Button
                            colorScheme={defaultColors.primaryName}
                            variant="outline"
                            w="full"
                            onClick={handleProductOptions}
                          >
                            Add
                          </Button>
                        ) : (
                          <HStack>
                            <Button
                              colorScheme={defaultColors.primaryName}
                              variant="outline"
                              w="full"
                              onClick={setEditProductOption}
                              isLoading={isProductOptionLoading}
                            >
                              Salvar
                            </Button>
                            <Tooltip label="Resetar">
                              <IconButton
                                icon={<RefreshCw size={17} />}
                                variant="outline"
                                aria-label="New product options"
                                colorScheme="red"
                                onClick={resetProductOptionsForm}
                              />
                            </Tooltip>
                          </HStack>
                        )}
                      </Grid>

                      <TableContainer>
                        <Table size={"sm"}>
                          <Thead>
                            <Tr bg={"gray.100"}>
                              <Th>Ordem</Th>
                              <Th>Identificação</Th>
                              <Th>Estoque</Th>
                              <Th w="10" textAlign={"center"}>
                                Ações
                              </Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            {productsOptions.map((prodOpt) => (
                              <Tr key={prodOpt.headline}>
                                <Td>{prodOpt.headline}</Td>
                                <Td>{prodOpt.content}</Td>
                                <Td>{prodOpt.stock}</Td>
                                <Td textAlign={"center"}>
                                  {formType.type === "save" ? (
                                    <IconButton
                                      aria-label="Remove product opt"
                                      icon={<Trash size={17} />}
                                      colorScheme="red"
                                      size={"sm"}
                                      variant="ghost"
                                      onClick={() =>
                                        handleDeleteProductOptions(
                                          prodOpt.headline
                                        )
                                      }
                                    />
                                  ) : (
                                    <>
                                      <HStack>
                                        <IconButton
                                          aria-label="Remove product opt"
                                          icon={<Trash size={17} />}
                                          colorScheme="red"
                                          size={"sm"}
                                          variant="ghost"
                                          onClick={() =>
                                            deleteProductOption(prodOpt.id)
                                          }
                                        />
                                        <IconButton
                                          aria-label="Edit product opt"
                                          icon={<Edit size={17} />}
                                          colorScheme={
                                            defaultColors.primaryName
                                          }
                                          size={"sm"}
                                          variant="ghost"
                                          onClick={() =>
                                            handleEditProductOptions(prodOpt.id)
                                          }
                                        />
                                      </HStack>
                                    </>
                                  )}
                                </Td>
                              </Tr>
                            ))}
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </>
                  )}
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
            align={["start", "center", "center", "center", "center"]}
            justify="space-between"
            mb={3}
            pb={3}
            borderBottomWidth="1px"
            gap={3}
            direction={["column", "row", "row", "row", "row"]}
          >
            <Text fontWeight={"bold"} color="gray.600" fontSize={"sm"}>
              Mostrando {products.length} itens
            </Text>

            <HStack>
              <Select
                focusBorderColor={defaultColors.primary["500"]}
                value={typeSearch}
                onChange={(e) => setTypeSearch(e.target.value)}
                w="44"
              >
                <option value={"all"}>Todos</option>
                <option value={"block"}>Bloqueados</option>
                <option value={"promo"}>Promocionais</option>
                <option value={"name"}>Por nome</option>
              </Select>
              <Input
                placeholder="Digite para buscar"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                isDisabled={typeSearch !== "name"}
              />
              <IconButton
                aria-label="Buscar categoria"
                icon={<Search size={18} />}
                colorScheme={defaultColors.primaryName}
                onClick={() => getAllProducts(0, "update")}
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
                        <Th w="14" textAlign={"center"}>
                          thumb
                        </Th>
                        <Th w="16" textAlign={"center"}>
                          Ativo?
                        </Th>
                        <Th w="20" textAlign={"center"}>
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
                                onChange={(e) =>
                                  handleActiveProduct(
                                    product.id,
                                    e.target.checked
                                  )
                                }
                              />
                            </Flex>
                          </Td>
                          <Td textAlign={"center"}>
                            <Flex justify={"start"} align="center" gap={1}>
                              <Switch
                                colorScheme={defaultColors.primaryName}
                                isChecked={product.promotional}
                                onChange={(e) =>
                                  handlePromoProduct(
                                    product.id,
                                    e.target.checked,
                                    product.promo_rate
                                  )
                                }
                              />
                              {product.promotional && (
                                <Tag colorScheme={"red"}>
                                  -{product.promo_rate}%
                                </Tag>
                              )}
                            </Flex>
                          </Td>
                          <Td>{product.name}</Td>
                          <Td>{product.slug}</Td>
                          <Td>
                            {product.category.name} / {product.collection.name}
                          </Td>
                          <Td isNumeric>
                            {product.promotional ? (
                              <HStack>
                                <Text fontSize={"xs"} textDecor="line-through">
                                  {formatMoney(product.price)}
                                </Text>
                                <Text>
                                  {calcDiscount(
                                    Number(product.price),
                                    product.promo_rate
                                  )}
                                </Text>
                              </HStack>
                            ) : (
                              <>{formatMoney(product.price)}</>
                            )}
                          </Td>
                          <Td textAlign={"center"}>
                            <HStack justify={"center"} spacing={1}>
                              <Tooltip label="Alterar Imagem" hasArrow>
                                <IconButton
                                  aria-label="Editar"
                                  icon={<ImagePlus size={16} />}
                                  size="sm"
                                  colorScheme={defaultColors.primaryName}
                                  variant="ghost"
                                  onClick={() => handleThumbnail(product.id)}
                                />
                              </Tooltip>
                              <Tooltip label="Editar" hasArrow>
                                <IconButton
                                  aria-label="Editar"
                                  icon={<Edit size={16} />}
                                  size="sm"
                                  colorScheme={defaultColors.primaryName}
                                  variant="ghost"
                                  onClick={() => handleEdit(product.id)}
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

          {typeSearch === "all" && (
            <Flex justify="center" pt={3}>
              <Button
                colorScheme={defaultColors.primaryName}
                size="sm"
                variant={"ghost"}
                isDisabled={products.length >= totalProducts}
                onClick={() => handleMore()}
              >
                MOSTRAR MAIS
              </Button>
            </Flex>
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
                  to="product"
                  thumbnail={thumbnail}
                  destinationId={productId}
                  handleClose={() => handleFinishThumbnail()}
                  handleDelete={() => getAllProducts(page, "update")}
                />
              )}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Fragment>
  );
}
