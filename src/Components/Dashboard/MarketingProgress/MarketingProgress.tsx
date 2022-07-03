import { Launch } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { marketingProgress } from "../../../Services/Utils/Data/data";
import {
  analyticsBtnStyles,
  DashTitle,
  DashWrapper,
} from "../../../Styles/Dashboard";
import ProgressCard from "./ProgressCard/ProgressCard";

function MarketingProgress() {
  return (
    <DashWrapper>
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
    </DashWrapper>
  );
}

export default MarketingProgress;
