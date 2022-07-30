import { useState, SyntheticEvent } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { between, wrapper } from "../../../Styles/User";
import Search from "@mui/icons-material/Search";
import { TabPanel, a11yProps } from "./TabPanel/TabPanel";
import EmptyOrder from "./EmptyOrder/EmptyOrder";
import OrderItem from "./OrderItem/OrderItem";

const Orders = () => {
  const [value, setValue] = useState(0);

  const [pending, setPending] = useState(1);
  const [delivered, setDelivered] = useState(1);
  const [referred, setReferred] = useState(1);
  const [canceled, setCanceled] = useState(1);

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
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs">
            <Tab label="Pending" {...a11yProps(0)} />
            <Tab label="Delivered" {...a11yProps(1)} />
            <Tab label="Referred" {...a11yProps(2)} />
            <Tab label="Canceled" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {pending === 0 && <EmptyOrder />}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <OrderItem />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          {delivered === 0 && <EmptyOrder />}
          <OrderItem />
        </TabPanel>
        <TabPanel value={value} index={2}>
          {referred === 0 && <EmptyOrder />}
          <OrderItem />
        </TabPanel>
        <TabPanel value={value} index={3}>
          {canceled === 0 && <EmptyOrder />}
          <OrderItem />
        </TabPanel>
      </Box>
    </Box>
  );
};

export default Orders;
