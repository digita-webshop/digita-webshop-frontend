import { Box, LinearProgress } from "@mui/material";
import { DashTitle, DashWrapper } from "../../../Styles/Dashboard";

function MarketingProgress() {
  return (
    <DashWrapper>
      <DashTitle>marketing</DashTitle>
      <LinearProgress variant="determinate" value={50} />
    </DashWrapper>
  );
}

export default MarketingProgress;
