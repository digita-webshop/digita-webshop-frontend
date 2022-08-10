import { Add } from "@mui/icons-material";
import { Box, Modal } from "@mui/material";
import { useState } from "react";
import { CardWrapper, PButton, PTitle } from "../../Styles/panelCommon";
import AdminTable from "./AdminTable/AdminTable";
import RegisterAdmin from "./RegisterAdmin/RegisterAdmin";

function ManageAccess() {
  const [openRegister, setOpenRegister] = useState(false);
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
          onClick={() => setOpenRegister(true)}
        >
          <Add />
          create admin
        </PButton>
      </Box>
      <CardWrapper>
        <AdminTable />
      </CardWrapper>
      <Modal
        open={openRegister}
        onClose={() => setOpenRegister(false)}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div>
          <RegisterAdmin setOpenRegister={setOpenRegister} />
        </div>
      </Modal>
    </Box>
  );
}

export default ManageAccess;
