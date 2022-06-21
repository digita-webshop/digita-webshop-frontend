import { Box, Typography } from "@mui/material";
import CustomBreadcrumbs from "../CustomBreadcrumbs/CustomBreadcrumbs";
import { wrapperStyle, wishlistTitle } from "../../Styles/Wishlist";
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
  return (
    <>
      <CustomBreadcrumbs title={"Wishlist"} />

      <Box maxWidth="1270px" sx={wrapperStyle}>
        <Typography variant="h3" sx={wishlistTitle}>
          Default Wishlist
        </Typography>

        <div style={{ height: 300, width: "100%" }}>
          <DataGrid
            sx={{border: "none"}}
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>

        <SocialBox />
      </Box>
    </>
  );
};

export default WishlistPage;
