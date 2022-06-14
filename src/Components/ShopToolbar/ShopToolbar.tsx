import { Box, Typography } from "@mui/material";
import { GridView, TableRows } from "@mui/icons-material";
import { useState } from "react";
import { ToolbarButton } from "../../Styles/ShopPage";

function ShopToolbar() {
  const [selectedLayout, setSelectedLayout] = useState({
    grid: true,
    list: false,
  });
  const [productNumber, setProductNumber] = useState({
    twelve: true,
    twentyFour: false,
    all: false,
  });

  const productNumberHandler = (amount: string) => {
    setProductNumber({
      twelve: false,
      twentyFour: false,
      all: false,
      [amount]: true,
    });
  };
  return (
    <Box
      sx={{
        borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
        paddingBottom: "15px",
        marginBottom: "20px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box onClick={() => setSelectedLayout({ grid: true, list: false })}>
          <GridView
            sx={{
              color: selectedLayout["grid"] ? "#f03637" : "inherit",
              "&:hover": { color: "#f03637" },
              cursor: "pointer",
              transition: "all 100ms ease-in",
            }}
          />
        </Box>
        <Box onClick={() => setSelectedLayout({ grid: false, list: true })}>
          <TableRows
            sx={{
              color: selectedLayout["list"] ? "#f03637" : "inherit",

              marginLeft: "10px",
              "&:hover": { color: "#f03637" },
              cursor: "pointer",
              transition: "all 100ms ease-in",
            }}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", marginLeft: "20px" }}>
          <Typography>View: </Typography>
          <ToolbarButton
            className={productNumber["twelve"] ? "active" : ""}
            onClick={() => productNumberHandler("twelve")}
          >
            12
          </ToolbarButton>
          /
          <ToolbarButton
            className={productNumber["twentyFour"] ? "active" : ""}
            onClick={() => productNumberHandler("twentyFour")}
          >
            24{" "}
          </ToolbarButton>
          /
          <ToolbarButton
            className={productNumber["all"] ? "active" : ""}
            onClick={() => productNumberHandler("all")}
          >
            All
          </ToolbarButton>
        </Box>
      </Box>
    </Box>
  );
}

export default ShopToolbar;
