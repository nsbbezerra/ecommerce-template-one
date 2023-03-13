import { defaultColors } from "@/styles/customTheme";
import { Box, Button, Flex, MenuButton, theme } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";

export const TableContainer = styled(Box)`
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
`;

export const BoxContainer = styled(Box)``;

export const HeaderLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${theme.space["2"]};
  color: ${theme.colors.gray["800"]};
  .header-link-icon {
    margin-top: -4px;
  }
  font-size: ${theme.fontSizes["md"]};

  transition: all 0.2s;

  &:hover {
    color: ${defaultColors.primary["500"]};
  }
`;

export const HeaderItem = styled(Button)`
  background: transparent !important;
  padding: 0 !important;
  font-weight: normal;
  gap: ${theme.space["1"]};
  color: ${theme.colors.gray["800"]};
  .header-link-icon {
    margin-top: -4px;
  }
  font-size: ${theme.fontSizes["md"]};

  transition: all 0.2s;

  &:hover {
    color: ${defaultColors.primary["500"]};
  }
`;

export const CategoriesButton = styled(Flex)`
  height: ${theme.space["14"]};
  align-items: center;
  gap: ${theme.space["3"]};
  width: fit-content;
  padding: 0 ${theme.space["10"]};
  color: white;
  font-size: ${theme.fontSizes["md"]};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.1s;
  user-select: none;

  &:hover {
    background: ${defaultColors.secondary["400"]};
  }
  &:active {
    background: ${defaultColors.secondary["500"]};
  }
`;

export const HeaderMenuItems = styled(Link)`
  display: flex;
  align-items: center;
  height: ${theme.space["14"]};
  align-items: center;
  gap: ${theme.space["2"]};
  width: fit-content;
  padding: 0 ${theme.space["5"]};
  color: white;
  font-size: ${theme.fontSizes["sm"]};
  cursor: pointer;
  transition: all 0.1s;
  user-select: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const CardImageContainer = styled(Box)`
  &:hover {
    .cards-actions-button {
      opacity: 1;
    }
  }
`;

export const CardButtons = styled(Flex)`
  position: absolute;
  gap: ${theme.space["2"]};
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${theme.colors.whiteAlpha["900"]};
  justify-content: center;
  align-items: center;
  height: min-content;
  padding: ${theme.space["2"]};
  transition: all 0.2s;
  opacity: 0;
`;
