import { Box } from "@mui/material";
import { centerStyle, circleStyle, c1, c2 } from "../../Styles/Loading";

const Loading = () => {
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
