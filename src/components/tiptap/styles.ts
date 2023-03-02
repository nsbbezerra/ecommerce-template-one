import { defaultColors } from "@/styles/customTheme";
import { IconButton, IconButtonProps } from "@chakra-ui/react";
import styled from "@emotion/styled";

interface Props {
  active?: boolean;
}

type ButtonProps = IconButtonProps & Props;

export const EditorBarButton = styled(IconButton)<ButtonProps>`
  background-color: ${(props) =>
    props.active ? defaultColors.primary["100"] : ""};
`;
