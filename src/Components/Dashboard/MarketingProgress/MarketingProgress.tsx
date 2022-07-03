import { Box, LinearProgress } from "@mui/material";
import { DashWrapper } from "../../../Styles/Dashboard";

function MarketingProgress() {
  return (
    <DashWrapper>
      <LinearProgress variant="determinate" value={50} />
    </DashWrapper>
  );
}

export default MarketingProgress;
