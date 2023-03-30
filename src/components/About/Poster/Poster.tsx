import { Box, Typography } from "@mui/material";
import { posterStyle, subjectWrapper, subjectTitle } from "../styles";

const Poster = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        component="img"
        sx={posterStyle}
        src="https://res.cloudinary.com/dmgb7kvmn/image/upload/v1665233435/digita-images/static/iaqcbyw7zxnivmefdpvl.jpg"
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
