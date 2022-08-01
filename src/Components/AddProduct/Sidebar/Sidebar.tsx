import { Close } from "@mui/icons-material";
import { Box, Divider, FormControl, Grid, Typography } from "@mui/material";
import {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useState,
} from "react";
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
import { ITag } from "../AddProduct";

interface Props {
  enteredPrice: number | string;
  setEnteredPrice: Dispatch<SetStateAction<number | string>>;
  enteredQuantity: number | string;
  setEnteredQuantity: Dispatch<SetStateAction<number | string>>;
  tags: ITag[];
  setTags: Dispatch<SetStateAction<ITag[]>>;
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
}

function Sidebar({
  enteredPrice,
  setEnteredPrice,
  enteredQuantity,
  setEnteredQuantity,
  tags,
  setTags,
  selectedCategory,
  setSelectedCategory,
}: Props) {
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
            <PTextField
              type={"number"}
              placeholder="Type Here"
              value={enteredPrice}
              onChange={(e) => setEnteredPrice(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <PFormLabel>quantity</PFormLabel>
            <PTextField
              type={"number"}
              placeholder="Type Here"
              value={enteredQuantity}
              onChange={(e) => setEnteredQuantity(e.target.value)}
            />
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
          <Categories
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </Grid>
      </Grid>
    </CardWrapper>
  );
}

export default Sidebar;
