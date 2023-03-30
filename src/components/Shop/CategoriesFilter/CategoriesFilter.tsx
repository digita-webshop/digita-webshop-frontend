import { Box, List, ListItem, Typography } from "@mui/material";
import { productCategories } from "../data";
import { FilterListItemText, FilterTitleWrapper } from "../styles";

interface Props {
  addQueryParams: (filter: string, name: string) => () => void;
  categoryQueryParams: string | null;
}

function CategoriesFilter({ addQueryParams, categoryQueryParams }: Props) {
  const selectedCategories = categoryQueryParams?.split("/");
  return (
    <Box sx={{ padding: "20px", border: "1px solid #e9e9e9" }}>
      <FilterTitleWrapper className="underline">
        <Typography component={"h4"} variant="body1" color="primary" fontWeight={600}>
          CATEGORIES
        </Typography>
      </FilterTitleWrapper>
      <List>
        {productCategories.map(({ id, name }) => {
          let selected = categoryQueryParams ? selectedCategories?.indexOf(name) === -1 : true;

          return (
            <ListItem
              key={id}
              sx={{
                position: "relative",
                paddingY: "4px",
              }}
              onClick={addQueryParams("category", name)}
            >
              <FilterListItemText
                sx={{
                  color: selected ? "" : "#f03637",
                }}
              >
                {name}
              </FilterListItemText>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

export default CategoriesFilter;
