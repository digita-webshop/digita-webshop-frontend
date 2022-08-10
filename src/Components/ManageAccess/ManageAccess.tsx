import { Add } from "@mui/icons-material";
import { Box } from "@mui/material";
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
        <PTitle sx={{ fontSize: { xs: "22px", sm: "32px" } }}>
          manage access
        </PTitle>
        <PButton
          variant="contained"
          sx={{
            gap: "4px",
            paddingX: "10px",
            fontSize: { xs: "14px", sm: "16px" },
          }}
        >
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
