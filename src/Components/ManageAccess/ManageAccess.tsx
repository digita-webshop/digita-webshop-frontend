import { Add } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { CardWrapper, PButton, PTitle } from "../../Styles/panelCommon";
import AdminTable from "./AdminTable/AdminTable";

function ManageAccess() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <PTitle>manage access</PTitle>
        <PButton variant="contained" sx={{ gap: "4px", paddingX: "10px" }}>
          <Add />
          create admin
        </PButton>
      </Box>
      <CardWrapper>
        <AdminTable />
      </CardWrapper>
    </Box>
  );
}

export default ManageAccess;
