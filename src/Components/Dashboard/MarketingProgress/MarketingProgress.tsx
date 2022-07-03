import { Box } from "@mui/material";
import { marketingProgress } from "../../../Services/Utils/Data/data";
import { DashTitle, DashWrapper } from "../../../Styles/Dashboard";
import ProgressCard from "./ProgressCard/ProgressCard";

function MarketingProgress() {
  return (
    <DashWrapper>
      <DashTitle>marketing</DashTitle>
      <Box my={4}>
        {marketingProgress.map(({ id, title, percent, color }) => (
          <Box key={id} sx={{ position: "relative" }}>
            <ProgressCard title={title} percent={percent} color={color} />
          </Box>
        ))}
      </Box>
    </DashWrapper>
  );
}

export default MarketingProgress;
