import { useState } from "react";
import { useTheme } from "@mui/material/styles";
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
  useMediaQuery,
} from "@mui/material";

import { rows } from "../../Services/Utils/Data/data";
import TableBody from "@mui/material/TableBody";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

import {
  wrapperStyle,
  wishlistTitle,
  ActionWrapper,
  ActionLeftBtns,
  StyledTableCell,
} from "../../Styles/Wishlist";
import SocialBox from "./Components/SocialBox/SocialBox";
import RowItem from "./Components/RowItem/RowItem";

const Wishlist = () => {
  const [action, setAction] = useState("Actions");
  const [list, setList] = useState(rows);

  const theme = useTheme();
  const matchesAction = useMediaQuery(theme.breakpoints.down("md"));
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMd = useMediaQuery(theme.breakpoints.only("sm"));

  const addSelectedToCart = () => {
    console.log("selected items added to cart");
  };

  const addAllToCart = () => {
    console.log("All items added to cart");
  };

  const applyAction = () => {
    console.log("Action Applied");
  };

  function handleRemove(id: number) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  const handleActionChange = (e: any) => {
    setAction(e.target.value);
  };
  console.log(action);

  return (
    <>
      <Breadcrumbs title={"Wishlist"} />

      <Box maxWidth="lg" sx={wrapperStyle}>
        <Typography variant="h3" sx={wishlistTitle}>
          Default Wishlist
        </Typography>

        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                {matches ? (
                  <StyledTableCell sx={{ fontSize: { xs: "18px !important" } }}>
                    PRODUCT
                  </StyledTableCell>
                ) : (
                  <>
                    <StyledTableCell>
                      <Checkbox
                        sx={{
                          color: "#f03637",
                          "&.Mui-checked": {
                            color: "#f03637",
                          },
                        }}
                      />
                    </StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell>PRODUCT NAME</StyledTableCell>
                    <StyledTableCell>UNIT PRICE</StyledTableCell>
                    {matchesMd ? (
                      <StyledTableCell>DATE</StyledTableCell>
                    ) : (
                      <StyledTableCell>DATE ADDED</StyledTableCell>
                    )}
                    <StyledTableCell></StyledTableCell>
                    {matchesMd ? (
                      <StyledTableCell>STATUS</StyledTableCell>
                    ) : (
                      <StyledTableCell>STOCK STATUS</StyledTableCell>
                    )}
                    <StyledTableCell></StyledTableCell>
                  </>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map(
                ({ id, name, image, offPrice, price, date, status }) => (
                  <RowItem
                    id={id}
                    name={name}
                    image={image}
                    offPrice={offPrice}
                    price={price}
                    date={date}
                    status={status}
                    onRemove={handleRemove}
                  />
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <ActionWrapper>
          <Box
            sx={{
              display: "flex",
              width: "100%",
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
            <Button
              variant="contained"
              sx={{ width: "150px", height: "40px" }}
              onClick={applyAction}
            >
              {matchesAction ? "APPLY" : "APPLY ACTION"}
            </Button>
          </Box>
          <ActionLeftBtns>
            <Button
              variant="contained"
              sx={{
                display: { xs: "none", sm: "block" },
                width: "220px",
                height: "40px",
              }}
              onClick={addSelectedToCart}
            >
              ADD SELECTED TO CART
            </Button>
            <Button
              variant="contained"
              sx={{ width: "180px", height: "40px" }}
              onClick={addAllToCart}
            >
              ADD ALL TO CART
            </Button>
          </ActionLeftBtns>
        </ActionWrapper>

        <SocialBox />
      </Box>
    </>
  );
};
export default Wishlist;
