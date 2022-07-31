import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { CardWrapper } from "../../../Styles/User";
import { wrapper } from "../../../Styles/User";
import Sidebar from "./Sidebar/Sidebar";
import Password from "./Password/Password";
import General from "./General/General";

const PersonalInfo = () => {
  const [activePage, setActivePage] = useState("general");

  const activePageHandler = (page: string) => () => {
    setActivePage(page);
  };

  return (
    <Box sx={wrapper}>
      <CardWrapper>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={3}>
            <Sidebar
              activePageHandler={activePageHandler}
              activePage={activePage}
            />
          </Grid>
          <Grid item xs={12} lg={9}>
            {activePage === "general" && <General />}
            {activePage === "password" && <Password />}
          </Grid>
        </Grid>
      </CardWrapper>
    </Box>
  );
};

export default PersonalInfo;
