import { Grid, Box, Typography } from "@mui/material";
import { teamMembers } from "./data";
import TeamMember from "../TeamMember/TeamMember";
import { teamTitleStyle, teamsStyle } from "../../styles";

const Team = () => {
  return (
    <Box sx={{ textAlign: "center", pb: 8 }}>
      <Typography variant="h4" sx={teamTitleStyle}>
        OUR TEAM
      </Typography>
      <Grid container sx={teamsStyle} spacing={2}>
        {teamMembers.map((team, index) => (
          <TeamMember
            key={index}
            image={team.image}
            name={team.name}
            job={team.job}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Team;
