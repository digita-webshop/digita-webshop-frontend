import { Launch } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { marketingProgress } from "../data";
import { analyticsBtnStyles, DashTitle } from "../styles";
import { CardWrapper } from "styles/panel";
import ProgressCard from "./ProgressCard/ProgressCard";

function MarketingProgress() {
  return (
    <CardWrapper>
      <DashTitle>marketing</DashTitle>
      <Box my={5}>
        {marketingProgress.map(({ id, title, percent, color }) => (
          <Box key={id} sx={{ position: "relative", mb: "14px" }}>
            <ProgressCard title={title} percent={percent} color={color} />
          </Box>
        ))}
      </Box>
      <Box sx={analyticsBtnStyles}>
        <Typography>Open analytics</Typography>
        <Launch sx={{ color: "common.panelGrey" }} />
      </Box>
    </CardWrapper>
  );
}

export default MarketingProgress;
