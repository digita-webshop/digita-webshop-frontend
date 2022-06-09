import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  shopMenuItems,
  shopMenuCategories,
} from "../../../Services/Utils/Data/data";
import { Item } from "../../../Styles/Appbar";

function ShopMenu() {
  return (
    <Grid container>
      <Grid item xs={4} sx={{ borderRight: "1px solid #dedede" }}>
        <Grid container>
          <Grid xs={6}>
            <Typography
              textTransform={"uppercase"}
              color="primary"
              fontWeight={600}
            >
              new arrivals
            </Typography>
            <Box marginTop={2}>
              {shopMenuItems.map((item) => (
                <Typography
                  key={item.id}
                  color="secondary"
                  textTransform={"capitalize"}
                  fontWeight={400}
                  sx={{
                    "&:hover": { color: "#f03637" },
                    cursor: "pointer",
                    marginBottom: "4px",
                    transition: "all 150ms ease-in",
                  }}
                >
                  {item.name}
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid
            xs={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                textTransform={"uppercase"}
                color="primary"
                fontWeight={600}
              >
                weekly trend
              </Typography>
              <Box marginTop={2}>
                {shopMenuItems.slice(6, 9).map((item) => (
                  <Typography
                    key={item.id}
                    color="secondary"
                    textTransform={"capitalize"}
                    fontWeight={400}
                    sx={{
                      "&:hover": { color: "#f03637" },
                      cursor: "pointer",
                      marginBottom: "4px",
                      transition: "all 150ms ease-in",
                    }}
                  >
                    {item.name}
                  </Typography>
                ))}
              </Box>
            </Box>
            <Box>
              <Typography
                textTransform={"uppercase"}
                color="primary"
                fontWeight={600}
              >
                weekly trend
              </Typography>
              <Box marginTop={2}>
                {shopMenuItems.slice(6, 9).map((item) => (
                  <Typography
                    key={item.id}
                    color="secondary"
                    textTransform={"capitalize"}
                    fontWeight={400}
                    sx={{
                      "&:hover": { color: "#f03637" },
                      cursor: "pointer",
                      marginBottom: "4px",
                      transition: "all 150ms ease-in",
                    }}
                  >
                    {item.name}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4} sx={{ borderRight: "1px solid #dedede" }}>
        <Typography
          textTransform={"uppercase"}
          color="primary"
          fontWeight={600}
          sx={{ marginLeft: "20px", marginBottom: "15px" }}
        >
          feature by category
        </Typography>
        <Grid container>
          {shopMenuCategories.map((item) => (
            <Grid xs={4} marginBottom={1}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  img: { width: "80px" },
                  cursor: "pointer",
                  marginBottom: "5px",
                }}
              >
                <img src={`${item.img}`} alt="category-img" />
              </Box>
              <Typography
                key={item.id}
                variant="subtitle1"
                color="secondary"
                textTransform={"capitalize"}
                fontWeight={400}
                sx={{
                  "&:hover": { color: "#f03637" },
                  cursor: "pointer",
                  marginBottom: "4px",
                  transition: "all 150ms ease-in",
                  textAlign: "center",
                  width: "70%",
                  margin: "auto",
                  lineHeight: "1.2",
                }}
              >
                {item.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <Box></Box>
        </Item>
      </Grid>
    </Grid>
  );
}

export default ShopMenu;
