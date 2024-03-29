import { Dispatch, SetStateAction } from "react";
import { Checkbox, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { categoryCheckboxStyles } from "../../styles";
import { productCategories } from "components/Shop/data";

interface Props {
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
}
function Categories({ selectedCategory, setSelectedCategory }: Props) {
  return (
    <>
      <Typography variant={"h6"}>Categories</Typography>
      <List>
        {productCategories.map(({ id, name }) => {
          const labelId = `checkbox-list-label-${id}`;
          return (
            <ListItem
              key={id}
              sx={{ padding: "2px 16px 2px 12px", cursor: "context-menu" }}
              onClick={() => setSelectedCategory(name)}
            >
              <ListItemIcon sx={{ minWidth: 0 }}>
                <Checkbox
                  sx={categoryCheckboxStyles}
                  edge="start"
                  checked={name === selectedCategory}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText
                id={labelId}
                primary={
                  <Typography component={"span"} sx={{ color: "common.digitaBlack" }}>
                    {name}
                  </Typography>
                }
              />
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

export default Categories;
