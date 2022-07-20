import { Box, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  userAvatarStyle,
  UserNavItem,
  topMenuItem,
} from "../../../../Styles/User";

const SidebarTop = () => {
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <UserNavItem>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box sx={userAvatarStyle} id="user-button">
              <img
                src="https://www.ecommerce-admin.com/demo/images/people/avatar1.jpg"
                alt="avatar"
              />
            </Box>
            <Typography sx={{ fontWeight: "bold" }}>Username</Typography>
          </Box>
          <EditIcon sx={{ color: "common.digitaRed", cursor: "pointer" }} />
        </UserNavItem>

        <UserNavItem>
          <Box sx={{ paddingLeft: ".3rem" }}>
            <Typography>Wallet</Typography>
            <Typography sx={topMenuItem}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                Charge Wallet
                <KeyboardArrowRightIcon className="navIcon"/>
              </Box>
            </Typography>
          </Box>
          <Typography sx={{ fontWeight: "bold" }}>13$</Typography>
        </UserNavItem>

        <UserNavItem>
          <Box sx={{ paddingLeft: ".3rem" }}>
            <Typography>Points</Typography>
            <Typography sx={topMenuItem}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                Your Trophies
                <KeyboardArrowRightIcon className="navIcon"/>
              </Box>
            </Typography>
          </Box>
          <Typography sx={{ fontWeight: "bold" }}>180</Typography>
        </UserNavItem>
      </Box>
    </>
  );
};

export default SidebarTop;
