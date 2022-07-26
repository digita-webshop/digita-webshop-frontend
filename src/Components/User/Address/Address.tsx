import { Box, Button, Typography } from "@mui/material";
import {
  addressBtn,
  topMenuItem,
  wrapper,
  between,
} from "../../../Styles/User";
import AddLocation from "@mui/icons-material/AddLocation";

const Address = () => {
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
      <Box sx={{ marginTop: "3.5rem" }}>
        <Box sx={between}>
          <Typography sx={{ fontWeight: 500 }}>
            Australia North Sydney NSW2126
          </Typography>
          <Box>Menu</Box>
        </Box>

        <Box sx={between}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>Sydney</Typography>
            <Typography>2</Typography>
            <Typography>3</Typography>
            <Typography>Siavash khani</Typography>
          </Box>
          <Box>Map</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Address;
