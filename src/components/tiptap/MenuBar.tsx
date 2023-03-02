import { defaultColors } from "@/styles/customTheme";
import { Wrap } from "@chakra-ui/react";
import { Editor } from "@tiptap/core";
import { Bold } from "lucide-react";
import { EditorBarButton } from "./styles";

interface Props {
  editor: Editor | null;
}

export default function TiptapMenuBar({ editor }: Props) {
  if (!editor) {
    return null;
  }

  return (
    <Wrap borderWidth={"1px"} rounded="md" p={1} mb={2}>
      <EditorBarButton
        aria-label="Bold"
        icon={<Bold />}
        colorScheme={defaultColors.primaryName}
        variant="ghost"
        size={"sm"}
        disabled={editor.can().chain().focus().toggleBold().run()}
        onClick={() => editor.chain().focus().toggleBold().run()}
        active={editor.isActive("bold")}
      />
    </Wrap>
  );
}
