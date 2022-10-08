import { Box, Typography } from "@mui/material";
import { Item, ShopMenuButton } from "../../styles";

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
            src="https://res.cloudinary.com/dmgb7kvmn/image/upload/v1665234041/digita-images/static/azfqeqtpewfoilokcz7a.jpg"
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
            sx={{ fontSize: { md: "25px", lg: "35px" } }}
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
