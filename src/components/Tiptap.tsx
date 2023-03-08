import { Editor, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { memo, useEffect } from "react";
import { EditorTipTap } from "./dashboard/styles/styles";
import TiptapMenuBar from "./tiptap/MenuBar";

interface Props {
  editor: Editor | null;
}

const Tiptap = ({ editor }: Props) => {
  return (
    <div>
      <EditorTipTap
        editor={editor}
        theme="dark"
        placeholder="Digite aqui seu texto"
      />
    </div>
  );
};

export default memo(Tiptap);
