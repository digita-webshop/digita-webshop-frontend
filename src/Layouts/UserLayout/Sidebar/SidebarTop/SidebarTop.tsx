import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { userAvatarStyle, UserNavItem } from "../../../../Styles/User";

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
            <Typography
              sx={{
                color: "common.digitaRed",
                cursor: "pointer",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                Charge Wallet
                <KeyboardArrowRightIcon />
              </Box>
            </Typography>
          </Box>
          <Typography>13$</Typography>
        </UserNavItem>

        <UserNavItem>
          <Box sx={{ paddingLeft: ".3rem" }}>
            <Typography>Points</Typography>
            <Typography
              sx={{
                color: "common.digitaRed",
                cursor: "pointer",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                Your Trophies
                <KeyboardArrowRightIcon />
              </Box>
            </Typography>
          </Box>
          <Typography>80</Typography>
        </UserNavItem>

        <Box sx={{ position: "absolute" }}>
          <Timeline>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
            </TimelineItem>
          </Timeline>
        </Box>
      </Box>
    </>
  );
};

export default SidebarTop;
