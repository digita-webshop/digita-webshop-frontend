import { LinearProgress, Typography } from "@mui/material";

interface Props {
  title: string;
  percent: number;
  color: string;
}
function ProgressCard({ title, percent, color }: Props) {
  return (
    <>
      <Typography
        sx={{ color: "common.panelGrey", textTransform: "capitalize" }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: "white",
          position: "absolute",
          left: percent < 20 ? "2%" : `${percent / 2}%`,
          bottom: "-1",
          zIndex: 10,
          fontSize: "13px",
        }}
      >
        {`${percent}%   `}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={percent}
        sx={{
          height: "18px",
          borderRadius: "5px",
          backgroundColor: `#e9ecef`,
          "& .MuiLinearProgress-bar": {
            backgroundColor: color,
          },
        }}
      />
    </>
  );
}

export default ProgressCard;
