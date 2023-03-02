import { Flex, Text } from "@chakra-ui/react";
import { ImagePlus } from "lucide-react";
import { Fragment } from "react";

interface Props {
  width: number | string;
  height: number | string;
}

export default function Uploader({ height, width }: Props) {
  return (
    <Fragment>
      <Flex
        w={width}
        height={height}
        rounded="md"
        borderWidth={"2px"}
        borderStyle="dashed"
        justify={"center"}
        align="center"
        direction={"column"}
        p={3}
        textAlign="center"
        fontSize={"sm"}
        color={"gray.600"}
        gap={3}
        cursor="pointer"
        _hover={{ borderWidth: "3px" }}
      >
        <ImagePlus size={40} />
        <Text>Insira uma imagem 300px por 300px e no máximo 300kb</Text>
      </Flex>
    </Fragment>
  );
}
