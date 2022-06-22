import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
} from "@mui/material";
import { rows } from "../../Services/Utils/Data/data"
import TableBody from "@mui/material/TableBody";
import CustomBreadcrumbs from "../CustomBreadcrumbs/CustomBreadcrumbs";

import {
  wrapperStyle,
  wishlistTitle,
  ActionWrapper,
  ActionLeftBtns,
  StyledTableCell,
} from "../../Styles/Wishlist";
import SocialBox from "./Components/SocialBox/SocialBox";
import RowItem from "./Components/TableRow/RowItem";



const WishlistPage = () => {
  const [action, setAction] = useState("Actions");
  const [cartList, setCartList] = useState([1]);



  const handleActionChange = (e: any) => {
    setAction(e.target.value);
  };

  return (
    <>
      <CustomBreadcrumbs title={"Wishlist"} />

      <Box maxWidth="1270px" sx={wrapperStyle}>
        <Typography variant="h3" sx={wishlistTitle}>
          Default Wishlist
        </Typography>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>
                  <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }} />
                </StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell>PRODUCT NAME</StyledTableCell>
                <StyledTableCell align="right">UNIT PRICE</StyledTableCell>
                <StyledTableCell align="right">DATE ADDED</StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell align="right">STOCK STATUS</StyledTableCell>
                <StyledTableCell></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(({ id, name, image, price, date, status }) => (
                <RowItem id={id} name={name} image={image} price={price} date={date} status={status}/>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <ActionWrapper>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              mb: 1,
              alignItems: "center",
              gap: 1,
            }}
          >
            <Select
              className="action"
              value={action}
              onChange={handleActionChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                width: "290px",
                height: "40px",
                backgroundColor: "#e3e3e3",
              }}
            >
              <MenuItem value="Actions">Actions</MenuItem>
              <MenuItem value="ADD">Add to cart</MenuItem>
              <MenuItem value="REMOVE">Remove</MenuItem>
            </Select>
            <Button variant="contained" sx={{ width: "160px", height: "40px" }}>
              APPLY ACTION
            </Button>
          </Box>
          <ActionLeftBtns>
            <Button variant="contained" sx={{ width: "220px", height: "40px" }}>
              ADD SELECTED TO CART
            </Button>
            <Button variant="contained" sx={{ width: "180px", height: "40px" }}>
              ADD ALL TO CART
            </Button>
          </ActionLeftBtns>
        </ActionWrapper>

        <SocialBox />
      </Box>
    </>
  );
};
export default WishlistPage;
