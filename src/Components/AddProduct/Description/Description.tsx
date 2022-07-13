import { useState } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import { CardWrapper, PFormLabel } from "../../../Styles/panelCommon";
import "draft-js/dist/Draft.css";
import { Box } from "@mui/material";
import {
  TextEditorWrapper,
  EditorButton,
  textEditorStyles,
} from "../../../Styles/AddProduct";

function Description() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleToggleClick = (e: React.MouseEvent, inlineStyle: string) => {
    e.preventDefault();
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  const handleBlockClick = (e: React.MouseEvent, blockType: string) => {
    e.preventDefault();
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };
  console.log(editorState.getCurrentContent().getPlainText());
  return (
    <CardWrapper mt={4}>
      <PFormLabel sx={{ display: "block", ml: "5px", mb: "10px" }}>
        description
      </PFormLabel>
      <TextEditorWrapper>
        <Box sx={textEditorStyles}>
          <EditorButton onMouseDown={(e) => handleBlockClick(e, "header-one")}>
            H1
          </EditorButton>
          <EditorButton onMouseDown={(e) => handleBlockClick(e, "header-two")}>
            H2
          </EditorButton>
          <EditorButton
            onMouseDown={(e) => handleBlockClick(e, "header-three")}
          >
            H3
          </EditorButton>
          <EditorButton onMouseDown={(e) => handleBlockClick(e, "unstyled")}>
            Normal
          </EditorButton>
          <EditorButton onMouseDown={(e) => handleToggleClick(e, "BOLD")}>
            bold
          </EditorButton>
          <EditorButton onMouseDown={(e) => handleToggleClick(e, "UNDERLINE")}>
            underline
          </EditorButton>
          <EditorButton onMouseDown={(e) => handleToggleClick(e, "ITALIC")}>
            italic
          </EditorButton>
          <EditorButton
            onMouseDown={(e) => handleToggleClick(e, "STRIKETHROUGH")}
          >
            strikthrough
          </EditorButton>
          <EditorButton
            onMouseDown={(e) => handleBlockClick(e, "ordered-list-item")}
          >
            Ordered List
          </EditorButton>
          <EditorButton
            onMouseDown={(e) => handleBlockClick(e, "unordered-list-item")}
          >
            Unordered List
          </EditorButton>
        </Box>
        <Editor editorState={editorState} onChange={setEditorState} />
      </TextEditorWrapper>
    </CardWrapper>
  );
}

export default Description;
