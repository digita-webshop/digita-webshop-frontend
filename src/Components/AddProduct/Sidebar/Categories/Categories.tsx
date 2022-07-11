import {
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { categoriesList } from "../../../../Services/Utils/Data/data";
import { categoryCheckboxStyles } from "../../../../Styles/AddProduct";

function Categories() {
  const [checked, setChecked] = useState([""]);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <>
      <Typography variant={"h6"}>Categories</Typography>
      <List>
        {categoriesList.map(({ id, name }) => {
          const labelId = `checkbox-list-label-${id}`;
          const isChecked = checked.indexOf(name) !== -1;

          return (
            <ListItem
              key={id}
              sx={{ padding: "2px 16px 2px 12px", cursor: "context-menu" }}
              onClick={handleToggle(name)}
            >
              <ListItemIcon sx={{ minWidth: 0 }}>
                <Checkbox
                  sx={categoryCheckboxStyles}
                  edge="start"
                  checked={isChecked}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText
                id={labelId}
                primary={
                  <Typography
                    component={"span"}
                    sx={{ color: "common.digitaBlack" }}
                  >
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
