import { Box, Typography } from "@mui/material";
import { posterStyle, subjectTitle } from "../../../../Styles/About";

const subjectAlign = {
  minWidth: "91%",
  backgroundColor: "white",
  position: {sm: "relative", md: "absolute"},
  left: "0",
  bottom: "0",
};

const Poster = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        component="img"
        sx={posterStyle}
        src="https://demo-61.woovinapro.com/wp-content/uploads/2022/04/about-1.jpg"
      />
      <Box sx={subjectAlign}>
        <Box sx={{ width: { md: "100%",lg: "60%"}, mx: "auto"}}>
          <Typography variant="h2" component="h2" sx={subjectTitle}>
            Find Out More About Butterfly's Birth History And Historic Mission
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Poster;
