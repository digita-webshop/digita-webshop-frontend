import { Box, List, ListItem, Typography } from "@mui/material";
import { categoriesList } from "../../../Services/Utils/Data/data";
import {
  FilterListItemText,
  FilterTitleWrapper,
} from "../../../Styles/ShopPage";

function CategoriesFilter() {
  return (
    <Box sx={{ padding: "20px", border: "1px solid #e9e9e9" }}>
      <FilterTitleWrapper className="underline">
        <Typography
          component={"h4"}
          variant="body1"
          color="primary"
          fontWeight={600}
        >
          CATEGORIES
        </Typography>
      </FilterTitleWrapper>
      <List>
        {categoriesList.map(({ id, name }) => (
          <ListItem
            key={id}
            sx={{
              position: "relative",
              paddingY: "4px",
            }}
          >
            <FilterListItemText>{name}</FilterListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default CategoriesFilter;
