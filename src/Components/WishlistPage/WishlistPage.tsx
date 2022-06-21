import { useState } from "react";
import { Box, Typography, Button, Select, MenuItem } from "@mui/material";
import CustomBreadcrumbs from "../CustomBreadcrumbs/CustomBreadcrumbs";
import {
  wrapperStyle,
  wishlistTitle,
  ActionWrapper,
  ActionLeftBtns
} from "../../Styles/Wishlist";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import SocialBox from "./Components/SocialBox/SocialBox";

const columns: GridColDef[] = [
  { field: "productName", headerName: "PRODUCT NAME", width: 400 },
  { field: "unitPrice", headerName: "UNIT PRICE", width: 200 },
  {
    field: "dateAdded",
    headerName: "DATE ADDED",
    width: 200,
  },
  { field: "stockStatus", headerName: "STOCK STATUS", width: 350 },
];

const rows = [
  {
    id: 1,
    productName: "Sam Sung Galaxy Note 10 Lite",
    unitPrice: "$52.00",
    dateAdded: "june 20,2020",
    stockStatus: "In stock",
  },
  {
    id: 2,
    productName: "SmartPhone & Ipad",
    unitPrice: "$72.00",
    dateAdded: "june 20,2020",
    stockStatus: "In stock",
  },
];

const WishlistPage = () => {
  const [action, setAction] = useState("Actions");

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

        <div style={{ height: 300, width: "100%" }}>
          <DataGrid
            sx={{ border: "none" }}
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>




        <hr />
        <ActionWrapper>
          <Box sx={{ display: "flex",width: "100%", mb: 1, alignItems: "center", gap: 2 }}>
            <Select
              className="action"
              value={action}
              onChange={handleActionChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{width: "300px", height: "40px", backgroundColor: "#d2d2d2"}}
            >
              <MenuItem value="Actions">Actions</MenuItem>
              <MenuItem value="ADD">Add to cart</MenuItem>
              <MenuItem value="REMOVE">Remove</MenuItem>
            </Select>
            <Button
              variant="contained"
              sx={{ width: "160px", height: "40px" }}
            >
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
