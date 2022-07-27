import { useState, SyntheticEvent } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { between, wrapper } from "../../../Styles/User";
import Search from "@mui/icons-material/Search";
import { TabPanel, a11yProps } from "./TabPanel/TabPanel";

const Orders = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={wrapper}>
      <Box sx={between}>
        <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
          Orders History
        </Typography>
        <Box>
          <Search />
        </Box>
      </Box>

      {/* Tabs */}
      <Box sx={{ width: "100%", marginTop: "2.5rem" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Pending" {...a11yProps(0)} />
            <Tab label="Delivered" {...a11yProps(1)} />
            <Tab label="Referred" {...a11yProps(2)} />
            <Tab label="Canceled" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Pending
        </TabPanel>
        <TabPanel value={value} index={1}>
          Delivered
        </TabPanel>
        <TabPanel value={value} index={2}>
          Referred
        </TabPanel>
        <TabPanel value={value} index={3}>
          Canceled
        </TabPanel>
      </Box>
    </Box>
  );
};

export default Orders;
