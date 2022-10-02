import { useEffect, useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import {
  addressBtn,
  topMenuItem,
  wrapper,
  between,
} from "../../../Styles/User";
import AddLocation from "@mui/icons-material/AddLocation";
import EmptyList from "../../EmptyList/EmptyList";
import { cartModal } from "../../../Styles/Products";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { IAddress, IUser } from "../../../Services/Types/user";
import Address from "./Address/Address";
import { useUpdateUserMutation } from "../../../features/user/userApi";
import AddressForm from "../../Checkout/AddressForm/AddressForm";
import { setCredentials } from "../../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { errorMessage, successMessage } from "../../../Utils/toastMessages";
interface Props {
  user: IUser;
}

function Addresses({ user }: Props) {
  const [newAddress, setNewAddress] = useState(false);
  const [currentAddress, setCurrentAddress] = useState<IAddress | null>(null);

  const dispatch = useDispatch();
  const [updateUser] = useUpdateUserMutation();

  const editAddress = async (address: IAddress) => {
    setNewAddress(true);
    setCurrentAddress(address);
  };
  const deleteAddress = async (id: string) => {
    let addressArr = [...user?.addresses];
    addressArr = addressArr.filter((ads) => ads?._id !== id);
    const newUser = { ...user, addresses: addressArr };

    try {
      const response = await updateUser({
        id: user._id!,
        path: user.role!,
        user: newUser,
      }).unwrap();
      if (response.code !== 200) {
        throw new Error(response?.message);
      }

      dispatch(
        setCredentials({ user: newUser, role: user.role!, email: null })
      );
      setCurrentAddress(null);
      successMessage("address deleted successfully");
    } catch (err) {
      setCurrentAddress(null);
      errorMessage("could not delete address");
      console.log(err);
    }
  };

  const addAddress = async (address: IAddress, mode: string) => {
    let addressArr = [...user?.addresses];
    if (mode === "edit") {
      const index = addressArr.findIndex((ads) => ads?._id === address._id);
      addressArr[index] = address;
    } else {
      addressArr.push(address);
    }

    try {
      await updateUser({
        id: user._id!,
        path: user.role!,
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
          role: user.role!,
          email: null,
        })
      );
      successMessage(`address ${mode}ed successfully`);
      setNewAddress(false);
      setCurrentAddress(null);
    } catch (err: any) {
      errorMessage(err?.data.message);
      console.log(err);
    }
  };
  useEffect(() => {
    if (!newAddress) {
      setCurrentAddress(null);
    }
  }, [newAddress]);
  return (
    <Box sx={wrapper}>
      <Box sx={between}>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Box
            to="/user"
            component={Link}
            sx={{
              display: { md: "none" },
              textDecoration: "none",
              color: "common.digitaBlack",
            }}
          >
            <ArrowBack />
          </Box>
          <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
            Addresses
          </Typography>
        </Box>
        <Box sx={topMenuItem} onClick={() => setNewAddress(true)}>
          <Button variant="contained" sx={addressBtn}>
            <AddLocation
              className="addIcon"
              sx={{ margin: "0 0.2rem", color: "common.digitaRed" }}
            />
            Add New Address
          </Button>
        </Box>
      </Box>

      {/* =================== Addresses ================== */}

      {user?.addresses.length === 0 && (
        <EmptyList
          title={"Addresses"}
          image={
            "https://www.pngitem.com/pimgs/m/267-2677986_red-contact-icon-png-transparent-png.png"
          }
        />
      )}
      {user.addresses.map((item) => (
        <Address
          key={item?._id}
          address={item}
          editAddress={editAddress}
          deleteAddress={deleteAddress}
        />
      ))}
      <Modal
        open={newAddress}
        onClose={() => setNewAddress(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={cartModal}>
          <AddressForm
            addAddress={addAddress}
            currentAddress={currentAddress}
            buttonText={currentAddress ? "edit" : "add"}
          />
        </Box>
      </Modal>
    </Box>
  );
}

export default Addresses;
