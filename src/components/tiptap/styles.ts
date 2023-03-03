import { defaultColors } from "@/styles/customTheme";
import {
  Button,
  IconButton,
  IconButtonProps,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

interface Props {
  active?: boolean;
}

type ButtonProps = IconButtonProps & Props;

type DefaultButtonProps = ChakraButtonProps & Props;

export const EditorBarButton = styled(IconButton)<ButtonProps>`
  background-color: ${(props) =>
    props.active ? defaultColors.primary["100"] : ""};
`;

export const EditorDefaultButton = styled(Button)<DefaultButtonProps>`
  background-color: ${(props) =>
    props.active ? defaultColors.primary["100"] : ""};
`;
