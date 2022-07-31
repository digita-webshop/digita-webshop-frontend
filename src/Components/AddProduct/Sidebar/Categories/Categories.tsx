import {
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { categoriesList } from "../../../../Services/Utils/Data/data";
import { categoryCheckboxStyles } from "../../../../Styles/AddProduct";
interface Props {
  selectedCategories: string[];
  setSelectedCategories: Dispatch<SetStateAction<string[]>>;
}
function Categories({ selectedCategories, setSelectedCategories }: Props) {
  const handleToggle = (value: string) => () => {
    const currentIndex = selectedCategories.indexOf(value);
    const newChecked = [...selectedCategories];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setSelectedCategories(newChecked);
  };

  return (
    <>
      <Typography variant={"h6"}>Categories</Typography>
      <List>
        {categoriesList.map(({ id, name }) => {
          const labelId = `checkbox-list-label-${id}`;
          const isChecked = selectedCategories.indexOf(name) !== -1;

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
