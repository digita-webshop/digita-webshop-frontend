import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Box, Button, Container, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { Link, Navigate } from "react-router-dom";
import { useAppSelector } from "redux/store";

function OrderConfirm() {
  const { role } = useAppSelector((state) => state.reducer.auth);

  if (!role) {
    return <Navigate to="/" replace />;
  }
  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "75vh", padding: { xs: "0" } }}
    >
      <Helmet>
        <title>Digita | Order Confirmed.</title>
      </Helmet>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "white",
          borderRadius: "15px",
          padding: { xs: "20px" },
          height: { xs: "100%", sm: "unset" },
        }}
      >
        <Box textAlign="center">
          <CheckCircleRoundedIcon sx={{ fontSize: 110, fontWeight: 100, color: "#f03637", padding: 2 }} />
          <Typography variant="h4" fontWeight={500}>
            Order Confirmed.
          </Typography>
        </Box>
        <Typography sx={{ textAlign: "center", width: { xs: "80%", sm: "60%" }, marginTop: "20px" }}>
          Your order is confirmed. You will receive an order confirmation email shortly with expected delivery date for
          your items.
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            margin: "0.5rem 0",
            marginTop: "60px",
            flexDirection: { xs: "column", sm: "row" },
            width: { xs: "100%", sm: "unset" },
          }}
        >
          <Button
            variant="contained"
            sx={{
              padding: "0.8rem 2.2rem",
              background: "#f03637",
              "&:hover": { background: "#333" },
            }}
            component={Link}
            to="/shop"
          >
            Continue Shopping
          </Button>
          <Button
            component={Link}
            to={`/${role === "admin" ? "panel" : "user"}/orders`}
            variant="contained"
            sx={{ padding: "0.8rem 2.2rem" }}
          >
            View Order
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default OrderConfirm;
