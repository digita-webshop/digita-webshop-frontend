import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

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
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Grid
                container
                spacing={2}
                sx={{ padding: "30px", border: "2px solid #eaeaea" }}
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
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <FormLabel
                      color="primary"
                      sx={{
                        fontSize: "14px",
                        color: "common.digitaGrey",
                        display: "flex",
                      }}
                    >
                      Street address
                      <Typography
                        component={"span"}
                        sx={{ color: "#f03637", marginLeft: "2px" }}
                      >
                        *
                      </Typography>
                    </FormLabel>
                    <CheckoutInput placeholder="House number and street name" />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} md={6}></Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
}

export default Checkout;
