import { CloseRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

function ShopCart() {
  return (
    <Box
      sx={{
        position: "absolute",
        right: "10px",
        top: "72px ",
        padding: "15px",
        backgroundColor: "white",
        display: "none",
        cursor: "auto",
        "&:hover": {
          display: "inline-block",
        },
      }}
      className="shop-cart"
    >
      <List sx={{ maxHeight: "360px", overflow: "auto" }}>
        <ListItem disableGutters>
          <img
            src="https://demo-61.woovinapro.com/wp-content/uploads/2018/09/product-16-330x330.jpg"
            alt="product"
            width={75}
            height={75}
          />
          <ListItemText sx={{ marginLeft: "16px", marginRight: "40px" }}>
            <Typography variant="body2" color={"primary"}>
              Samsung Galaxy V21
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Typography variant="subtitle1" color={"secondary"}>
                1 x{" "}
              </Typography>
              <Typography variant="body2" color={"primary"}>
                $75.00{" "}
              </Typography>
            </Box>
          </ListItemText>
          <ListItemIcon>
            <Box>
              <CloseRounded
                sx={{
                  border: "1px solid black",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  padding: "3px",
                  "&:hover": {
                    border: "1px solid red",
                    color: "red",
                  },
                  cursor: "pointer",
                }}
              />
            </Box>
          </ListItemIcon>
        </ListItem>
        <Divider />
      </List>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "13px",
        }}
      >
        <Typography variant="subtitle2" color={"secondary"} fontWeight={400}>
          SUBTOTAL:
        </Typography>
        <Typography variant="subtitle2" color={"primary"}>
          $325:00
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          paddingY: "20px",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <Button
          variant="contained"
          fullWidth={true}
          color="error"
          sx={{
            "&:hover": { backgroundColor: "#333333" },
          }}
        >
          VIEW CARD
        </Button>
        <Button variant="contained" fullWidth={true}>
          CHECKOUT
        </Button>
      </Box>
    </Box>
  );
}

export default ShopCart;
