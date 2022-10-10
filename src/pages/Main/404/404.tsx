import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function pageNotFound() {
  return (
    <Container>
      <Helmet>
        <title>Digita | Page not found!</title>
      </Helmet>
      <Box
        sx={{
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          gap: "20px",
        }}
      >
        <Typography
          variant="h4"
          fontWeight={600}
          color="#323232"
          fontSize={"35px"}
        >
          OOPS! PAGE NOT FOUND
        </Typography>
        <Typography variant="h6" fontWeight={400}>
          Sorry but the page you are looking for does not exist, has been
          removed, changed or is temporarity unavailable.
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/"
          color="error"
          sx={{
            marginTop: "10px",
            paddingY: "10px",
            "&:hover": { backgroundColor: "common.digitaBlack" },
          }}
        >
          BACK TO HOME PAGE
        </Button>
      </Box>
    </Container>
  );
}

export default pageNotFound;
