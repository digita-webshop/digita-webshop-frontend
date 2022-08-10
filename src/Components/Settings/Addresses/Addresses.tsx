import { useState, MouseEvent } from "react";
import {
  Box,
  Button,
  IconButton,
  Menu,
  Modal,
  Typography,
} from "@mui/material";
import {
  addressBtn,
  topMenuItem,
  wrapper,
  between,
} from "../../../Styles/User";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddLocation from "@mui/icons-material/AddLocation";
import EmptyList from "../../EmptyList/EmptyList";
import NewAddressForm from "../../Checkout/NewAddressForm/NewAddressForm";
import { cartModal } from "../../../Styles/Products";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";

const options = ["Edit", "Delete"];

function Addresses() {
  const [newAddress, setNewAddress] = useState(false);
  const address = 0;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const ITEM_HEIGHT = 48;

  return <Box sx={wrapper}>
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

  {address > 0 && (
    <EmptyList
      title={"Addresses"}
      image={
        "https://www.pngitem.com/pimgs/m/267-2677986_red-contact-icon-png-transparent-png.png"
      }
    />
  )}

  <Box sx={{ marginTop: "3.5rem" }}>
    <Box sx={between}>
      <Typography sx={{ fontWeight: 500 }}>
        Australia North Sydney NSW2126
      </Typography>
      <Box>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          }}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              selected={option === "Pyxis"}
              onClick={handleClose}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Box>

    <Box sx={{ mt: 2 }}>
      <Box sx={between}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            color: "#666",
          }}
        >
          <Typography>Sydney</Typography>
          <Typography>6451987662</Typography>
          <Typography>+1 234 567 89</Typography>
          <Typography>Siavash khani</Typography>
        </Box>
        <Box>
          <Box
            component="img"
            width={100}
            height={100}
            src="data:image/png;base64,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"
          />
        </Box>
      </Box>
    </Box>
  </Box>

  <Modal
    open={newAddress}
    onClose={() => setNewAddress(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={cartModal}>
      <NewAddressForm />
    </Box>
  </Modal>
</Box>;
}

export default Addresses;
