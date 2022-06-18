import { Box, Typography } from "@mui/material";
import { Item, ShopMenuButton } from "../../../../../Styles/Appbar";

function ShopMenuCard() {
  return (
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
            height: { md: "260px", lg: "290px" },
            img: {
              width: "100%",
              height: "100%",
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
            marginTop={1}
          >
            limited edition{" "}
          </Typography>
          <Typography
            variant="h4"
            fontWeight={500}
            color={"white"}
            textTransform={"capitalize"}
            sx={{ fontSize: { md: "32px", lg: "46px" } }}
          >
            best gaming pc 2022
          </Typography>
          <ShopMenuButton>Shop Now</ShopMenuButton>
        </Box>
      </Box>
    </Item>
  );
}

export default ShopMenuCard;
