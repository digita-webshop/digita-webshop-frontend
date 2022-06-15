import React from "react";
import { Box, Grid, Rating, Typography } from "@mui/material";

interface AvatarProps {
  profileImg: string;
  username: string;
  role: string;
  rate: number;
}

function ClientAvatar({ profileImg, username, role, rate }: AvatarProps) {
  return (
    <>
      <Box sx={{ mt: 3, "& img": { width: 70, height: 70 } }}>
        <Grid container spacing={1}>
          <Grid item>
            <img src={profileImg} alt="profile" />
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              spacing={0}
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Grid item>
                <Typography
                  sx={{
                    fontSize: 15,
                    textTransform: "uppercase",
                    fontWeight: "600",
                  }}
                >
                  {username}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{
                    fontSize: 13,
                    textTransform: "uppercase",
                    fontWeight: "600",
                    mb: 1,
                  }}
                >
                  {role}
                </Typography>
              </Grid>
              <Grid item>
                <Rating size="small" name="read-only" value={rate} readOnly />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default ClientAvatar;
