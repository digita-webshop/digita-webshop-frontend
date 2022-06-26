import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import OrderTable from "./OrderTable/OrderTable";
import PaymentMethod from "./PaymentMethod/PaymentMethod";

const CheckoutInput = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: theme.palette.common.digitaGrey5,
    height: "40px",
    "& fieldset": {
      borderColor: "#bbb",
    },
    "&:hover fieldset": {
      borderColor: "#bbb",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#bbb",
      borderWidth: "2px",
    },
  },
}));
function Checkout() {
  return (
    <Box bgcolor={"white"}>
      <Container maxWidth={"lg"} sx={{ py: "50px" }}>
        <form>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Grid
                container
                rowSpacing={2}
                sx={{ padding: "25px", border: "2px solid #eaeaea" }}
              >
                <Grid item xs={12}>
                  <Box sx={{ borderBottom: "2px solid #eaeaea" }}>
                    <Typography
                      component={"h2"}
                      sx={{
                        color: "common.digitaBlack",
                        fontWeight: 500,
                        fontSize: "14px",
                        mb: "10px",
                      }}
                    >
                      BILLING DETAILS
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <FormLabel
                      color="primary"
                      sx={{
                        fontSize: "14px",
                        color: "common.digitaGrey",
                        display: "flex",
                      }}
                    >
                      Coupon Code
                      {/* <Typography
                        component={"span"}
                        sx={{ color: "#f03637", marginLeft: "2px" }}
                      >
                        *
                      </Typography> */}
                    </FormLabel>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        height: "40px",
                      }}
                    >
                      <CheckoutInput placeholder="" sx={{ width: "65%" }} />
                      <Button
                        variant="contained"
                        sx={{
                          height: "100%",
                          textTransform: "uppercase",
                          width: "32%",
                          borderRadius: "3px",
                        }}
                      >
                        Apply Coupon
                      </Button>
                    </Box>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <FormLabel
                      color="primary"
                      sx={{
                        fontSize: "14px",
                        color: "common.digitaGrey",
                        display: "flex",
                      }}
                    >
                      Town / City
                      <Typography
                        component={"span"}
                        sx={{ color: "#f03637", marginLeft: "2px" }}
                      >
                        *
                      </Typography>
                    </FormLabel>
                    <CheckoutInput placeholder="" />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid
                container
                rowSpacing={2}
                sx={{ padding: "25px", border: "2px solid #eaeaea" }}
              >
                <Grid item xs={12}>
                  <Box sx={{ borderBottom: "2px solid #eaeaea" }}>
                    <Typography
                      component={"h2"}
                      sx={{
                        color: "common.digitaBlack",
                        fontWeight: 500,
                        fontSize: "14px",
                        mb: "10px",
                      }}
                    >
                      YOUR ORDER
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <OrderTable />
                </Grid>
                <Grid item xs={12}>
                  <PaymentMethod />
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    component={"p"}
                    sx={{
                      color: "common.digitaGrey3",
                      fontSize: "14px",
                      textAlign: "justify",
                    }}
                  >
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our privacy policy.{" "}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "uppercase",
                      width: "100%",
                      height: "55px",
                      fontSize: "15px",
                      fontWeight: 600,
                    }}
                  >
                    proceed to paypal
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
}

export default Checkout;
