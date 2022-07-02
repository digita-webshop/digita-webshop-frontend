import { Box, Icon, Typography } from "@mui/material";
interface Props {
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  bgColor: string;
}
function StatisticsCard({ title, subtitle, icon, color, bgColor }: Props) {
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
          backgroundColor: bgColor,
        }}
      >
        <Icon sx={{ color: color, margin: "auto" }}>{icon}</Icon>
      </Box>
      <Box>
        <Typography
          sx={{
            textTransform: "capitalize",
            color: "common.digitaBlack",
            fontWeight: 500,
          }}
        >
          {title}
        </Typography>
        <Typography>{subtitle}</Typography>
      </Box>
    </Box>
  );
}

export default StatisticsCard;
