import { useState, SyntheticEvent } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { between, wrapper } from "../../../Styles/User";
import Search from "@mui/icons-material/Search";
import { TabPanel, a11yProps } from "./TabPanel/TabPanel";
import EmptyOrder from "./EmptyOrder/EmptyOrder";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

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
        </TabPanel>
        <TabPanel value={value} index={1}>
          {delivered === 0 && <EmptyOrder />}
          <Box sx={wrapper}>
            <Box sx={between}>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                <CheckCircleIcon sx={{ color: "#0F0" }} />
                <Typography>Delivered</Typography>
              </Box>
              <ArrowForwardIosIcon />
            </Box>
            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <Typography sx={{ color: "gray" }}>21 June 2022</Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Typography sx={{ color: "gray" }}>Code</Typography>
                <Typography>135465468</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Typography sx={{ color: "gray" }}>Price</Typography>
                <Typography>600 $</Typography>
              </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Box
                component="img"
                src="https://dkstatics-public.digikala.com/digikala-products/119607459.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
                alt="empty"
                className="orderImg"
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 2,
                color: "common.digitaRed",
                cursor: "pointer",
              }}
            >
              <Typography>See Details</Typography>
              <ReceiptLongIcon sx={{ ml: 2 }} />
            </Box>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
          {referred === 0 && <EmptyOrder />}
        </TabPanel>
        <TabPanel value={value} index={3}>
          {canceled === 0 && <EmptyOrder />}
        </TabPanel>
      </Box>
    </Box>
  );
};

export default Orders;
