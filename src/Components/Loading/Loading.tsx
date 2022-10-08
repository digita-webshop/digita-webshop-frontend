import { Box } from "@mui/material";
import { centerStyle, circleStyle, c1, c2 } from "./styles";

const Loading = ({ full }: { full?: boolean }) => {
  if (full) {
    return (
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          backgroundColor: "white",
          zIndex: "9999",
          top: 0,
          left: 0,
        }}
      >
        <Box sx={centerStyle}>
          <Box sx={circleStyle}>
            <Box sx={c1}></Box>
            <Box sx={c2}></Box>
          </Box>
        </Box>
      </Box>
    );
  }
  return (
    <Box sx={centerStyle}>
      <Box sx={circleStyle}>
        <Box sx={c1}></Box>
        <Box sx={c2}></Box>
      </Box>
    </Box>
  );
};

export default Loading;
