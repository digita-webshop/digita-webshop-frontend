import { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { CardWrapper, wrapper } from "styles/user";
import Sidebar from "./Sidebar/Sidebar";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useAppSelector } from "redux/store";
import General from "../Settings/Components/General/General";
import Password from "../Settings/Components/Password/Password";

const PersonalInfo = () => {
  const { user } = useAppSelector((state) => state.reducer.auth);

  const [activePage, setActivePage] = useState("general");

  const activePageHandler = (page: string) => () => {
    setActivePage(page);
  };

  return (
    <Box sx={wrapper}>
      <CardWrapper>
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
          <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>Personal Info</Typography>
        </Box>
        <Grid container>
          <Grid item xs={12} lg={3} mb={4}>
            <Sidebar activePageHandler={activePageHandler} activePage={activePage} />
          </Grid>
          <Grid item xs={12} lg={9}>
            {activePage === "general" && <General user={user!} />}
            {activePage === "password" && <Password id={user?._id!} role={user?.role!} />}
          </Grid>
        </Grid>
      </CardWrapper>
    </Box>
  );
};

export default PersonalInfo;
