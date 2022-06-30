import {
  Box,
  Button,
  Checkbox,
  Collapse,
  Container,
  Divider,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import ShippingDatePicker from "./ShippingDatePicker/ShippingDatePicker";
import OrderTable from "./OrderTable/OrderTable";
import PaymentMethod from "./PaymentMethod/PaymentMethod";
import CurrentAddress from "./CurrentAddress/CurrentAddress";
import { StyledFormControlLabel } from "../../Styles/Checkout";
import CurrentAddressForm from "./CurrentAddressForm/CurrentAddressForm";
import NewAddressForm from "./NewAddressForm/NewAddressForm";
import Coupon from "./Coupon/Coupon";
import OrderNotes from "./OrderNotes/OrderNotes";

function Checkout() {
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(false);
  const [displayNewAddressForm, setDisplayNewAddressForm] = useState(false);
  const [displayCoupon, setDisplayCoupon] = useState(false);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
  };
  const newAddressFormToggler = (event: ChangeEvent<HTMLInputElement>) => {
    setDisplayNewAddressForm(event.target.checked);
  };
  const couponToggler = (event: ChangeEvent<HTMLInputElement>) => {
    setDisplayCoupon(event.target.checked);
  };
  return (
    <Box bgcolor={"white"}>
      <Container maxWidth={"lg"} sx={{ py: "50px" }}>
        <form onSubmit={submitHandler}>
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
                  <CurrentAddress
                    setDisplayCurrentAddress={setDisplayCurrentAddress}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Collapse in={displayCurrentAddress}>
                    <>
                      <CurrentAddressForm />
                    </>
                  </Collapse>
                </Grid>
                <Grid item xs={12}>
                  <FormGroup>
                    <StyledFormControlLabel
                      control={<Checkbox onChange={newAddressFormToggler} />}
                      label="SHIP TO A DIFFERENT ADDRESS"
                    />
                  </FormGroup>
                  <Divider sx={{ width: "97%", mt: "4px", mb: "20px" }} />
                  <Collapse in={displayNewAddressForm}>
                    <>
                      <NewAddressForm />
                    </>
                  </Collapse>
                </Grid>

                <Grid item xs={12}>
                  <ShippingDatePicker />
                </Grid>
                <Grid item xs={12}>
                  <FormGroup>
                    <StyledFormControlLabel
                      control={<Checkbox onChange={couponToggler} />}
                      label="HAVE A COUPON?"
                    />
                  </FormGroup>
                  <Divider sx={{ width: "97%", mt: "4px", mb: "20px" }} />
                  <Collapse in={displayCoupon}>
                    <>
                      <Coupon />
                    </>
                  </Collapse>
                </Grid>
                <Grid item xs={12}>
                  <OrderNotes />
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
