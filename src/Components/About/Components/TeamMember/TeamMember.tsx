import { Grid, Box, Typography } from "@mui/material";


interface T {
  image: string;
  name: string;
  job: string;
}

const itemStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 1,
};

const TeamMember = ({image, name, job}: T) => {
  return (
    <Grid item xs={6} sm={6} md={4} lg={2.4}>
      <Box sx={itemStyle}>
        <Box
          component="img"
          src={image}
        />
        <Typography
          sx={{
            fontWeight: 700,
            color: "#333",
            textTransform: "capitalize",
            fontSize: "18px",
            mt: 1,
          }}
        >
          {name}
        </Typography>
        <Typography sx={{ fontWeight: 400, color: "#777" }}>
          {job}
        </Typography>
      </Box>
    </Grid>
  );
};

export default TeamMember;
