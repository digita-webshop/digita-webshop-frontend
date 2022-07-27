import { useState, MouseEvent } from "react";
import { Box, Button, IconButton, Menu, Typography } from "@mui/material";
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

const options = [
  "Edit",
  "Delete",
];

const Address = () => {
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
  return (
    <Box sx={wrapper}>
      <Box sx={between}>
        <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
          Addresses
        </Typography>
        <Box sx={topMenuItem}>
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
            <Box>Map</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Address;
