import { Box, Button, Checkbox } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import {
  closeStyle,
  StyledTableCell,
  StyledTableRow,
} from "../../../../Styles/Wishlist";

interface T {
  id: number;
  name: string;
  image: string;
  price: number;
  date: string;
  status: boolean;
  onRemove: Function;
}

const RowItem = ({ id, name, image, status, price, date, onRemove }: T) => {

  return (
    <>
      <StyledTableRow key={id}>
        <StyledTableCell align="left">
          <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }} />
        </StyledTableCell>
        <StyledTableCell align="left">
          <Box sx={closeStyle} onClick={() => onRemove(id)}>
            <CloseIcon sx={{ fontSize: "16px" }} />
          </Box>
        </StyledTableCell>
        <StyledTableCell align="left">
          <img
            src={image}
            alt="img"
            style={{
              width: "60px",
              height: "60px",
              objectFit: "cover",
            }}
          />
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {name}
        </StyledTableCell>
        <StyledTableCell align="right" sx={{ color: "#f03637" }}>
          ${price}.00
        </StyledTableCell>
        <StyledTableCell align="right">{date}</StyledTableCell>
        <StyledTableCell align="right">{status}</StyledTableCell>
        <StyledTableCell align="right">
          {status && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CheckIcon sx={{ mr: 2, fontSize: "18px" }} />
              In stock
            </Box>
          )}
        </StyledTableCell>
        <StyledTableCell>
          <Button variant="contained" sx={{ width: "140px", height: "40px" }}>
            ADD TO CART
          </Button>
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
};

export default RowItem;
