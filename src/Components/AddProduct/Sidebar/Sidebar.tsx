import { Close } from "@mui/icons-material";
import { Box, Divider, FormControl, Grid, Typography } from "@mui/material";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import {
  CardWrapper,
  PFormLabel,
  PTextField,
} from "../../../Styles/panelCommon";
import { v4 as uuidv4 } from "uuid";
import {
  tagContainerStyles,
  tagIconStyles,
  tagStyles,
} from "../../../Styles/AddProduct";
import Categories from "./Categories/Categories";
interface ITag {
  id: string;
  name: string;
}
function Sidebar() {
  const [tags, setTags] = useState<ITag[]>([]);
  const [enteredTag, setEnteredTag] = useState("");

  const enteredTagHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredTag(event.target.value);
  };

  const addTagHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      setTags((prevTagsState) => {
        const prevTags = [...prevTagsState];
        const tag = { id: uuidv4(), name: enteredTag };
        prevTags.push(tag);
        return prevTags;
      });
      setEnteredTag("");
    }
  };

  const tagDeleteHandler = (id: string) => () => {
    setTags((prevTagsState) => {
      const prevTags = [...prevTagsState];
      const newTags = prevTags.filter((item) => item.id !== id);
      return newTags;
    });
  };

  return (
    <CardWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <PFormLabel>price</PFormLabel>
            <PTextField placeholder="Type Here" />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <PFormLabel>tags</PFormLabel>
            <PTextField
              placeholder="Type Here"
              onKeyDown={addTagHandler}
              value={enteredTag}
              onChange={enteredTagHandler}
            />
          </FormControl>
          <Box sx={tagContainerStyles}>
            {tags.length > 0 &&
              tags.map(({ id, name }) => (
                <Box key={id} sx={tagStyles} onClick={tagDeleteHandler(id)}>
                  <Typography component={"span"}>{name}</Typography>
                  <Close sx={tagIconStyles} />
                </Box>
              ))}
          </Box>
          <Divider sx={{ marginTop: "20px" }} />
        </Grid>
        <Grid item xs={12}>
          <Categories />
        </Grid>
      </Grid>
    </CardWrapper>
  );
}

export default Sidebar;
