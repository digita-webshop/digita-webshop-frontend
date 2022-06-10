import { Button, Grid, Typography } from "@mui/material";
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
          <Grid xs={6} paddingLeft={1}>
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
                    fontSize: { md: "15px", lg: "16px" },
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
            paddingLeft={1}
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
                      fontSize: { md: "15px", lg: "16px" },
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
                      fontSize: { md: "15px", lg: "16px" },
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
          sx={{ marginLeft: "10%", marginBottom: "15px" }}
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
          <Box
            sx={{
              position: "relative",
              "&:hover": {
                "& .bg-box": {
                  backgroundColor: "rgba(0,0,0,0.2)",
                },
                "& .pc-img": {
                  transform: "scale(1.12)",
                },
              },
            }}
          >
            <Box
              sx={{
                height: "250px",
                img: {
                  width: "100%",
                  height: "250px",
                  transition: "all 800ms ease-in-out",
                },
                overflow: "hidden",
              }}
            >
              <img
                src="https://demo-61.woovinapro.com/wp-content/uploads/2021/01/image-mega.jpg"
                alt="gaming-pc"
                className="pc-img"
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "0",
                right: "0",
                left: "0",
                bottom: "0",
                padding: "20px ",
                textAlign: "left",
                transition: "all 800ms ease-in",
              }}
              className="bg-box"
            >
              <Typography
                variant="body1"
                color={"white"}
                textTransform={"uppercase"}
              >
                limited edition{" "}
              </Typography>
              <Typography
                variant="h4"
                fontWeight={500}
                color={"white"}
                textTransform={"capitalize"}
              >
                best gaming pc 2022
              </Typography>
              <Button
                sx={{
                  backgroundColor: "transparent",
                  border: "1px solid white",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#f03637",
                  },
                  transition: "all 200ms ease-in",
                  width: "100px",
                  marginTop: "25px",
                }}
              >
                Shop Now
              </Button>
            </Box>
          </Box>
        </Item>
      </Grid>
    </Grid>
  );
}

export default ShopMenu;
