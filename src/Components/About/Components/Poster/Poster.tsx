import { Box, Typography } from "@mui/material";
import {
  posterStyle,
  subjectWrapper,
  subjectTitle,
} from "../../../../Styles/About";

const Poster = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        component="img"
        sx={posterStyle}
        src="https://demo-61.woovinapro.com/wp-content/uploads/2022/04/about-1.jpg"
      />
      <Box sx={subjectWrapper}>
        <Box
          sx={{
            width: { md: "100%", lg: "80%" },
            backgroundColor: "#fff",
            padding: "30px 0",
          }}
        >
          <Typography variant="h2" component="h2" sx={subjectTitle}>
            Find Out More About Butterfly's Birth History And Historic Mission
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Poster;
