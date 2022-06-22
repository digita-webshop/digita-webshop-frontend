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
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import TableBody from "@mui/material/TableBody";
import CustomBreadcrumbs from "../CustomBreadcrumbs/CustomBreadcrumbs";

import {
  wrapperStyle,
  wishlistTitle,
  ActionWrapper,
  ActionLeftBtns,
  StyledTableCell,
  StyledTableRow,
} from "../../Styles/Wishlist";
import SocialBox from "./Components/SocialBox/SocialBox";

const WishlistPage = () => {
  const [action, setAction] = useState("Actions");
  const [cartList, setCartList] = useState([1]);

  function createData(
    id: number,
    name: string,
    image: string,
    price: number,
    date: string,
    status: boolean
  ) {
    return { id, name, image, price, date, status };
  }

  const rows = [
    createData(
      1,
      "Sam Sung Galaxy Note 10 Lite",
      "https://demo-61.woovinapro.com/wp-content/uploads/2020/11/product-4-330x330.jpg",
      52,
      "June 20, 2022",
      true
    ),
    createData(
      2,
      "SmartPhone & Ipad",
      "https://demo-61.woovinapro.com/wp-content/uploads/2020/11/product-3-330x330.jpg",
      75,
      "June 20, 2022",
      true
    ),
  ];

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
              {rows.map(({ id, name, image, status, price, date }) => (
                <>
                  <StyledTableRow key={id}>
                    <StyledTableCell align="left">
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                      />
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <CloseIcon sx={{fontSize: "16px"}} />
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
                      <Button
                        variant="contained"
                        sx={{ width: "140px", height: "40px" }}
                      >
                        ADD TO CART
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                </>
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
