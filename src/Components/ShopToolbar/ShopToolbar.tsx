import { Box, Typography } from "@mui/material";
import { GridView, Preview, TableRows } from "@mui/icons-material";
import { useState } from "react";
import { ToolbarButton } from "../../Styles/ShopPage";

function ShopToolbar() {
  const [selectedValue, setSelectedValue] = useState({
    twelve: true,
    twentyFour: false,
    all: false,
  });

  const productNumberHandler = (amount: string) => {
    setSelectedValue({
      twelve: false,
      twentyFour: false,
      all: false,
      [amount]: true,
    });
  };
  console.log(selectedValue);
  return (
    <Box
      sx={{
        borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
        paddingBottom: "15px",
        marginBottom: "20px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <GridView
          sx={{
            "&:hover": { color: "#f03637" },
            cursor: "pointer",
            transition: "all 100ms ease-in",
          }}
        />
        <TableRows
          sx={{
            marginLeft: "10px",
            "&:hover": { color: "#f03637" },
            cursor: "pointer",
            transition: "all 100ms ease-in",
          }}
        />
        <Box sx={{ display: "flex", alignItems: "center", marginLeft: "20px" }}>
          <Typography>View: </Typography>
          <ToolbarButton
            className={selectedValue["twelve"] ? "active" : ""}
            onClick={() => productNumberHandler("twelve")}
          >
            12
          </ToolbarButton>
          /
          <ToolbarButton
            className={selectedValue["twentyFour"] ? "active" : ""}
            onClick={() => productNumberHandler("twentyFour")}
          >
            24{" "}
          </ToolbarButton>
          /
          <ToolbarButton
            className={selectedValue["all"] ? "active" : ""}
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
