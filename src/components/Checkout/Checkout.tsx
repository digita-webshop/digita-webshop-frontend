import { useRef, ChangeEvent, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Collapse,
  Container,
  Divider,
  FormGroup,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import ShippingDatePicker from "./Components/ShippingDatePicker/ShippingDatePicker";
import OrderTable from "./Components/OrderTable/OrderTable";
import PaymentMethod from "./Components/PaymentMethod/PaymentMethod";
import CurrentAddress from "./Components/CurrentAddress/CurrentAddress";
import {
  addressModalWrapper,
  addressTitleStyles,
  checkoutProceedBtn,
  checkoutTitleWrapper,
  StyledFormControlLabel,
} from "./styles";

import Coupon from "./Components/Coupon/Coupon";
import OrderNotes from "./Components/OrderNotes/OrderNotes";
import AddressForm from "./Components/AddressForm/AddressForm";
import { IAddress } from "types/user";
import { useAppSelector } from "redux/store";
import { setCredentials } from "redux/auth/authSlice";
import { errorMessage, successMessage } from "utils/toastMessages";
import { useDispatch } from "react-redux";
import { useUpdateUserMutation } from "redux/user/userApi";
import Address from "../Settings/Components/Addresses/Address/Address";
import { cartModal } from "components/Home/Components/Products/styles";
import { Add, Close } from "@mui/icons-material";
import { useGetAllCartItemQuery } from "redux/cart/cartApi";
import { getSubtotal } from "utils/getSubtotal";

function Checkout() {
  const { user } = useAppSelector((state) => state.reducer.auth);

  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(false);
  const [displayAddresses, setDisplayAddresses] = useState(false);
  const [displayCoupon, setDisplayCoupon] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [couponValue, setCouponValue] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("cash");
  const [currentAddress, setCurrentAddress] = useState<IAddress | null>(
    user?.addresses[0] ?? null
  );

  const notesRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const { data: cartData, isLoading, isError } = useGetAllCartItemQuery();
  const cart = cartData?.data;

  const subtotal = getSubtotal(cart?.products!);

  const [updateUser] = useUpdateUserMutation();

  const displayAddressesToggler = () => {
    if (!currentAddress || user?.addresses.length === 1) return;

    setDisplayAddresses(true);
  };
  const couponToggler = (event: ChangeEvent<HTMLInputElement>) => {
    setDisplayCoupon(event.target.checked);
  };

  const addAddress = async (address: IAddress, mode: string) => {
    let addressArr = [...(user?.addresses ?? [])];
    if (mode === "edit") {
      const index = addressArr.findIndex((ads) => ads?._id === address._id);
      addressArr[index] = address;
    } else {
      addressArr.push(address);
    }
    try {
      await updateUser({
        id: user?._id!,
        path: user?.role!,
        user: {
          addresses: addressArr,
        },
      }).unwrap();

      let updatedUser = {
        ...user,
        addresses: addressArr,
      };

      dispatch(
        setCredentials({
          user: updatedUser,
          role: user?.role!,
          email: null,
        })
      );
      successMessage(`address ${mode}ed successfully`);
      setDisplayCurrentAddress(false);
      setCurrentAddress(address);
    } catch (err: any) {
      errorMessage(err?.data.message);
      console.log(err);
    }
  };

  const selectAddress = (address: IAddress) => {
    setCurrentAddress(address);
    setDisplayAddresses(false);
  };

  const submitOrderHandler = () => {
    // const order = {
    //   date: selectedDate,
    //   paymentMethod: selectedPaymentMethod,
    //   address: currentAddress,
    //   notes: notesRef?.current?.value,
    //   products: [{ product: productObject, quantity: 3, color: "red" }],
    //   total: subtotal,
    // };
    // TODO send order data
  };
  return (
    <Box bgcolor={"white"}>
      <Container maxWidth={"lg"} sx={{ py: "50px" }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Grid
              container
              rowSpacing={2}
              sx={{ padding: "25px", border: "2px solid #eaeaea" }}
            >
              <Grid item xs={12}>
                <Box sx={checkoutTitleWrapper}>
                  <Typography component={"h2"}>BILLING DETAILS</Typography>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <CurrentAddress
                  currentAddress={currentAddress}
                  setDisplayCurrentAddress={setDisplayCurrentAddress}
                />
              </Grid>
              <Grid item xs={12}>
                <Collapse in={displayCurrentAddress}>
                  <>
                    <AddressForm
                      addAddress={addAddress}
                      buttonText={currentAddress ? "edit" : "add"}
                      currentAddress={currentAddress}
                    />
                  </>
                </Collapse>
              </Grid>
              <Grid item xs={12}>
                <Box sx={addressTitleStyles} onClick={displayAddressesToggler}>
                  <Typography component="h4">
                    SHIP TO A DIFFERENT ADDRESS
                  </Typography>
                  <Add className="icon" />
                </Box>
                <Divider sx={{ width: "97%", mt: "4px", mb: "20px" }} />
                <Modal
                  open={displayAddresses}
                  onClose={() => setDisplayAddresses(false)}
                >
                  <Box
                    sx={{
                      ...cartModal,
                      ...addressModalWrapper,
                    }}
                  >
                    <Box>
                      <Box
                        className="close-button"
                        onClick={() => setDisplayAddresses(false)}
                      >
                        <Close />
                      </Box>
                      {user?.addresses.map((item) => (
                        <Address
                          key={item?._id}
                          address={item}
                          selectAddress={selectAddress}
                        />
                      ))}
                    </Box>
                  </Box>
                </Modal>
              </Grid>

              <Grid item xs={12}>
                <ShippingDatePicker setSelectedDate={setSelectedDate} />
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
                    <Coupon setCouponValue={setCouponValue} />
                  </>
                </Collapse>
              </Grid>
              <Grid item xs={12}>
                <OrderNotes notesRef={notesRef} />
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
                <Box sx={checkoutTitleWrapper}>
                  <Typography component={"h2"}>YOUR ORDER</Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <OrderTable cartItems={cart?.products!} subtotal={subtotal} />
              </Grid>
              <Grid item xs={12}>
                <PaymentMethod
                  setSelectedPaymentMethod={setSelectedPaymentMethod}
                  selectedPaymentMethod={selectedPaymentMethod}
                />
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
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our privacy policy.{" "}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  sx={checkoutProceedBtn}
                  onClick={submitOrderHandler}
                >
                  proceed to paypal
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Checkout;
