import { defaultColors } from "@/styles/customTheme";
import { theme } from "@chakra-ui/react";
import styled from "@emotion/styled";

interface StyledMenuItemProps {
  active?: boolean;
}

const StyledMenuItem = styled.button<StyledMenuItemProps>`
  width: 100%;
  display: flex;
  height: ${theme.sizes["10"]};
  justify-content: start;
  align-items: center;
  gap: 15px;
  padding: 0px 15px;
  color: ${(props) =>
    props.active ? defaultColors.primary["500"] : theme.colors.white};
  border-left: ${theme.sizes["1.5"]} solid
    ${(props) =>
      props.active ? defaultColors.secondary["500"] : "transparent"};
  background-color: ${(props) =>
    props.active && theme.colors.whiteAlpha["900"]};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${(props) => (props.active ? "bold" : "")};

  &:hover {
    background-color: ${theme.colors.whiteAlpha["800"]};
    color: ${defaultColors.primary["500"]};
    border-left-color: ${defaultColors.secondary["500"]};
    font-weight: bold;
  }

  &:active {
    background-color: ${theme.colors.whiteAlpha["900"]};
  }
`;

export { StyledMenuItem };
