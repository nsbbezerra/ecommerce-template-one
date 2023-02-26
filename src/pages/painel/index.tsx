import HeadApp from "@/components/app/Head";
import { defaultConfigs } from "@/configs";
import { Button, Flex, FormControl, FormLabel } from "@chakra-ui/react";
import { Fragment } from "react";
import { Fingerprint, LogIn } from "lucide-react";
import { defaultColors } from "@/styles/customTheme";
import Input from "@/components/app/form/Input";

export default function DashboardLogin() {
  return (
    <Fragment>
      <HeadApp title={`${defaultConfigs.companyName} - Painel login`} />
      <Flex
        w="100vw"
        h="100vh"
        justify={"center"}
        align="center"
        bgGradient={`linear(to-r, ${defaultColors.primary["200"]}, ${defaultColors.secondary["800"]})`}
        p={5}
      >
        <Flex
          rounded={"md"}
          borderWidth="1px"
          shadow={"lg"}
          p={5}
          bg="white"
          direction={"column"}
          justify="center"
          align={"center"}
          w="full"
          maxW={"xs"}
          gap={3}
        >
          <Fingerprint size={48} color={defaultColors.primary["500"]} />

          <FormControl>
            <FormLabel>Usuário</FormLabel>
            <Input />
          </FormControl>
          <FormControl>
            <FormLabel>Senha</FormLabel>
            <Input type={"password"} />
          </FormControl>
          <Button
            leftIcon={<LogIn />}
            w="full"
            colorScheme={defaultColors.primaryName}
          >
            Login
          </Button>
        </Flex>
      </Flex>
    </Fragment>
  );
}
