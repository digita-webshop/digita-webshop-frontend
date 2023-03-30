import { Box, Button } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const BasicBtn = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "2rem 0",
        animation: (theme) => (inView ? `btnSlideInFromBottom 1500ms ${theme.transitions.easing.easeInOut}` : ""),
        "@keyframes btnSlideInFromBottom": {
          "0%": {
            opacity: 0,
            transform: "translateY(200%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      }}
      ref={ref}
    >
      <Button
        variant="contained"
        sx={{
          padding: "0.899rem 3.2rem",
          fontSize: "16px",
          textTransform: "uppercase",
        }}
        component={Link}
        to="/shop"
      >
        shop now
      </Button>
    </Box>
  );
};
export default BasicBtn;
