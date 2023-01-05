import { Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PendingIcon from "@mui/icons-material/Pending";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import CancelIcon from "@mui/icons-material/Cancel";
import { between, wrapper } from "styles/user";
import { ICartItem } from "types/cart";
import { getReadableDate } from "utils/getReadableDate";
import { getSubtotal } from "utils/getSubtotal";

interface T {
  id: string;
  date: string;
  status: string;
  products: ICartItem[];
}

const OrderItem = ({ id, date, status, products }: T) => {
  return (
    <Box sx={{ ...wrapper, border: "1px solid #d8d8d8", borderRadius: "12px" }}>
      <Box sx={between}>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
          {status === "pending" && (
            <>
              <PendingIcon sx={{ color: "#03a9f4" }} />
              <Typography>Pending</Typography>
            </>
          )}

          {status === "delivered" && (
            <>
              <CheckCircleIcon sx={{ color: "#00e676" }} />
              <Typography>Delivered</Typography>
            </>
          )}

          {status === "referred" && (
            <>
              <AssignmentReturnIcon sx={{ color: "#8d6e63" }} />
              <Typography>Referred</Typography>
            </>
          )}

          {status === "canceled" && (
            <>
              <CancelIcon sx={{ color: "#e53935" }} />
              <Typography>Canceled</Typography>
            </>
          )}
        </Box>
        <ArrowForwardIosIcon />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          flexWrap: "wrap",
          gap: 2,
          mt: 2,
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography sx={{ color: "gray", fontSize: { xs: "14px", sm: "16px" } }}>Date:</Typography>
          <Typography sx={{ color: "gray", fontSize: { xs: "14px", sm: "16px" } }}>{getReadableDate(date)}</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography sx={{ color: "gray", fontSize: { xs: "14px", sm: "16px" } }}>Code:</Typography>
          <Typography>{id}</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography sx={{ color: "gray", fontSize: { xs: "14px", sm: "16px" } }}>Price: </Typography>
          <Typography>{` $${getSubtotal(products) + 20}`}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px", mt: 2, img: { aspectRatio: "1" } }}>
        {products?.map(({ productId }) => (
          <img src={productId?.image} alt={productId?.title} className="orderImg" />
        ))}
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
