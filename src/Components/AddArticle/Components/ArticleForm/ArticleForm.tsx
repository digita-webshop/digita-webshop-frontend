import {
  useRef,
  Fragment,
  Dispatch,
  useState,
  SetStateAction,
  ChangeEvent,
} from "react";
import {
  Box,
  FormControl,
  Grid,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { errorMessage } from "@/utils/toastMessages";
import { fileInputStyles } from "../../styles";
import { PFormControl, PFormLabel, PTextField } from "@/styles/panel";
import { blogCategories } from "@/components/PanelProducts/Components/GridHeader/data";
interface Props {
  enteredTitle: string;
  setEnteredTitle: Dispatch<SetStateAction<string>>;
  enteredWriter: string;
  setEnteredWriter: Dispatch<SetStateAction<string>>;
  addedImage: any;
  setAddedImage: Dispatch<SetStateAction<any>>;
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
}
function ArticleForm({
  enteredTitle,
  setEnteredTitle,
  enteredWriter,
  setEnteredWriter,
  addedImage,
  setAddedImage,
  selectedCategory,
  setSelectedCategory,
}: Props) {
  const [imageName, setImageName] = useState("");
  const inputFileRef = useRef<HTMLInputElement>(null);

  const clickInputHandler = () => {
    inputFileRef.current?.click();
  };
  const selectedBrandHandler = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value);
  };
  const fileInputHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    formData.append("file", event.target?.files![0]);
    formData.append("upload_preset", "digita");

    try {
      const response = await fetch(
        " https://api.cloudinary.com/v1_1/dmgb7kvmn/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      setAddedImage(data?.url);
      setImageName(data?.original_filename);
    } catch (err) {
      errorMessage("image upload failed");
      console.log(err);
    }
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
        <PFormControl size="small">
          <PFormLabel>category</PFormLabel>
          <Select
            variant="outlined"
            displayEmpty
            value={selectedCategory}
            onChange={selectedBrandHandler}
          >
            {blogCategories.map(({ id, name }) => (
              <MenuItem key={id} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </PFormControl>
      </Grid>
      <Grid item xs={12}>
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
                overflow: "hidden",
              }}
            >
              Choose File
            </Box>
            <Box>{addedImage ? imageName : "no chosen file"}</Box>
          </Box>
        </FormControl>
      </Grid>
    </Fragment>
  );
}

export default ArticleForm;
