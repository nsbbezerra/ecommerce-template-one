import { api } from "@/configs/api";
import getErrorMessage from "@/helpers/get-error-message";
import { defaultColors } from "@/styles/customTheme";
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  Text,
  Image,
} from "@chakra-ui/react";
import { ImagePlus, Save, Trash } from "lucide-react";
import { Fragment, useMemo, useState } from "react";
import Swal from "sweetalert2";

interface Props {
  width: number | string;
  height: number | string;
  thumbnail?: { id: string | null; url: string | null };
  url?: string;
  to: "category" | "product";
  destinationId: string;
  handleClose: () => void;
}

export default function Uploader({
  height,
  width,
  to,
  thumbnail,
  url,
  destinationId,
  handleClose,
}: Props) {
  const [newThumbnail, setNewThumbnail] = useState<File | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const preview = useMemo(() => {
    return newThumbnail ? URL.createObjectURL(newThumbnail) : undefined;
  }, [newThumbnail]);

  function removeThumbnail() {
    URL.revokeObjectURL(newThumbnail as any);
    setNewThumbnail(undefined);
  }

  function handleThumbnail(file: FileList | null) {
    if (file) {
      setNewThumbnail(file[0]);
    }
  }

  function saveThumbnail() {
    setIsLoading(true);
    if (!newThumbnail) {
      Swal.fire({
        title: "Atenção",
        text: "Selecione uma imagem",
        icon: "warning",
        confirmButtonColor: defaultColors.primary["500"],
      });
      return;
    }
    const data = new FormData();
    data.append("thumbnail", newThumbnail);
    api
      .put(`${url}/${to}/${destinationId}`, data)
      .then((response) => {
        Swal.fire({
          title: "Sucesso",
          text: response.data.message,
          icon: "success",
          confirmButtonColor: defaultColors.primary["500"],
        });
        setIsLoading(false);
        handleClose();
      })
      .catch((error) => {
        setIsLoading(false);
        getErrorMessage({ error });
      });
  }

  return (
    <Fragment>
      {!thumbnail?.id ? (
        <>
          {!newThumbnail ? (
            <FormLabel htmlFor="image">
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
                <Input
                  type={"file"}
                  id="image"
                  hidden
                  onChange={(e) => {
                    handleThumbnail(e.target.files);
                  }}
                  accept="image/*"
                />
              </Flex>
            </FormLabel>
          ) : (
            <Box
              rounded={"md"}
              overflow="hidden"
              w={width}
              height={height}
              position="relative"
            >
              <Image
                src={String(preview)}
                width={width}
                height={height}
                alt="Preview"
                style={{ objectFit: "cover" }}
              />

              <Flex
                justify={"center"}
                gap={3}
                position="absolute"
                zIndex={1000}
                bottom={3}
                w="full"
              >
                <Button
                  leftIcon={<Trash size={18} />}
                  size="sm"
                  colorScheme={"red"}
                  onClick={removeThumbnail}
                >
                  Excluir
                </Button>
                <Button
                  leftIcon={<Save size={18} />}
                  size="sm"
                  colorScheme={defaultColors.primaryName}
                  isLoading={isLoading}
                  onClick={saveThumbnail}
                >
                  Salvar
                </Button>
              </Flex>
            </Box>
          )}
        </>
      ) : (
        ""
      )}
    </Fragment>
  );
}
