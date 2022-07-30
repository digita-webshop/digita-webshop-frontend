import { Box } from "@mui/material";
import { Fragment } from "react";
import { cartModal } from "../../../../Styles/Products";
import NewAddressForm from "../../../Checkout/NewAddressForm/NewAddressForm"

const NewAddress = () => {
  return (
    <Fragment>
      <Box sx={cartModal}>
        <NewAddressForm />
      </Box>
    </Fragment>
  );
};

export default NewAddress;
