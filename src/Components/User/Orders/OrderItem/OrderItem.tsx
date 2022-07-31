import { Box, Typography } from "@mui/material";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PendingIcon from "@mui/icons-material/Pending";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import CancelIcon from "@mui/icons-material/Cancel";
import { between, wrapper } from "../../../../Styles/User";

interface T {
  id: number;
  price: number;
  code: number;
  date: string;
  image: string;
  status: string;
}

const OrderItem = ({id, price, date, code, image, status}: T) => {


  return (
    <Box sx={wrapper} key={id}>
      <Box sx={between}>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
          {status === "pending" && (
            <>
              <PendingIcon sx={{ color: "#00F" }} />
              <Typography>Pending</Typography>
            </>
          )}

          {status === "delivered" && (
            <>
              <CheckCircleIcon sx={{ color: "#0F0" }} />
              <Typography>Delivered</Typography>
            </>
          )}

          {status === "referred" && (
            <>
              <AssignmentReturnIcon sx={{ color: "#0FF" }} />
              <Typography>Referred</Typography>
            </>
          )}

          {status === "canceled" && (
            <>
              <CancelIcon sx={{ color: "#F00" }} />
              <Typography>Canceled</Typography>
            </>
          )}
        </Box>
        <ArrowForwardIosIcon />
      </Box>
      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        <Typography sx={{ color: "gray" }}>{date}</Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography sx={{ color: "gray" }}>Code</Typography>
          <Typography>{code}</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography sx={{ color: "gray" }}>Price</Typography>
          <Typography>{`${price} $`}</Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Box
          component="img"
          src={image}
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
  );
};

export default OrderItem;
