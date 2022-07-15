import { Box, FormControl, Grid } from "@mui/material";
import { useRef, useState } from "react";
import { fileInputStyles } from "../../../Styles/PanelArticle";
import {
  CardWrapper,
  PFormLabel,
  PTextField,
} from "../../../Styles/panelCommon";
import TextEditor from "../../TextEditor/TextEditor";

function ArticleForm() {
  const [uploadImageName, setUploadImageName] = useState("no chosen file");

  const inputFileRef = useRef<HTMLInputElement>(null);
  const clickInputHandler = () => {
    inputFileRef.current?.click();
  };
  const fileInputHandler = () => {
    setUploadImageName(inputFileRef.current!.files![0].name);
  };
  return (
    <CardWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <PFormLabel>title</PFormLabel>
            <PTextField placeholder="Type Here" />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <PFormLabel>writer</PFormLabel>
            <PTextField placeholder="Type Here" />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <PFormLabel>image</PFormLabel>
            <PTextField
              type={"file"}
              sx={{ display: "none" }}
              placeholder="Type Here"
              ref={inputFileRef}
              onChange={fileInputHandler}
            />
            <Box sx={fileInputStyles} onClick={clickInputHandler}>
              <Box
                sx={{
                  backgroundColor: "common.panelHoverGrey",
                  width: "32%",
                }}
              >
                Choose File
              </Box>
              <Box>{uploadImageName}</Box>
            </Box>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <PFormLabel sx={{ display: "block", ml: "5px", mb: "10px" }}>
            description
          </PFormLabel>
          <TextEditor />
        </Grid>
      </Grid>
    </CardWrapper>
  );
}

export default ArticleForm;
