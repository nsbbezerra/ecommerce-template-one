import { defaultColors } from "@/styles/customTheme";
import { theme } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { EditorContent } from "@tiptap/react";

export const EditorTipTap = styled(EditorContent)`
  width: "100%";

  .ProseMirror {
    outline: none !important;
    padding: ${theme.space["3"]};
    border-radius: ${theme.radii["md"]};
    border: 1px solid ${theme.colors.gray["200"]};
    transition: all 0.1s;

    &:focus {
      box-shadow: 0 0 0 2px ${defaultColors.primary["500"]};
    }
  }
`;
