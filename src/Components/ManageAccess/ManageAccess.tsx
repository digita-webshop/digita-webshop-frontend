import { Add } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { PButton, PTitle } from "../../Styles/panelCommon";
import AdminTable from "./AdminTable/AdminTable";

function ManageAccess() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <PTitle>manage access</PTitle>
        <PButton variant="contained" sx={{ gap: "4px", paddingX: "10px" }}>
          <Add />
          create admin
        </PButton>
      </Box>
      <AdminTable />
    </Box>
  );
}

export default ManageAccess;
