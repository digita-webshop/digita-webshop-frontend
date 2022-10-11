import { Dispatch, SetStateAction } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import { Box } from "@mui/material";
import { EditorButton, textEditorStyles, TextEditorWrapper } from "./styles";
import "draft-js/dist/Draft.css";
interface Props {
  editorState: any;
  setEditorState: Dispatch<SetStateAction<EditorState>>;
}
function TextEditor({ editorState, setEditorState }: Props) {
  const handleToggleClick = (e: React.MouseEvent, inlineStyle: string) => {
    e.preventDefault();
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  const handleBlockClick = (e: React.MouseEvent, blockType: string) => {
    e.preventDefault();
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  return (
    <TextEditorWrapper>
      <Box sx={textEditorStyles}>
        <EditorButton onMouseDown={(e) => handleBlockClick(e, "header-one")}>H1</EditorButton>
        <EditorButton onMouseDown={(e) => handleBlockClick(e, "header-two")}>H2</EditorButton>
        <EditorButton onMouseDown={(e) => handleBlockClick(e, "header-three")}>H3</EditorButton>
        <EditorButton onMouseDown={(e) => handleBlockClick(e, "unstyled")}>Normal</EditorButton>
        <EditorButton onMouseDown={(e) => handleToggleClick(e, "BOLD")}>bold</EditorButton>
        <EditorButton onMouseDown={(e) => handleToggleClick(e, "UNDERLINE")}>underline</EditorButton>
        <EditorButton onMouseDown={(e) => handleToggleClick(e, "ITALIC")}>italic</EditorButton>
        <EditorButton onMouseDown={(e) => handleToggleClick(e, "STRIKETHROUGH")}>strikthrough</EditorButton>
        <EditorButton onMouseDown={(e) => handleBlockClick(e, "ordered-list-item")}>Ordered List</EditorButton>
        <EditorButton onMouseDown={(e) => handleBlockClick(e, "unordered-list-item")}>Unordered List</EditorButton>
      </Box>
      <Editor editorState={editorState} onChange={setEditorState} />
    </TextEditorWrapper>
  );
}

export default TextEditor;
