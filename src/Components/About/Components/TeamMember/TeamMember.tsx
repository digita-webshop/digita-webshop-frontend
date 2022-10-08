import { Grid, Box, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  avatarWrapper,
  teamItemStyle,
  iconStyle,
  iconCircle,
} from "../../styles";

interface T {
  image: string;
  name: string;
  job: string;
}

const TeamMember = ({ image, name, job }: T) => {
  return (
    <Grid item xs={6} sm={6} md={4} lg={2.4}>
      <Box sx={teamItemStyle}>
        <Box sx={avatarWrapper}>
          <Box sx={iconStyle} className="iconBox">
            <Box sx={iconCircle}>
              <TwitterIcon sx={{ color: "#3498db" }} />
            </Box>
            <Box sx={iconCircle}>
              <GoogleIcon sx={{ color: "#E71140" }} />
            </Box>
            <Box sx={iconCircle}>
              <GitHubIcon sx={{ color: "#333" }} />
            </Box>
          </Box>
          <Box component="img" src={image} className="imgBox" />
        </Box>
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
        <Typography sx={{ fontWeight: 400, color: "#777" }}>{job}</Typography>
      </Box>
    </Grid>
  );
};

export default TeamMember;
