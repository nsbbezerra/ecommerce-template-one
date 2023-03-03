import Input from "@/components/app/form/Input";
import { BoxContainer } from "@/components/app/styled/styles";
import DashboardLayout from "@/components/dashboard/Layout";
import { defaultConfigs } from "@/configs";
import { MasterUsersDto, MasterUsersEntity } from "@/dto/master-users";
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
  Tooltip,
  Switch,
  InputGroup,
  InputRightElement,
  Spinner,
  theme,
} from "@chakra-ui/react";
import { Eye, EyeOff, PackageOpen, Save, Trash } from "lucide-react";
import { FormEvent, Fragment, useEffect, useState } from "react";
import { sha256 } from "js-sha256";
import Swal from "sweetalert2";
import { api } from "@/configs/api";
import getErrorMessage from "@/helpers/get-error-message";

export default function DashboardMasterUsers() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [masterUserForm, setMasterUserForm] = useState<MasterUsersDto>({
    password: "",
    user: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [masterUsers, setMasterUsers] = useState<MasterUsersEntity[]>([]);

  const [isFetching, setIsFetching] = useState<boolean>(false);

  const [search, setSearch] = useState<string>("");

  const filteredMasters = search.length
    ? masterUsers.filter((obj) =>
        obj.user.toLowerCase().includes(search.toLowerCase())
      )
    : masterUsers;

  function reset() {
    setMasterUserForm({
      password: "",
      user: "",
    });
  }

  function getInitialData() {
    setIsFetching(true);
    api
      .get("/master-users/get-all")
      .then((response) => {
        setMasterUsers(response.data);
        setIsFetching(false);
      })
      .catch((error) => {
        setIsFetching(false);
        getErrorMessage({ error });
      });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!masterUserForm.user.length) {
      Swal.fire({
        title: "Atenção",
        text: "Digite seu usuário",
        icon: "warning",
        confirmButtonColor: defaultColors.primary["500"],
      });
      return;
    }
    if (!masterUserForm.password.length) {
      Swal.fire({
        title: "Atenção",
        text: "Digite sua senha",
        icon: "warning",
        confirmButtonColor: defaultColors.primary["500"],
      });
      return;
    }
    setIsLoading(true);

    const hash = sha256(masterUserForm.password);

    api
      .post("/master-users/save", {
        master: {
          user: masterUserForm.user,
          password: hash,
          active: true,
        },
      })
      .then((response) => {
        setIsLoading(false);
        Swal.fire({
          title: "Sucesso",
          text: response.data.message,
          icon: "success",
          confirmButtonColor: defaultColors.primary["500"],
        });
        getInitialData();
        reset();
      })
      .catch((error) => {
        setIsLoading(false);
        getErrorMessage({ error });
      });
  }

  function handleDeleteUser(id: string) {
    Swal.fire({
      title: "Atenção",
      text: "Deseja remover este usuário?",
      icon: "warning",
      showCancelButton: true,
      showConfirmButton: true,
      showLoaderOnConfirm: true,
      confirmButtonColor: theme.colors.green["600"],
      cancelButtonColor: theme.colors.red["600"],
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
    }).then((result) => {
      if (result.isConfirmed) {
        api
          .delete(`/master-users/delete/${id}`)
          .then((response) => {
            Swal.fire({
              title: "Sucesso",
              text: response.data.message,
              icon: "success",
              confirmButtonColor: defaultColors.primary["500"],
            });
            getInitialData();
          })
          .catch((error) => getErrorMessage({ error }));
      }
    });
  }

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <Fragment>
      <DashboardLayout
        page="master_user"
        pageTitle={`${defaultConfigs.companyName} - Usuários Master`}
      >
        <BoxContainer shadow={"md"} bg="white" p={3} rounded="md" mb={5}>
          <form onSubmit={handleSubmit}>
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
                <FormLabel>Usuário</FormLabel>
                <Input
                  value={masterUserForm.user}
                  onChange={(e) =>
                    setMasterUserForm({
                      ...masterUserForm,
                      user: e.target.value.toLowerCase(),
                    })
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel>Senha</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={masterUserForm.password}
                    onChange={(e) =>
                      setMasterUserForm({
                        ...masterUserForm,
                        password: e.target.value,
                      })
                    }
                    pr={10}
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label="show-password"
                      icon={
                        showPassword ? <EyeOff size={18} /> : <Eye size={18} />
                      }
                      variant="link"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                colorScheme={defaultColors.primaryName}
                leftIcon={<Save size={18} />}
                w="full"
                type="submit"
                isLoading={isLoading}
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
              Mostrando {masterUsers.length} itens
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
              {filteredMasters.length === 0 ? (
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
                        <Th minW={"44"}>Senha</Th>
                        <Th w="36" textAlign={"center"}>
                          Ações
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {filteredMasters.map((master) => (
                        <Tr key={master.id}>
                          <Td textAlign={"center"}>
                            <Flex justify={"center"}>
                              <Switch
                                colorScheme={defaultColors.primaryName}
                                isChecked={master.active}
                              />
                            </Flex>
                          </Td>
                          <Td>{master.user}</Td>
                          <Td>••••••••••••••••••••</Td>
                          <Td textAlign={"center"}>
                            <HStack justify={"center"} spacing={1}>
                              <Tooltip label="Remover" hasArrow>
                                <IconButton
                                  aria-label="Editar"
                                  icon={<Trash size={16} />}
                                  size="sm"
                                  colorScheme={"red"}
                                  variant="ghost"
                                  onClick={() => handleDeleteUser(master.id)}
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
