import { defaultColors } from "@/styles/customTheme";
import { Box, Button, Tooltip, Wrap } from "@chakra-ui/react";
import { Editor } from "@tiptap/core";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Redo2,
  Strikethrough,
  Undo2,
} from "lucide-react";
import { EditorBarButton, EditorDefaultButton } from "./styles";

interface Props {
  editor: Editor | null;
}

export default function TiptapMenuBar({ editor }: Props) {
  if (!editor) {
    return null;
  }

  return (
    <Wrap pt={2} pb={4} mb={2} align="center" borderBottomWidth={"1px"}>
      <Tooltip label="Negrito" hasArrow>
        <EditorBarButton
          aria-label="Bold"
          icon={<Bold size={18} />}
          colorScheme={defaultColors.primaryName}
          variant="outline"
          size={"sm"}
          disabled={editor.can().chain().focus().toggleBold().run()}
          onClick={() => editor.chain().focus().toggleBold().run()}
          active={editor.isActive("bold")}
        />
      </Tooltip>
      <Tooltip label="Itálico" hasArrow>
        <EditorBarButton
          aria-label="Bold"
          icon={<Italic size={18} />}
          colorScheme={defaultColors.primaryName}
          variant="outline"
          size={"sm"}
          disabled={editor.can().chain().focus().toggleItalic().run()}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          active={editor.isActive("italic")}
        />
      </Tooltip>
      <Tooltip hasArrow label="Tracejado">
        <EditorBarButton
          aria-label="Bold"
          icon={<Strikethrough size={18} />}
          colorScheme={defaultColors.primaryName}
          variant="outline"
          size={"sm"}
          disabled={editor.can().chain().focus().toggleStrike().run()}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          active={editor.isActive("strike")}
        />
      </Tooltip>
      <Box h={7} borderRightWidth="1px" mr={1} w={0} />
      <EditorDefaultButton
        colorScheme={defaultColors.primaryName}
        variant="outline"
        size={"sm"}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        active={editor.isActive("heading", { level: 1 })}
      >
        Título 1
      </EditorDefaultButton>
      <EditorDefaultButton
        colorScheme={defaultColors.primaryName}
        variant="outline"
        size={"sm"}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        active={editor.isActive("heading", { level: 2 })}
      >
        Título 2
      </EditorDefaultButton>
      <EditorDefaultButton
        colorScheme={defaultColors.primaryName}
        variant="outline"
        size={"sm"}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        active={editor.isActive("heading", { level: 3 })}
      >
        Título 3
      </EditorDefaultButton>
      <EditorDefaultButton
        colorScheme={defaultColors.primaryName}
        variant="outline"
        size={"sm"}
        onClick={() => editor.chain().focus().setParagraph().run()}
        active={editor.isActive("paragraph")}
      >
        Parágrafo
      </EditorDefaultButton>
      <EditorDefaultButton
        colorScheme={defaultColors.primaryName}
        variant="outline"
        size={"sm"}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        active={editor.isActive("blockquote")}
      >
        Citação
      </EditorDefaultButton>
      <Box h={7} borderRightWidth="1px" mr={1} w={0} />
      <Tooltip hasArrow label="Lista">
        <EditorBarButton
          aria-label="Bold"
          icon={<List size={18} />}
          colorScheme={defaultColors.primaryName}
          variant="outline"
          size={"sm"}
          disabled={editor.can().chain().focus().toggleBulletList().run()}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          active={editor.isActive("bulletList")}
        />
      </Tooltip>
      <Tooltip hasArrow label="Lista Ordenada">
        <EditorBarButton
          aria-label="Bold"
          icon={<ListOrdered size={18} />}
          colorScheme={defaultColors.primaryName}
          variant="outline"
          size={"sm"}
          disabled={editor.can().chain().focus().toggleOrderedList().run()}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          active={editor.isActive("orderedList")}
        />
      </Tooltip>
      <Box h={7} borderRightWidth="1px" mr={1} w={0} />
      <Tooltip hasArrow label="Desfazer">
        <EditorBarButton
          aria-label="Bold"
          icon={<Undo2 size={18} />}
          colorScheme={defaultColors.primaryName}
          variant="outline"
          size={"sm"}
          disabled={editor.can().chain().focus().undo().run()}
          onClick={() => editor.chain().focus().undo().run()}
        />
      </Tooltip>
      <Tooltip hasArrow label="Refazer">
        <EditorBarButton
          aria-label="Bold"
          icon={<Redo2 size={18} />}
          colorScheme={defaultColors.primaryName}
          variant="outline"
          size={"sm"}
          disabled={editor.can().chain().focus().redo().run()}
          onClick={() => editor.chain().focus().redo().run()}
        />
      </Tooltip>
    </Wrap>
  );
}
