import { Box, Icon, Typography } from "@mui/material";

function StatisticsCard() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "12px",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "white",
        boxShadow: "0 0.1rem 0.25rem rgb(0 0 0 / 8%)",
        borderRadius: "5px",
      }}
    >
      <Box
        sx={{
          width: "48px",
          height: "48px",
          display: "flex",
          borderRadius: "50%",
          backgroundColor: "lightblue",
        }}
      >
        <Icon sx={{ color: "blue", margin: "auto" }}>monetization_on</Icon>
      </Box>
      <Box>
        <Typography
          sx={{
            textTransform: "capitalize",
            color: "common.digitaBlack",
            fontWeight: 500,
          }}
        >
          total sales
        </Typography>
        <Typography>$19,544,25.11</Typography>
      </Box>
    </Box>
  );
}

export default StatisticsCard;
