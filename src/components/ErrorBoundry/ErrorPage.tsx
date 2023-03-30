import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function ErrorPage() {
  return (
    <Container>
      <Helmet>
        <title>Digita | Server error!</title>
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
        <Typography variant="h4" fontWeight={600} color="#323232" fontSize={"35px"}>
          OOPS! Something went wrong!
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

export default ErrorPage;
