import { Box, Icon, Typography } from "@mui/material";
import { CardWrapper } from "styles/panel";
interface Props {
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  bgColor: string;
}
function StatisticsCard({ title, subtitle, icon, color, bgColor }: Props) {
  return (
    <CardWrapper
      sx={{
        display: "flex",
        gap: "12px",
        alignItems: "center",
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
    </CardWrapper>
  );
}

export default StatisticsCard;
