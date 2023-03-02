import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { EditorTipTap } from "./dashboard/styles/styles";
import TiptapMenuBar from "./tiptap/MenuBar";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
  });

  return (
    <div>
      <TiptapMenuBar editor={editor} />
      <EditorTipTap editor={editor} theme="dark" />
    </div>
  );
};

export default Tiptap;
