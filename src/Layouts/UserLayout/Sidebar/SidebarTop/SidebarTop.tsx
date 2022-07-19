import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { userAvatarStyle } from "../../../../Styles/User";

const SidebarTop = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box sx={userAvatarStyle} id="user-button">
            <img
              src="https://www.ecommerce-admin.com/demo/images/people/avatar1.jpg"
              alt="avatar"
            />
          </Box>
          <Typography>Username</Typography>
        </Box>
        <EditIcon />
      </Box>
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
    </>
  );
};

export default SidebarTop;
