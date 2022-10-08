import { Box, Grid, Typography } from "@mui/material";
import { ourAddress } from "./data";

function Address() {
  return (
    <Box marginTop={8}>
      <Typography
        variant={"h4"}
        sx={{
          textTransform: "uppercase",
          fontWeight: 600,
          color: "#333333",
          textAlign: "center",
          marginBottom: "40px",
          fontSize: { xs: "24px", sm: "32px" },
        }}
      >
        call us or visit place
      </Typography>
      <Grid container spacing={4}>
        {ourAddress.map(({ id, title, subtitle1, subtitle2 }) => (
          <Grid item xs={6} md={3} key={id}>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                component={"h6"}
                variant={"body1"}
                sx={{
                  textTransform: "uppercase",
                  fontWeight: 600,
                  color: "#333333",
                  marginBottom: "8px",
                }}
              >
                {title}
              </Typography>
              <Typography
                component={"span"}
                variant={"subtitle1"}
                sx={{
                  textTransform: "capitalize",
                  fontWeight: 400,
                  color: "#777777",
                  display: "block",
                }}
              >
                {subtitle1}
              </Typography>
              <Typography
                component={"span"}
                variant={"subtitle1"}
                sx={{
                  textTransform: "capitalize",
                  fontWeight: 400,
                  color: "#777777",
                }}
              >
                {subtitle2}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Address;
