import { Box, FormControl, Grid } from "@mui/material";
import { useRef, Fragment, Dispatch, SetStateAction, ChangeEvent } from "react";
import { fileInputStyles } from "../../../Styles/PanelArticle";
import { PFormLabel, PTextField } from "../../../Styles/panelCommon";
interface Props {
  enteredTitle: string;
  setEnteredTitle: Dispatch<SetStateAction<string>>;
  enteredWriter: string;
  setEnteredWriter: Dispatch<SetStateAction<string>>;
  addedImage: any;
  setAddedImage: Dispatch<SetStateAction<any>>;
}
function ArticleForm({
  enteredTitle,
  setEnteredTitle,
  enteredWriter,
  setEnteredWriter,
  addedImage,
  setAddedImage,
}: Props) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const clickInputHandler = () => {
    inputFileRef.current?.click();
  };
  const fileInputHandler = () => {
    console.log(inputFileRef.current!.files![0]);

    setAddedImage(JSON.stringify(inputFileRef.current!.files![0]));
  };
  return (
    <Fragment>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <PFormLabel>title</PFormLabel>
          <PTextField
            placeholder="Type Here"
            value={enteredTitle}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEnteredTitle(e.target.value)
            }
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <PFormLabel>writer</PFormLabel>
          <PTextField
            placeholder="Type Here"
            value={enteredWriter}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEnteredWriter(e.target.value)
            }
          />
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
            <Box>
              {addedImage === "no chosen file"
                ? addedImage
                : JSON.parse(addedImage)?.name}
            </Box>
          </Box>
        </FormControl>
      </Grid>
    </Fragment>
  );
}

export default ArticleForm;
