import { useState, SyntheticEvent } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { between, wrapper } from "../../Styles/User";
import Search from "@mui/icons-material/Search";
import { TabPanel, a11yProps } from "./TabPanel/TabPanel";
import EmptyOrder from "./EmptyOrder/EmptyOrder";
import OrderItem from "./OrderItem/OrderItem";
import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { useGetUserOrdersQuery } from "../../features/orders/ordersApi";
import { useAppSelector } from "../../features/store";

const statuses = ["pending", "delivered", "cancelled"];

const UserOrders = () => {
  const { user } = useAppSelector((state: any) => state.reducer.auth);
  const [value, setValue] = useState(0);

  const { data, isLoading, isError } = useGetUserOrdersQuery({
    path: user?.role!,
    id: user?._id!,
  });
  const orders = data?.data ?? [];

  const filteredOrders = orders.filter(
    (order: any) => order.status === statuses[value]
  );
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={wrapper}>
      <Box sx={between}>
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
          <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
            Orders History
          </Typography>
        </Box>
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
            <Tab label="Canceled" {...a11yProps(2)} />
          </Tabs>
        </Box>
        {statuses.map((item, index) => (
          <TabPanel key={index} value={value} index={index}>
            {filteredOrders.length === 0 && <EmptyOrder />}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {filteredOrders.map(({ _id, status }: any) => (
                <OrderItem
                  id={_id!}
                  date={"date"}
                  image={"image"}
                  price={10}
                  status={status}
                />
              ))}
            </Box>
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
};

export default UserOrders;
