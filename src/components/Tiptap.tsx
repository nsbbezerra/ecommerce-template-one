import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { EditorTipTap } from "./dashboard/styles/styles";
import TiptapMenuBar from "./tiptap/MenuBar";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p></p>",
    onUpdate({ editor }) {
      console.log(editor.getHTML());
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
