import Input from "@/components/app/form/Input";
import { TableContainer } from "@/components/app/styled/styles";
import DashboardLayout from "@/components/dashboard/Layout";
import { defaultConfigs } from "@/configs";
import { defaultColors } from "@/styles/customTheme";
import {
  Button,
  Flex,
  Grid,
  Select,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Search, ZoomIn } from "lucide-react";
import { Fragment } from "react";

export default function DashboardClientsPage() {
  return (
    <Fragment>
      <DashboardLayout
        page="clients"
        pageTitle={`${defaultConfigs.companyName} - Litagem de clientes`}
      >
        <Grid
          templateColumns={[
            "1fr",
            "1fr 2fr 120px",
            "1fr 2fr 150px",
            "1fr 3fr 150px",
            "1fr 3fr 150px",
          ]}
          gap={3}
          shadow={"md"}
          bg="white"
          p={3}
          rounded="md"
          mb={5}
        >
          <Select focusBorderColor={defaultColors.primary["500"]}>
            <option>Todos</option>
            <option>Por nome</option>
          </Select>
          <Input />
          <Button
            w="full"
            leftIcon={<Search size={17} />}
            colorScheme={defaultColors.primaryName}
          >
            Buscar
          </Button>
        </Grid>
        <TableContainer shadow={"md"} bg="white" p={3} rounded="md">
          <Table
            variant={"striped"}
            colorScheme={defaultColors.primaryName}
            size="sm"
          >
            <Thead>
              <Tr>
                <Th minW={"56"}>Nome</Th>
                <Th minW={"44"}>Telefone</Th>
                <Th minW={"44"}>Email</Th>
                <Th w="36">Endereço</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Natanael dos Santos Bezerra</Td>
                <Td>(63) 99971-1716</Td>
                <Td>contato.nk.info@gmail.com</Td>
                <Td>
                  <Button leftIcon={<ZoomIn size={17} />} size="sm" w="full">
                    Visualizar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>Natanael dos Santos Bezerra</Td>
                <Td>(63) 99971-1716</Td>
                <Td>contato.nk.info@gmail.com</Td>
                <Td>
                  <Button leftIcon={<ZoomIn size={17} />} size="sm" w="full">
                    Visualizar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </DashboardLayout>
    </Fragment>
  );
}
