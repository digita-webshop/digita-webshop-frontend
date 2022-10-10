import { Box, Typography, Button } from "@mui/material";
import { Warning } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Warning sx={{ fontSize: "150px" }} color="error" />
      <Typography variant="h4" fontWeight={600} color="#333333 ">
        UNKNOWN SERVER ERROR
      </Typography>

      <Typography variant="h6" fontWeight={400} color="#333333">
        Could not retrieve data! please try again later.
      </Typography>
      <Button
        variant="contained"
        onClick={() => navigate(0)}
        color="error"
        sx={{
          marginTop: "10px",
          paddingY: "6px",
          "&:hover": { backgroundColor: "common.digitaBlack" },
        }}
      >
        RELOAD
      </Button>
    </Box>
  );
}

export default Error;
