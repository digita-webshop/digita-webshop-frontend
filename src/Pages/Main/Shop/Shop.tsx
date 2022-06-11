import {
  Grid,
  List,
  Box,
  Typography,
  ListItem,
  Container,
} from "@mui/material";
import { FilterTitleWrapper } from "../../../Styles/ShopPage/index";
function Shop() {
  return (
    <Container sx={{ marginY: "50px" }}>
      <Grid container columnSpacing={4}>
        <Grid item xs={3.5}>
          <Box sx={{ padding: "20px", border: "1px solid #e9e9e9" }}>
            <FilterTitleWrapper>
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
              <ListItem></ListItem>
            </List>
          </Box>
        </Grid>
        <Grid item xs={8.5}>
          ddd
        </Grid>
      </Grid>
    </Container>
  );
}

export default Shop;
