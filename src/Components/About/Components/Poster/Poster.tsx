import { Box } from "@mui/material";

const Poster = () => {
  return (
    <Box
      component="img"
      sx={{
        height: 500,
        width: "99%",
        maxHeight: { xs: 300, md: 400 },
        maxWidth: { xs: "99%", md: "99%" },
        objectFit: "cover",
      }}
      src="https://demo-61.woovinapro.com/wp-content/uploads/2022/04/about-1.jpg"
    />
  );
};

export default Poster;
