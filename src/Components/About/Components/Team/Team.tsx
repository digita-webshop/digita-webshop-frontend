import { Grid, Box, Typography } from "@mui/material";
import { teamData } from "../../../../Services/Utils/Data/data";
import TeamMember from "../TeamMember/TeamMember";

const titleStyle = {
  padding: "8rem 0 1rem 0",
  color: "#333",
  fontSize: "32px",
  fontWeight: "600",
};

export const teamsStyle = {
  display: "flex",
  alignItems: "center",
  width: "100%",
};

const Team = () => {
  return (
    <Box sx={{ textAlign: "center", mb: 8 }}>
      <Typography variant="h4" sx={titleStyle}>
        OUR TEAM
      </Typography>
      <Grid container sx={teamsStyle}>
        {teamData.map((team) => (
          <TeamMember image={team.image} name={team.name} job={team.job} />
        ))}
      </Grid>
    </Box>
  );
};

export default Team;
