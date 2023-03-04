import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { EditorTipTap } from "./dashboard/styles/styles";
import TiptapMenuBar from "./tiptap/MenuBar";

interface Props {
  onChange: (value: string) => void;
  value: string;
}

const Tiptap = ({ onChange, value }: Props) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    onBlur({ editor }) {
      onChange(editor.getHTML());
    },
  });

  return (
    <div>
      <TiptapMenuBar editor={editor} />
      <EditorTipTap
        editor={editor}
        theme="dark"
        placeholder="Digite aqui seu texto"
      />
    </div>
  );
};

export default Tiptap;
