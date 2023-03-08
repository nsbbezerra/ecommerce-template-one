import { defaultColors } from "@/styles/customTheme";
import { theme } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { EditorContent } from "@tiptap/react";

export const EditorTipTap = styled(EditorContent)`
  width: "100%";

  .ProseMirror {
    outline: none !important;
    padding: ${theme.space["3"]};
  }

  .ProseMirror h1 {
    font-weight: bold;
    font-size: ${theme.fontSizes["2xl"]};
  }

  .ProseMirror h2 {
    font-weight: bold;
    font-size: ${theme.fontSizes["xl"]};
  }

  .ProseMirror h3 {
    font-weight: bold;
    font-size: ${theme.fontSizes["lg"]};
  }

  .ProseMirror blockquote {
    border-left: 2px solid ${theme.colors.gray["400"]};
    padding: ${theme.space["2"]};
    font-style: italic;
    margin-top: ${theme.space["2"]};
    margin-bottom: ${theme.space["2"]};
    background-color: ${theme.colors.gray["100"]};
    display: block;
  }

  .ProseMirror ul ol {
    margin-left: ${theme.space["10"]};
  }
`;
